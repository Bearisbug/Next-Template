/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.imgur.com'], // ✅ 把 imgur 加到白名单
    },
  };
export default nextConfig;
