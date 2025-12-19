/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/forum',
  assetPrefix: '/forum/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
// Build: 1766159423
