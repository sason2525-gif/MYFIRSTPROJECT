
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // הגדרת ה-base כנתיב יחסי מאפשרת לזה לעבוד בכל URL ב-GitHub Pages
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 3000,
  }
});
