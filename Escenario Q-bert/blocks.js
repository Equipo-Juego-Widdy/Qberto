function block(x,y,isBlue,h){
  this.x = x;
  this.y = y;
  this.isBlue = isBlue
  this.h = h
  this.draw = function(){
    if(this.isBlue){
      ctx.drawImage(bluecube, 150+39*this.x-18*this.y,250+18*this.y-39*this.h)
    }
    else{
      ctx.drawImage(redcube, 150+39*this.x-18*this.y,250+18*this.y-39*this.h)
    }
  }
}

var blocks = []
for (var x = 0; x<7; x++){
  blocks.push([]);
  for (var y = 0; y<7; y++){
    blocks[x].push(new block(x,y,false,0));
  }
}
console.log(blocks)

//var heightGrid =[[1,4],
//                 [2],
//                 [3],
//                 [4]]
var heightGrid=[[4,4,2,2,3,3,3],
               [4,3,2,2,2,2,2],
                [3,3,2,1,1,2,2],
                [3,2,2,2,1,1,2],
               [2,2,2,2,1,1,1],
                [2,2,1,1,0,1,1],
                [1,1,2,1,0,0,1]]

for (var x = 0; x<7; x++){
  for (var y = 0; y<7; y++){
    blocks[x][y].h = heightGrid[y][x];
  }
}
