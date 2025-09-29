import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración limpia sin PostCSS
export default defineConfig({
  plugins: [react()],
  base: '/My-page',
  // Removemos cualquier configuración de CSS/PostCSS
});