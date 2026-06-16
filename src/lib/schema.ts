/**
 * Generadores de datos estructurados (Schema.org / JSON-LD).
 * Centralizado para mantener coherencia de @id y datos NAP en todo el sitio.
 */
import { SITE } from '../data/site';

const ORG_ID = `${SITE.url}/#organizacion`;
const BUSINESS_ID = `${SITE.url}/#despacho`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.countryCode,
};

const openingHours = SITE.hours.spec.map((s) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: s.days,
  opens: s.opens,
  closes: s.closes,
}));

/** Organización. sameAs se rellena con perfiles oficiales cuando existan. */
export function organizationSchema() {
  const sameAs = SITE.social.map((s) => s.url);
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    logo: `${SITE.url}/logo-ruiz-marin.png`,
    image: `${SITE.url}/og-image.png`,
    description: SITE.description,
    address: postalAddress,
    ...(sameAs.length ? { sameAs } : {}),
    knowsAbout: [
      'Auditoría de cuentas anuales',
      'Procedimientos acordados',
      'Deducciones fiscales',
      'Justificación de subvenciones de I+D, FEDER y CDTI',
      'Período medio de pago a proveedores',
    ],
  };
}

/**
 * AccountingService (subtipo de LocalBusiness/ProfessionalService) para la home:
 * NAP, área de servicio, geocoordenadas, horario y catálogo de servicios.
 */
export function accountingServiceSchema() {
  return {
    '@type': 'AccountingService',
    '@id': BUSINESS_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    image: `${SITE.url}/og-image.png`,
    logo: `${SITE.url}/logo-ruiz-marin.png`,
    priceRange: '€€',
    description: SITE.description,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: openingHours,
    areaServed: [
      { '@type': 'City', name: 'Burgos' },
      { '@type': 'Country', name: 'España' },
    ],
    parentOrganization: { '@id': ORG_ID },
    hasCredential: [
      'Inscripción en el Registro Oficial de Auditores de Cuentas (ROAC)',
      'Instituto de Censores Jurados de Cuentas de España (ICJCE)',
      'Colegio Oficial de Economistas',
      'Asociación Española de Contabilidad y Administración de Empresas (AECA)',
    ],
    knowsLanguage: 'es',
  };
}

/** BreadcrumbList para páginas internas. items: [{name, path}] */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}

/** FAQPage a partir de una lista de {q, a}. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Article para entradas del blog. */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Organization', name: opts.author ?? SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo-ruiz-marin.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    inLanguage: 'es',
  };
}

/** Envuelve uno o varios nodos con el @context de schema.org. */
export function graph(...nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
