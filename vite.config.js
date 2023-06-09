import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*
export default defineConfig({
  plugins: [react()],
})
*/

export default {
    plugins: [react()],
    build: {
      rollupOptions: {
        input: 'src/main.js',
      },
    },
    optimizeDeps: {
      include: [
      ],
    },
  };
  