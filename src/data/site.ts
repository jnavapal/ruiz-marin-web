/**
 * FUENTE ÚNICA DE VERDAD del sitio.
 *
 * Datos reales obtenidos de la web pública actual (ruizmarinauditores.com).
 * Los valores entre {{ dobles llaves }} son PLACEHOLDERS: deben sustituirse por
 * los datos reales antes de la publicación definitiva. La lista completa de
 * placeholders está en el README.md.
 */

export const SITE = {
  // ── Identidad ──
  name: 'Ruiz & Marín',
  shortName: 'Ruiz & Marín',
  // Razón social completa para avisos legales y Schema (placeholder).
  legalName: '{{Ruiz & Marín Auditores, S.L.}}',
  tagline: 'Auditoría de cuentas con rigor, independencia y confidencialidad',
  description:
    'Despacho de auditoría de cuentas inscrito en el ROAC. Auditoría legal y voluntaria, ' +
    'procedimientos acordados, acreditación de deducciones fiscales y justificación de ' +
    'subvenciones de I+D, FEDER y CDTI para pymes y profesionales en Burgos y toda España.',

  // ── Dominio canónico (producción) ──
  url: 'https://www.ruizmarinauditores.com',

  // ── Contacto (datos reales) ──
  email: 'info@ruizmarinauditores.com',
  phoneDisplay: '+34 669 351 525',
  phoneHref: '+34669351525',

  // ── Localización ──
  address: {
    street: '{{Calle y número}}',
    postalCode: '{{CP}}',
    city: 'Burgos',
    region: 'Burgos',
    regionCommunity: 'Castilla y León',
    country: 'España',
    countryCode: 'ES',
  },
  // Coordenadas APROXIMADAS del centro de Burgos. Sustituir por las exactas del despacho.
  geo: {
    lat: 42.3408,
    lng: -3.6997,
  },
  // Horario de atención (PLACEHOLDER: confirmar antes de publicar).
  hours: {
    display: 'Lunes a viernes, 09:00–14:00 y 16:00–19:00',
    // Formato Schema.org openingHours
    spec: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '14:00' },
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '16:00', closes: '19:00' },
    ],
  },

  // ── Datos fiscales y registrales (PLACEHOLDERS) ──
  fiscal: {
    nif: '{{NIF/CIF}}',
    roacFirma: '{{Nº ROAC de la sociedad}}',
    registroMercantil:
      'Inscrita en el Registro Mercantil de {{Burgos}}, Tomo {{tomo}}, Folio {{folio}}, Hoja {{hoja}}',
  },

  // ── Redes sociales ──
  // No se publican perfiles sociales hasta confirmar que existen cuentas oficiales.
  social: [] as Array<{ name: string; url: string }>,
} as const;

/** Años de experiencia y cifras de confianza (E-E-A-T). Ajustar a datos reales. */
export const STATS = [
  { value: '+9', label: 'años de experiencia', detail: 'de los socios en Big Four y empresa privada' },
  { value: '4', label: 'corporaciones profesionales', detail: 'ICJCE, ROAC, Colegio de Economistas y AECA' },
  { value: '100%', label: 'trabajos firmados por auditor ROAC', detail: 'inscrito en el registro oficial' },
  { value: '{{nº}}', label: 'sectores atendidos', detail: 'industria, comercio, servicios y entidades sin ánimo de lucro' },
] as const;

/** Credenciales y pertenencias profesionales (bloque de confianza / E-E-A-T). */
export const CREDENTIALS = [
  {
    abbr: 'ROAC',
    name: 'Registro Oficial de Auditores de Cuentas',
    detail: 'Inscripción nº {{Nº ROAC}}. Habilitación legal para firmar informes de auditoría en España.',
  },
  {
    abbr: 'ICJCE',
    name: 'Instituto de Censores Jurados de Cuentas de España',
    detail: 'Corporación de derecho público que agrupa a los auditores de cuentas en España.',
  },
  {
    abbr: 'Col. Economistas',
    name: 'Colegio Oficial de Economistas',
    detail: 'Colegiación profesional que avala la formación y el ejercicio de la economía.',
  },
  {
    abbr: 'AECA',
    name: 'Asociación Española de Contabilidad y Administración de Empresas',
    detail: 'Referencia técnica y doctrinal en contabilidad y auditoría en España.',
  },
] as const;

/** Socios (placeholders: sustituir por nombres, cargos y nº ROAC reales). */
export const PARTNERS = [
  {
    name: '{{Nombre del socio 1}}',
    role: 'Socio auditor',
    roac: 'ROAC nº {{XXXXX}}',
    bio: '{{Auditor de cuentas inscrito en el ROAC. Más de 9 años de experiencia, con trayectoria previa en una de las Big Four y en dirección financiera de empresa privada.}}',
  },
  {
    name: '{{Nombre del socio 2}}',
    role: 'Socio auditor',
    roac: 'ROAC nº {{XXXXX}}',
    bio: '{{Auditor de cuentas inscrito en el ROAC. Más de 9 años de experiencia, con trayectoria previa en una de las Big Four y en dirección financiera de empresa privada.}}',
  },
] as const;

/**
 * Servicios. El cuerpo completo (qué es / cuándo / entregable / FAQ) vive en cada
 * página de /servicios; aquí guardamos lo necesario para índice, tarjetas, menús,
 * breadcrumbs y Schema.
 */
export const SERVICES = [
  {
    slug: 'cuentas-anuales',
    title: 'Auditoría de cuentas anuales',
    navTitle: 'Auditoría de cuentas anuales',
    excerpt:
      'Auditoría legal (obligatoria) y voluntaria de cuentas anuales, con informe firmado por auditor inscrito en el ROAC.',
    forWhom: 'Director financiero de pyme obligada a auditar',
  },
  {
    slug: 'procedimientos-acordados',
    title: 'Informes de procedimientos acordados',
    navTitle: 'Procedimientos acordados',
    excerpt:
      'Trabajos de revisión sobre estados financieros concretos o transacciones específicas, con un informe de hallazgos objetivo.',
    forWhom: 'Empresas que necesitan verificar partidas concretas',
  },
  {
    slug: 'deducciones-fiscales',
    title: 'Acreditación de deducciones fiscales',
    navTitle: 'Deducciones fiscales',
    excerpt:
      'Verificación rigurosa de las partidas que reducen la carga tributaria, con el respaldo documental que exige Hacienda.',
    forWhom: 'Empresas que necesitan deducciones fiscales acreditadas',
  },
  {
    slug: 'justificacion-de-subvenciones',
    title: 'Revisión justificativa de subvenciones y PMP',
    navTitle: 'Justificación de subvenciones',
    excerpt:
      'Informes justificativos de subvenciones de I+D, FEDER y CDTI, y acreditación del periodo medio de pago a proveedores (PMP).',
    forWhom: 'Responsable que justifica subvenciones I+D/FEDER/CDTI',
  },
  {
    slug: 'otros-trabajos-y-servicios',
    title: 'Otros trabajos y servicios',
    navTitle: 'Otros trabajos y servicios',
    excerpt:
      'Periciales económicas, due diligence, valoraciones, informes especiales mercantiles y otros encargos relacionados con la auditoría.',
    forWhom: 'Empresas con necesidades específicas de aseguramiento',
  },
] as const;

export type Service = (typeof SERVICES)[number];

/** Navegación principal. */
export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Actualidad', href: '/actualidad' },
  { label: 'Contacto', href: '/contacto' },
] as const;
