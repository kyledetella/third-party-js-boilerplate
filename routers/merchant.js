'use strict';

var express = require('express');
var path = require('path');

var merchantRouter = express.Router();

merchantRouter.get('/', function (req, res) {
  res.sendfile(path.resolve('public/index.html'));
});

module.exports = merchantRouter;
