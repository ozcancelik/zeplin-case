/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false, // viewBox'ı KORU (Resmin oranları için şart)
                      },
                    },
                  },
                  'removeDimensions', // width="" ve height="" özniteliklerini SİL
                ],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;