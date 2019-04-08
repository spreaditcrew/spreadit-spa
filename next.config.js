const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withTypescript = require('@zeit/next-typescript');

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]---[hash:base64:5]'
  }
};

const appConfig = {
  distDir: '../.next',
};

module.exports = withPlugins([
  [withSass, sassConfig],
  withTypescript,
  withImages,
  appConfig,
]);