import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPurge from 'vite-plugin-purgecss';

// https://vitejs.dev/config/s
export default defineConfig({
  plugins: [
    react(),
    htmlPurge({
      content: ["./src/**/*.jsx", "./src/**/*.scss"],
    }),
  ]
})
 