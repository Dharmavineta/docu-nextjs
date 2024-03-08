/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/doc",
        destination: "/index.html",
      },
    ];
  },
};

export default nextConfig;
