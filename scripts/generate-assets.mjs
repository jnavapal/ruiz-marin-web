/**
 * Genera los PNG (favicons, iconos PWA, apple-touch-icon, Open Graph y logo para
 * Schema) a partir de los SVG fuente de /public. Reproducible y versionable.
 *
 *   node scripts/generate-assets.mjs
 *
 * Se ejecuta una vez tras `npm install`; los PNG resultantes se commitean.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '..', 'public');

const faviconSvg = join(pub, 'favicon.svg');
const logoSvg = join(pub, 'logo-ruiz-marin.svg');
const ogSvg = join(pub, 'og-image.svg');

const jobs = [
  { src: faviconSvg, out: 'favicon-32.png', w: 32, h: 32 },
  { src: faviconSvg, out: 'favicon-16.png', w: 16, h: 16 },
  { src: logoSvg, out: 'apple-touch-icon.png', w: 180, h: 180, bg: '#ffffff' },
  { src: logoSvg, out: 'icon-192.png', w: 192, h: 192, bg: '#ffffff' },
  { src: logoSvg, out: 'icon-512.png', w: 512, h: 512, bg: '#ffffff' },
  { src: logoSvg, out: 'logo-ruiz-marin.png', w: 512, h: 512, bg: '#ffffff' },
  { src: ogSvg, out: 'og-image.png', w: 1200, h: 630 },
];

for (const job of jobs) {
  let img = sharp(job.src, { density: 384 }).resize(job.w, job.h, {
    fit: 'contain',
    background: job.bg ?? { r: 0, g: 0, b: 0, alpha: 0 },
  });
  if (job.bg) {
    img = img.flatten({ background: job.bg });
  }
  await img.png().toFile(join(pub, job.out));
  console.log(`✓ ${job.out} (${job.w}×${job.h})`);
}

console.log('Listo: assets PNG generados en /public');
