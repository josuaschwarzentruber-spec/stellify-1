import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    // Chunk-Splitting für bessere Performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  // Für GitHub Pages: Passe den Base-Path an dein Repo an
  // Falls dein Repo "stellify" heisst: base: "/stellify/"
  // Falls du eine Custom Domain (stellify.ch) nutzt: base: "/"
  base: "/",
});
