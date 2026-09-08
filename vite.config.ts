import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/samuel-ulivi/',
  plugins: [react()],
});