var App = require('./server');

var appsConfig = [
  {
    appName: 'merchant-server',
    port: 3031,
    routing: function (app) {
      var merchantRouter = require('./routers/merchant');
      app.use('/merchant', merchantRouter);
    }
  },
  {
    appName: 'asset-server',
    port: 3032,
    routing: function (app) {
      var assetsRouter = require('./routers/assets');
      app.use('/assets', assetsRouter);
    }
  }
];

var apps = appsConfig.map(function (app) {
  return new App(app);
});
