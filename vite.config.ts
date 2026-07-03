import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/lovablepascal/",
  },
  tanstackStart: {
    // SPA mode: skip SSR and emit a client-side shell that TanStack Router
    // hydrates in the browser. GitHub Pages just serves the shell and assets.
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        enabled: true,
        outputPath: "/index.html",
        crawlLinks: true,
        retryCount: 0,
        autoSubfolderIndex: true,
      },
    },
  },
  nitro: {
    preset: "static",
  },
});
