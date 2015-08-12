'use strict';

var app = require('app');
var ipc = require('ipc');
var menubar = require('menubar');

require('crash-reporter').start();

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

var mb = menubar({
  dir: __dirname + '/app',
  width: 150,
  height: 80,
  x: 0,
  y: 0,
  // icon: __dirname + '/app/assets/icon.png'
});

ipc.on('user-quit', function(event) {
  mb.app.terminate();
});