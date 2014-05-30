'use strict';

var _ = require('underscore');
var morgan = require('morgan');
var express = require('express');
var engines = require('consolidate');

var App = function (options) {
  this.options = options || {};
  this.appName = options.appName || 'app';
  this.port = options.port || process.env.PORT || 3031;
  this.app = express();

  this.configureServer();
  this.configureRouting();
  this.run();
};

_.extend(App.prototype, {
  configureServer: function () {
    var app = this.app;

    app.use(morgan());
    app.use(express.static(__dirname + '/public'));

    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');

    app.engine('html', engines.handlebars);

    app.locals.title = 'iframessemarfi';
  },

  configureRouting: function () {
    this.options.routing(this.app);
  },

  run: function () {
    this.server = this.app.listen(this.port, function() {
      console.log('%s is listening on port %d', this.appName, this.server.address().port);
    }.bind(this));
  }
});

module.exports = App;
