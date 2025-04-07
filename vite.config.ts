import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'cf82-2804-14d-8e8f-5535-aa6f-b254-3951-322f.ngrok-free.app',
    ],
  },
});
