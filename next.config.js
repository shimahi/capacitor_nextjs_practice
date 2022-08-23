/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: 'webpack-preprocessor-loader',
          options: {
            params: {
              isWeb: !process.env.IS_NATIVE,
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
