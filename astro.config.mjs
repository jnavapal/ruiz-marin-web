// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// URL canónica de producción. Se usa para canonicals, Open Graph, sitemap y robots.
// El dominio definitivo se conectará en Cloudflare al final; hasta entonces el sitio
// se sirve en https://ruiz-marin-web.pages.dev pero el canónico apunta ya al dominio real.
const SITE = 'https://www.ruizmarinauditores.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    tailwind({
      // Inyectamos el reset/base nosotros desde global.css para controlar el CSS crítico.
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: undefined,
      filter: (page) =>
        !page.includes('/gracias') && !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date('2026-06-17'),
    }),
  ],
  image: {
    // Permite optimizar imágenes locales a AVIF/WebP en build.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
