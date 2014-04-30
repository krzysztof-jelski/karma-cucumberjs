window.__karma__.loaded = function () {};
var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});

requirejs(["adapter"], function (Adapter) {
  Adapter().start();
});