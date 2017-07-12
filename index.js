#! /usr/bin/env node
var fs = require('fs-extra');
var path = require('path');

fs.copy(path.join(__dirname, 'templates', 'normal'), '.')
