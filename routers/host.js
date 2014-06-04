'use strict';

var express = require('express');
var path = require('path');

var hostRouter = express.Router();

hostRouter.get('/', function (req, res) {
  res.sendfile(path.resolve('host-public/index.html'));
});

module.exports = hostRouter;
