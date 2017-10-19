const { root } = require('./helpers');

module.exports = (opts, webpackOpts) => {
  const config = {
    resolve: {
      extensions: ['.ts', '.scss', '.js']
    },
    output: {
      path: root('static/build')
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    },
    plugins: []
  };

  if (!webpackOpts.p) {
    config.devtool = 'inline-source-map';
  }

  return config;
};
