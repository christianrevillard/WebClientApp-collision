var server = require('cre-nodejs-server');

server.start({
  pageHeader: 'Lib/Client/html/commonHeader.html',
  rootDirectory: require('path').resolve(__dirname), 
  routes: [{ route: "/", handler: server.clientFileHandler('/Collisions/Client/html/collision.html') }]
});