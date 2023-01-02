declare function generateSitemapXml(config: {
  routes: Array<{ name: string; path: string }>;
  hostname: string;
  otherConfig: any;
}): {
  name: string;
  configResolved: Function;
};

export { generateSitemapXml };
