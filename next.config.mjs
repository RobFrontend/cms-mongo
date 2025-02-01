/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Zezwala na każdy host
      },
    ],
  },
};

export default nextConfig;
