/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Color corporativo principal: azul navy sobrio (confianza, rigor) ──
        brand: {
          50: '#f0f4f8',
          100: '#dae3ee',
          200: '#b9cadd',
          300: '#8da9c6',
          400: '#5e80a6',
          500: '#436389',
          600: '#345070',
          700: '#2a405a',
          800: '#213247',
          900: '#162636',
          950: '#0d1825',
        },
        // ── Acento discreto: dorado/ocre apagado, solo para detalles y filetes ──
        accent: {
          50: '#fbf8f1',
          100: '#f4ead6',
          200: '#e7d2a9',
          300: '#d8b676',
          400: '#c79e4f',
          500: '#b1873b',
          600: '#956e30',
          700: '#79572a',
          800: '#634727',
          900: '#523c24',
        },
        // ── Neutros cálidos (fondos y superficies) ──
        sand: {
          50: '#faf9f7',
          100: '#f4f2ed',
          200: '#e8e4db',
          300: '#d6d0c3',
          400: '#b3aa98',
        },
        // ── Tinta para texto (alto contraste AA sobre blanco) ──
        ink: {
          DEFAULT: '#1b2430',
          soft: '#3c4757',
          muted: '#5a6573',
        },
      },
      fontFamily: {
        sans: [
          'Inter Variable',
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Source Serif 4 Variable',
          'Source Serif 4',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
      },
      fontSize: {
        // Escala tipográfica con line-height legible para texto técnico-legal.
        'display': ['clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h1': ['clamp(1.9rem, 1.45rem + 1.8vw, 2.75rem)', { lineHeight: '1.14', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.5rem, 1.25rem + 1.1vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose: '68ch',
        content: '1200px',
      },
      borderRadius: {
        card: '0.5rem',
      },
      boxShadow: {
        card: 'none',
        'card-hover': '0 1px 2px rgba(27,36,48,0.05), 0 12px 28px -18px rgba(27,36,48,0.22)',
      },
      ringColor: {
        focus: '#436389',
      },
    },
  },
  plugins: [],
};
