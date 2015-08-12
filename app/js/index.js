'use strict';

(function(){
  var remote = require('remote');
  var robot = remote.require("robotjs");

  var socket = io('http://localhost:1337/inputs');

  setInterval(function () {
    var mouse=robot.getMousePos();
    document.querySelector('.js-print').textContent = 'x: ' + mouse.x + ' - y: ' + mouse.y;
    // console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
    socket.emit('mouse-move', mouse);
  }, 30);
})();
