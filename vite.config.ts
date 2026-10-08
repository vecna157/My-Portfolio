import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        skills: resolve(import.meta.dirname, 'skills.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
      },
    },
  },
});
