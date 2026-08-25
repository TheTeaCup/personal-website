import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: [
    "@emotion/cache",
    "@emotion/utils",
    "@emotion/react",
    "@emotion/styled",
    "@emotion/use-insertion-effect-with-fallbacks",
  ],
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
