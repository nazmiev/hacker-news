import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === 'production' && process.env.CI_PROJECT_NAME 
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/';

console.log(process.env.NODE_ENV, process.env.CI_PROJECT_NAME, base);

export default defineConfig({
  base: base,
  plugins: [react()],
})
