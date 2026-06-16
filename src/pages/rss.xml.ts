import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => data.draft !== true)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `Actualidad de ${SITE.name}`,
    description:
      'Análisis y novedades sobre auditoría de cuentas, subvenciones y fiscalidad de Ruiz & Marín.',
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/actualidad/${post.id}/`,
      author: SITE.email,
    })),
    customData: `<language>es-es</language>`,
  });
}
