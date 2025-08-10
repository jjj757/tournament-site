// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this to "/" ONLY if your repo is <username>.github.io
export default defineConfig({
  plugins: [react()],
  base: '/tournament-site/',
})
