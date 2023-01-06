import { RouteRecordRaw } from "vue-router";

declare function generateSitemapXml(config: {
  routes: Array<RouteRecordRaw>;
  hostname: string;
  otherConfig?: any;
}): {
  name: string;
  configResolved: Function;
};

export { generateSitemapXml };
