var Server = require('./server');

var appsConfig = [
  {
    appName: 'host-server',
    port: 3031,
    routing: function (app) {
      var hostRouter = require('./routers/host');
      app.use('/host', hostRouter);
    },
    publicDir: '/host-public'
  },
  {
    appName: 'asset-server',
    port: 3032,
    routing: function (app) {
      var assetsRouter = require('./routers/assets');
      app.use('/assets', assetsRouter);
    },
    publicDir: '/iframe-public'
  }
];

var apps = appsConfig.map(function (app) {
  return new Server(app);
});
