var player = {
  x: 0,
  y: 0,
  h: 0,
  state: "idle1",
  dir: "r",
  idleTime: 5,
  jumpTime: 1,
  temp: null,
  update: function(){
    switch(player.state){
    case "idle1":
    case "idle2":
      switch(lastKey){
      case 65:
      case 37:
        if(blocks[player.x-1]){
          if(blocks[player.x-1][player.y].h<player.h+2&&blocks[player.x-1][player.y].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.x--;
            player.dir = "l"
            console.log(player.x, player.y, player.h);
            player.animJump()
          }
        }
        break;
        case 68:
        case 39:
        if (blocks[player.x+1]) {
          if(blocks[player.x+1][player.y].h<player.h+2&&blocks[player.x+1][player.y].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.x++;
            player.dir = "r"
            console.log(player.x, player.y, player.h);
            player.animJump()
          }
        }
        break;
        case 87:
        case 38:
        if(blocks[player.x][player.y-1]){
          if(blocks[player.x][player.y-1].h<player.h+2&&blocks[player.x][player.y-1].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.y--;
            player.dir = "u"
            console.log(player.x, player.y, player.h);
            player.animJump()
          }
        }
        break;
        case 83:
        case 40:
        if(blocks[player.x][player.y+1]){
          if(blocks[player.x][player.y+1].h<player.h+2&&blocks[player.x][player.y+1].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.y++;
            player.dir = "d"
            console.log(player.x, player.y, player.h);
            player.animJump()
          }
        }
        break;
        default: console.log("dint go :(");
      }
      break;
    }
    player.temp = player.h;
    player.h = blocks[player.x][player.y].h;
    console.log("player updated");
  },
  animIdle: function(){
    clearInterval(t);
    timer = 0;
	  t = setInterval(function(){
      timer++;
      console.log(player.state, timer);
      if(timer==player.idleTime){
        clearInterval(t);
        timer = 0;
        player.state == "idle1" ? (player.state = "idle2") : (player.state = "idle1");
        fullDraw()
        player.animIdle();
      }
    }, 100)
  },
  jumpHeight: function(){
    if(player.h==player.temp){
      return (1);
    }
    else if(player.h>player.temp){
      return (1);
    }
    else if(player.h<player.temp){
      return (3);
    }
    else {
      return(0);
    }
  },
  animJump: function(){
    player.state = "jump"
	  clearInterval(t);
    timer = 0
	  t = setInterval(function(){
      timer++;
      console.log(player.state, timer);
      if(timer==player.jumpTime){
        clearInterval(t);
        timer=0;
        player.state = "idle1";
        fullDraw()
        player.animIdle();
      }
    },100)
  },
  draw: function(){
    switch(player.state){
      case "idle1":
        switch(player.dir){
          case "r":
            ctx.drawImage(r1, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
          case "l":
            ctx.drawImage(l1, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
          case "u":
            ctx.drawImage(u1, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
          case "d":
            ctx.drawImage(d1, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
        }
        break;
      case "idle2":
        switch(player.dir){
          case "r":
            ctx.drawImage(r2, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
          case "l":
            ctx.drawImage(l2, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
          case "u":
            ctx.drawImage(u2, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
          case "d":
            ctx.drawImage(d2, 150+39*player.x-18*player.y+6,250+18*player.y-39*player.h-72)
            break;
        }
        break;
      case "jump":
        switch(player.dir){
          case "r":
            ctx.drawImage(rj, 150+39*player.x-18*player.y+6-21,250+18*player.y-39*player.h-72-21*player.jumpHeight());
            break;
          case "l":
            ctx.drawImage(lj, 150+39*player.x-18*player.y+6+21,250+18*player.y-39*player.h-72-21*player.jumpHeight());
            break;
          case "u":
            ctx.drawImage(uj, 150+39*player.x-18*player.y+6-9,250+18*player.y-39*player.h-72+9-21*player.jumpHeight());
            break;
          case "d":
            ctx.drawImage(dj, 150+39*player.x-18*player.y+6+9,250+18*player.y-39*player.h-72-9-21*player.jumpHeight());
            break;
        }
        break;
    }
  },
}
