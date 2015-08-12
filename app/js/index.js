'use strict';

(function(){
  var remote = require('remote');
  var ipc = require('ipc');
  var robot = remote.require('robotjs');

  var socket = io('http://' + config.socket.address + ':' + config.socket.port + config.socket.nsp);

  document.querySelector('.js-quit').onclick = function(){
    ipc.send('user-quit');
  }

  setInterval(function () {
    var mouse=robot.getMousePos();
    document.querySelector('.js-print').textContent = 'x: ' + mouse.x + ' - y: ' + mouse.y;
    // console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
    socket.emit('mouse-move', mouse);
  }, 30);
})();
