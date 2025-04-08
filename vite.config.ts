import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'd8bb-2804-14d-8e8f-5535-a242-bb9e-7a36-d074.ngrok-free.app',
    ],
  },
});
