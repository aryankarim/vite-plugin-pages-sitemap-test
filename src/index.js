import { generateSitemap } from "vite-plugin-pages-sitemap";

export const generateSitemapXml = ({ routes, hostname, otherConfig }) => ({
  name: "generate-sitemap",
  configResolved() {
    generateSitemap({
      hostname,
      routes,
      ...otherConfig,
    });
  },
});
