import generateSitemap from "vite-plugin-pages-sitemap";

export const generateSitemapXml = ({
  routes,
  hostname,
  otherConfig,
}: {
  routes: Array<{ name: string; path: string }>;
  hostname: string;
  otherConfig: any;
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
