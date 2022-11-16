// unable to complete 'Build' wiht this import.
// import { SITE_URL } from "./src/config";
// NO!! -- import alias work yet?
// import { SITE_URL } from "@config";

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// console.log("CONFIG:", { SITE_URL });
// https://astro.build/config
export default defineConfig({
  // site: {SITE_URL},
  site: 'https://example.com',

  integrations: [mdx(), sitemap()],
});
