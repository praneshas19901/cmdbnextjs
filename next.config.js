/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensures the /app directory works
  },
};

module.exports = nextConfig;
