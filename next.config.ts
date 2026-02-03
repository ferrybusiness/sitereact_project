import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vecteezy.com',
        port: '',
        pathname: '/free-photos/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
