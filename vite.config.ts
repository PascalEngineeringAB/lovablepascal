import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/lovablepascal/",
  },
  tanstackStart: {
    server: { entry: "server" },
    // Prerender every route to static HTML so the build outputs index.html
    // files that GitHub Pages can serve without a Node/Cloudflare server.
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/", "/about", "/services", "/projects", "/contact"],
    },
    pages: [
      { path: "/", prerender: { enabled: true, crawlLinks: true } },
      { path: "/about", prerender: { enabled: true } },
      { path: "/services", prerender: { enabled: true } },
      { path: "/projects", prerender: { enabled: true } },
      { path: "/contact", prerender: { enabled: true } },
    ],
  },
  // Emit a plain static site (no Cloudflare worker) so the GitHub Pages
  // artifact contains index.html + hashed assets and nothing else.
  nitro: {
    preset: "static",
  },
});
