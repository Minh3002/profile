const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Xuất thành web tĩnh để GitHub Pages có thể chạy
  basePath: "/my-profile", // Đặt theo tên repo GitHub của bạn (thay bằng tên repo của bạn)
  assetPrefix: "/my-profile/", // Giúp Next.js load asset đúng trên GitHub Pages

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'media.dev.to',
      'avatars.githubusercontent.com',
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      'stardev.io',
      'github-profile-summary-cards.vercel.app',
      'github-profile-trophy.vercel.app',
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;