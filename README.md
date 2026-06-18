# Ruiz & Marín — Web corporativa

Sitio web corporativo de **Ruiz & Marín**, despacho de auditoría de cuentas inscrito en el
ROAC (Burgos). Construido con **Astro** (100 % estático/SSG) y **Tailwind CSS**, optimizado
para SEO, GEO/LLMO, accesibilidad (WCAG 2.1 AA), rendimiento (Core Web Vitals) y cumplimiento
legal (LSSI-CE, RGPD/LOPDGDD).

---

## 🚀 Puesta en marcha

Requisitos: **Node.js 18+** (probado con Node 24) y npm.

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ localmente para revisar el build
```

> La primera vez, tras `npm install`, ejecuta `node scripts/generate-assets.mjs` solo si
> modificas los SVG de marca (ver sección «Imágenes y favicons»). Los PNG ya vienen generados
> y versionados.

---

## ☁️ Despliegue (Cloudflare Pages — YA configurado)

El proyecto de Cloudflare Pages **ya existe y está conectado** al repositorio de GitHub
`jnavapal/ruiz-marin-web`. **No hay que configurar nada por CLI ni añadir tokens.**

- **Rama de producción:** `main`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Astro

👉 **Cada `git push` a `main` dispara automáticamente una reconstrucción y un nuevo
despliegue en Cloudflare.** URL provisional: `https://ruiz-marin-web.pages.dev`
(el dominio definitivo se conectará al final).

---

## 🔑 Variables de entorno

Las claves **nunca** van en el código. Se definen en
**Cloudflare Pages → Settings → Environment variables**.

| Variable          | Descripción                                              | Dónde se obtiene                         |
| ----------------- | -------------------------------------------------------- | ---------------------------------------- |
| `PUBLIC_FORM_KEY` | Access key del formulario de contacto (Web3Forms).       | Gratis en <https://web3forms.com>        |

**Configurar el formulario de contacto:**

1. Entra en <https://web3forms.com> e introduce el email donde quieres recibir los mensajes
   (`info@ruizmarinauditores.com`). Te enviarán una **Access Key**.
2. En Cloudflare Pages → Settings → Environment variables, crea `PUBLIC_FORM_KEY` con esa key
   (en los entornos *Production* y *Preview*).
3. Vuelve a desplegar (cualquier push, o «Retry deployment»). El formulario quedará operativo.

Para desarrollo local, copia `.env.example` a `.env` y pon tu key allí (el `.env` está
ignorado por git).

---

## 📝 Placeholders pendientes de rellenar

El sitio usa datos reales públicos (Burgos, teléfono, email, servicios y credenciales) y deja
como **`{{ placeholder }}`** los datos que faltan por confirmar. Búscalos en el código con tu
editor (`{{`). Casi todos están centralizados en **`src/data/site.ts`**.

| Placeholder                         | Dónde                              | Qué poner                                            |
| ----------------------------------- | ---------------------------------- | --------------------------------------------------- |
| `{{NIF de cada titular}}`           | `site.ts` → `fiscal.nif`           | NIF de los titulares (personas físicas). Único campo legal que falta |
| Coordenadas `geo.lat` / `geo.lng`   | `site.ts` → `geo`                  | Coordenadas exactas (ahora: aprox. Quintanilla Vivar) |
| Bios de socios                      | `site.ts` → `PARTNERS[].bio`       | Personalizar las bios (ahora son genéricas)         |

> **Estructura legal:** los dos auditores ejercen como **personas físicas** bajo el nombre comercial
> «Ruiz & Marín». Por eso **no hay razón social, ni ROAC de sociedad, ni Registro Mercantil**: la
> habilitación es el ROAC individual de cada uno (ya integrado). El único dato legal pendiente es el
> **NIF** de los titulares para el aviso legal y la política de privacidad.

> **Datos ya integrados:** dirección completa (Calle Tobares 7, 09140 Quintanilla Vivar, Burgos),
> titulares Marcos Ruiz Fontaneda (ROAC 24384) y Estefanía Marín Solís (ROAC 24319), +10 años de
> experiencia, +100 clientes, horario y contacto.

> Tras rellenar `src/data/site.ts`, los datos se propagan automáticamente a páginas, footer,
> avisos legales y datos estructurados (JSON-LD). Revisa también `public/llms.txt`.

---

## ✍️ Publicar un artículo en «Actualidad»

El blog es una **colección de contenido** de Astro en `src/content/blog/`.

1. Copia la plantilla `src/content/blog/_plantilla-articulo.md`.
2. Renómbrala con un nombre descriptivo: el nombre del archivo será la URL.
   `mi-articulo.md` → `/actualidad/mi-articulo`
3. Rellena el *frontmatter* (título, descripción, fecha…) y escribe el contenido en Markdown.
4. Pon `draft: false` para publicarlo.
5. (Opcional) Imagen de portada: colócala en `public/blog/` y referénciala con
   `cover: '/blog/mi-imagen.jpg'` y `coverAlt: '...'`.
6. `git push` a `main` → Cloudflare publica el artículo. Se generan **solos**: Schema Article
   (JSON-LD), breadcrumbs, meta tags, Open Graph, entrada en el sitemap y en el RSS (`/rss.xml`).

Los archivos que empiezan por `_` (como la plantilla) **no se publican**.

---

## 🖼️ Imágenes y favicons

Los favicons, iconos PWA, `apple-touch-icon`, la imagen Open Graph y el logo para Schema se
**generan desde SVG** con `sharp`:

- Fuentes SVG: `public/favicon.svg`, `public/logo-ruiz-marin.svg`, `public/og-image.svg`.
- Generador: `node scripts/generate-assets.mjs` (regenera los PNG si editas los SVG).

El logotipo de la cabecera es un *wordmark* en `src/components/Logo.astro` (texto, nítido y
adaptable a fondo claro/oscuro). Si dispones del **logo oficial en vectorial**, puedes
sustituir `public/logo-ruiz-marin.svg` y volver a generar los assets.

---

## 🧱 Estructura del proyecto

```
public/                 Estáticos: favicons, og-image, logo, robots.txt, llms.txt, manifest, _headers
scripts/                Generación de assets PNG desde SVG
src/
  components/           BaseHead, Header, Footer, CookieBanner, Faq, Breadcrumbs, ContactForm, ConsentMap…
  content/
    config.ts           Esquema Zod de la colección de blog
    blog/               Artículos (.md) + _plantilla-articulo.md
  data/
    site.ts             ⭐ Fuente única de verdad (NAP, credenciales, servicios, socios)
    services-content.ts Contenido completo de las 5 páginas de servicio
  layouts/              BaseLayout, LegalLayout
  lib/
    schema.ts           Generadores de JSON-LD (Organization, AccountingService, FAQ, Article…)
  pages/                Rutas (.astro) y endpoint rss.xml.ts
  styles/global.css     Tailwind + base + utilidades propias
astro.config.mjs        Configuración (site, sitemap, salida estática)
tailwind.config.mjs     Tokens de diseño (colores, tipografía)
```

---

## ✅ Qué incluye

- **SEO técnico:** meta title/description únicos, canonical, Open Graph + Twitter Cards,
  sitemap (`@astrojs/sitemap`), `robots.txt`, jerarquía semántica (un solo `<h1>`/página).
- **Datos estructurados (JSON-LD):** AccountingService/Organization en inicio, BreadcrumbList,
  FAQPage por servicio, Article en el blog.
- **GEO/LLMO/AIO:** bloques FAQ con respuestas autocontenidas, definiciones, tablas de umbrales,
  y `public/llms.txt`.
- **Cumplimiento legal:** aviso legal (LSSI-CE), política de privacidad (RGPD/LOPDGDD, con
  secreto profesional del auditor), política de cookies y **banner de cookies propio** que
  bloquea el mapa hasta el consentimiento.
- **Accesibilidad (WCAG 2.1 AA):** skip-to-content, foco visible, navegación por teclado,
  `aria-*`, formularios con `<label>` y errores accesibles.
- **Rendimiento:** CSS crítico en línea, fuentes auto-alojadas con `font-display: swap`,
  imágenes optimizadas, JavaScript mínimo (menú móvil, validación de formulario, cookies, mapa).

---

## 📄 Notas

- No se incluyen enlaces a redes sociales hasta confirmar perfiles oficiales reales.
- El dominio definitivo (`ruizmarinauditores.com`) se conectará en Cloudflare al final;
  hasta entonces la web vive en `*.pages.dev`. El canónico ya apunta al dominio real.
