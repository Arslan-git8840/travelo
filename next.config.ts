import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   // 1. Ignore ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 2. Ignore TypeScript errors during production builds
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.dwarikas.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bing.com',
      }
    ]
  }
};

export default nextConfig;
