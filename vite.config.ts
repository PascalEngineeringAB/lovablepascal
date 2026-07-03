import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/lovablepascal/",
  },
  tanstackStart: {
    // Prerender every route to static HTML so the build outputs index.html
    // files that GitHub Pages can serve without a runtime server.
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/", "/about", "/services", "/projects", "/contact"],
    },
  },
  // Emit a plain static site (no Cloudflare worker) so the GitHub Pages
  // artifact contains index.html + hashed assets and nothing else.
  nitro: {
    preset: "static",
  },
});
