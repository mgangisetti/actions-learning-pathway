/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
}

module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
}

eslint-config-next:

eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-next
