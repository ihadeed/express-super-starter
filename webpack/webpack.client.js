const { root } = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (opts, webpackOpts) => {

  const extractSass = new ExtractTextPlugin({
    filename: 'main.css'
  });

  const config = {
    entry: {
      main: [
        root('./src/main.browser.ts'),
        root('./src/scss/main.scss')
      ]
    },
    output: {
      filename: 'client.js'
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'], fallback: 'style-loader' })
        }
      ]
    },
    plugins: [
      extractSass
    ]
  };

  return config;
};
