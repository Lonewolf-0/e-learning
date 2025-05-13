// filepath: /home/aryan/Documents/Projects/e-learning/frontend/vite.config.js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.env?.VITE_ROOT_DIR || "", "");
  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0", // Bind to 0.0.0.0 for Render
      port: parseInt(env.PORT) || 10000, // Use PORT from environment or fallback to 10000
    },
  };
});
