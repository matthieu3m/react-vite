import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-vite/', // Ici je configure ma base PATH
  build: {
    minify: 'terser', //Utilise terser pour minifier
    sourcemap: true, // Générer des sourcemaps
  }
})
