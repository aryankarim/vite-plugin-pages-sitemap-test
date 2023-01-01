"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSitemapXml = void 0;
const vite_plugin_pages_sitemap_1 = require("vite-plugin-pages-sitemap");
const generateSitemapXml = ({ routes, hostname, otherConfig, }) => ({
    name: "generate-sitemap",
    configResolved() {
        (0, vite_plugin_pages_sitemap_1.default)(Object.assign({ hostname,
            routes }, otherConfig));
    },
});
exports.generateSitemapXml = generateSitemapXml;
//# sourceMappingURL=index.js.map