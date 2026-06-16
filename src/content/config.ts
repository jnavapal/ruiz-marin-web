import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección "blog" → /actualidad
 * Los archivos .md viven en src/content/blog/. El archivo _plantilla-articulo.md
 * (con guion bajo) queda excluido del patrón para que sirva solo de plantilla.
 */
const blog = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(75, 'El título no debería superar 75 caracteres (SEO).'),
    description: z
      .string()
      .min(50, 'La descripción debería tener al menos 50 caracteres (SEO/meta).')
      .max(165, 'La descripción no debería superar 165 caracteres (meta description).'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Ruiz & Marín'),
    tags: z.array(z.string()).default([]),
    /** Ruta de imagen de portada bajo /public (p. ej. /blog/mi-articulo.jpg). Opcional. */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
