import { defineConfig } from 'vite';
import { resolve } from 'path';
 
export default defineConfig({
  root: './',
  base: '/',
  appType: 'mpa',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin/index.html'),
      },
    },
  },
  server: {
    port: 5174,          // Always use this port
    strictPort: true,    // FAIL instead of jumping to 5174, 5175 etc.
    allowedHosts: true,  // Allow tunnel hosts

    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
      '/assets/uploads': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
    },
  },
});
