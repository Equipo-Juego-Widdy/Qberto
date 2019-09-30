document.addEventListener("keydown",function(e){
  lastKey = e.keyCode;
  player.update();
  fullDraw();
  console.log(lastKey);
}, false)
