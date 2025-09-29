import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración limpia sin PostCSS
export default defineConfig({
  plugins: [react()],
  // Removemos cualquier configuración de CSS/PostCSS
})