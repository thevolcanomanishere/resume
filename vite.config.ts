import { defineConfig } from "vite";
import { ssr } from "vite-plugin-ssr/plugin";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssr({ prerender: true }),
    viteCompression({
      algorithm: "brotliCompress",
    }),
  ],
});
