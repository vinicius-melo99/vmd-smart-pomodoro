import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '7967-2804-14d-8e8f-5535-4801-56be-4f29-e430.ngrok-free.app',
    ],
  },
});
