/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MECHECKPLUS_API_URL: string
  // Diğer environment variable'larınızı da buraya ekleyebilirsiniz
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
