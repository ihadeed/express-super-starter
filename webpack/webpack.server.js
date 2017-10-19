const { root } = require('./helpers');

module.exports = (opts, webpackOpts) => {
  return {
    entry: root('./src/main.server.ts'),
    output: {
      path: root('dist'),
      filename: 'server.js'
    },
    target: 'node',
    externals: [require('webpack-node-externals')()]
  }
};
