// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    // Example: allow processing all images from Hygraph
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.graphassets.com",
      },
    ],
  },

  integrations: [
    icon({
      include: {
        devicon: ["*"],
      },
    }),
  ],
});
