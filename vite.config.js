// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,json}'],
        // ... konfigurasi workbox lainnya
      },
      manifest: {
        name: 'Node Calculator PWA',
        short_name: 'Calculator',
        description: 'Kalkulator sederhana dengan React dan Node.js',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'calculator.svg',
            sizes: 'any', // Gunakan 'any' untuk SVG
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: 'https://github.com/jumadil94-hub/node-calculator.git/', // Tambahkan baris ini
  // server: {
  //   host: true, // Tambahkan baris ini
  // },
});

