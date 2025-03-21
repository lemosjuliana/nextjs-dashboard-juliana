import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false, // Ensure URLs are handled correctly
  async rewrites() {
    return [
      {
        source: "/(.*)", 
        destination: "/", 
      },
    ];
  },
};

export default nextConfig;
