const livereload = require('livereload');
const config = {
  exts: ['css', 'pug', 'js', 'png', 'gif', 'jpg', 'svg']
};
const server = livereload.createServer(config);

server.watch([__dirname + '/static', __dirname + '/templates']);

