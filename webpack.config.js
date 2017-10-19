const webpackMerge = require('webpack-merge');

let commonConfig = require('./webpack/webpack.common'),
  clientConfig = require('./webpack/webpack.client'),
  serverConfig = require('./webpack/webpack.server');

module.exports = (options = {}, webpackOptions = {}) => {
  commonConfig = commonConfig(options, webpackOptions);
  clientConfig = clientConfig(options, webpackOptions);
  serverConfig = serverConfig(options, webpackOptions);

  let client = webpackMerge({}, commonConfig, clientConfig),
    server = webpackMerge({}, commonConfig, serverConfig);

  if (options.server) {
    return server;
  } else if (options.client) {
    return client;
  }



  return [client, server];
};