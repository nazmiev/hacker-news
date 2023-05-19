import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === 'production' && process.env.REPO_NAME
    ? '/' + process.env.REPO_NAME+ '/'
    : '/';

console.log(process.env);

export default defineConfig({
  base: '/hacker-news/',
  base: base,
  plugins: [react()],
})
