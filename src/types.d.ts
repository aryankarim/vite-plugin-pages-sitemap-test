export declare function GenerateSitemapXml(config: {
  routes: Array<{ route: string; path: string }>;
  hostname: string;
  otherConfig: any;
}): {
  name: string;
  configResolved: Function;
};
