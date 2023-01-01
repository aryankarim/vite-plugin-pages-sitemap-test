import generateSitemap from "vite-plugin-pages-sitemap";
import { GenerateSitemapXml } from "./types";

export const generateSitemapXml: typeof GenerateSitemapXml = ({
  routes,
  hostname,
  otherConfig,
}) => ({
  name: "generate-sitemap",
  configResolved() {
    generateSitemap({
      hostname,
      routes,
      ...otherConfig,
    });
  },
});
