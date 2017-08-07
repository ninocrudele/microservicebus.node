#!/usr/bin/env node


var path = require("path");
var os = require('os');

var packagePath = path.resolve(os.userInfo().homedir, 'node_modules');
process.env.NODE_PATH = packagePath;
process.env.HOME = os.userInfo().homedir;

//packagePath = path.resolve(".", "node_modules");
console.log('packagePath: ' + packagePath);

require('app-module-path').addPath(packagePath);
require('module').globalPaths.push(packagePath);

console.log("PATHS: %s", process.env["PATH"]);

require("./start.js");
