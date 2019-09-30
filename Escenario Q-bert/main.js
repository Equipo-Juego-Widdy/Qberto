function fullDraw(){
  ctx.clearRect(0,0,c.height,c.width)
  for (var x = 0; x<7; x++){
    for (var y = 0; y<7; y++){
      blocks[x][y].draw();
      if(player.x == x && player.y == y){
        player.draw()
      }
    }
  }
}

player.update()
fullDraw()
player.animIdle()
/*var b1 = new block(0,0,true,0)
var b2 = new block(1,0,false,0)
var b3 = new block(0,-1,true,1)
b1.draw()
b2.draw()
b3.draw()
*/
//use a timer and a temp variable to create animation time
