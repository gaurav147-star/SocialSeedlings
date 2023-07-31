/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"], // Remove the "https://" part from the domain
  },
};

module.exports = nextConfig;
