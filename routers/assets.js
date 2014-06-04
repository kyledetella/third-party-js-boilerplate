'use strict';

var express = require('express');
var path = require('path');

var assetsRouter = express.Router();

assetsRouter.get('/', function (req, res) {
  res.sendfile(path.resolve('iframe-public/index.html'));
});

assetsRouter.get('/js/:filename', function (req, res) {
  var dir = path.resolve('public/js');
  var jsfile = req.params.filename.replace(/\.js/g, '') + '.js';

  res.sendfile([dir, jsfile].join('/'));
});

module.exports = assetsRouter;
