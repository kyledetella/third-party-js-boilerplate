'use strict';

var express = require('express');
var path = require('path');

var assetsRouter = express.Router();

assetsRouter.get('/', function (req, res) {
  res.sendfile(path.resolve('public/iframes/index.html'));
});

module.exports = assetsRouter;
