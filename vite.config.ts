import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // импортируем миксины и переменные для стилей
        additionalData: '@import "@/assets/scss/shared/_mixins.scss"; @import "@/assets/scss/shared/_variables.scss";'
      }
    }
  },
})
