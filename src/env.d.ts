/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Access key pública del formulario de contacto (Web3Forms). */
  readonly PUBLIC_FORM_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
