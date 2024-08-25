import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // This ensures all assets are relative to the current path
  plugins: [react()],
})
