import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    host: true, 
    port: 5173,
    allowedHosts: ["https://b0d1-2409-40e3-e-7c6d-911f-d55d-f05d-ad23.ngrok-free.app"]
  }
})
