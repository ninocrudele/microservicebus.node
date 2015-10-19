﻿require('colors');
var util = require('./Utils.js');
var pjson = require('./package.json');

var maxWidth = 75;
console.log();
console.log(util.padRight("", maxWidth, ' ').bgBlue.white.bold);
console.log(util.padRight(" microServicebus.com", maxWidth, ' ').bgBlue.white.bold);
console.log(util.padRight(" NPM package version: " + pjson.version, maxWidth, ' ').bgBlue.white);
console.log(util.padRight(" Architecture:        " + process.arch, maxWidth, ' ').bgBlue.white);
console.log(util.padRight(" For more information visit: http://microservicebus.com", maxWidth, ' ').bgBlue.white);
console.log(util.padRight(" GIT repository: https://github.com/microServiceBus/microservicebus.node", maxWidth, ' ').bgBlue.white);
console.log(util.padRight("", maxWidth, ' ').bgBlue.white.bold);

console.log();

var MicroServiceBusHost = require("./microServiceBusHost.js");
var microServiceBusHost = new MicroServiceBusHost();

microServiceBusHost.OnStarted(function (loadedCount, exceptionCount) {
    
});

microServiceBusHost.Start();