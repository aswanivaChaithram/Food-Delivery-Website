import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Food-Delivery-Website/',
  server: {
    open: true,        // auto open in browser on start
  },
})
