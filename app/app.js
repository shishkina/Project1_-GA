$( document ).ready(function(){
  
    var
    start = function(){
    	    count = 0;
          gameOver = false;
          togglePlayer();
    },
    //clear the board on the newGame button click
    newGame = function(message){
        if (confirm(message)){
            start();
            forAllCells(function(i,j){
            	$("#c-" + i + "-" + j).removeClass();
            });
        }
    },

    forAllCells = function(action){
      //the loops start iteration with 1, so the cells are assigned values starting with 1
      //row assignment starts with the top row being first, and the bottow one - 6th
        for (var i = 1; i < 7; i++){
        //assign columns
            for (var j = 1; j < 8; j++){
              //cell assignment
                action(i,j);
            }
        }
    },
    // function to check if the cell has the same class as current player
    // to use in checkWin
    sameColor = function(i,j){
        return $("#c-" + i + "-" + j).hasClass(players[current]);;
    },
    togglePlayer = function(){
        $("#c").html(players[current = (current + 1) % 2]);
    },
    horizontalWin = function(i, j){
      //check lefthand first
      for (var left = j-1; left >= 1; left--){
        if(!sameColor(i, left))break;
        //then righthand
          for(var right = j+1; right <= 7; right++){
            if(!sameColor(i, right)) break;
          }
      }

      $.log(" this is right: " + right + " and this is left: " + left);
            return right - left > 4;

    },
    verticalWin = function(i, j){
      for(var down = i+1; down <= 6; down++){
        if(!sameColor(down, j))break;
      }
        return down - i > 3;
    },
    // handle diagonal wins
    diagonalRightWin = function(i,j){
      //add temporary variables to access the diagonal cells
       for(var down = i-1, temp = j-1; down > 0; down--, temp--){
        if( temp < 1 || !sameColor(min,temp))break;
          for(var up = i+1, temp = j+1; up < 7; up++,temp++){
            if(temp > 7 || !sameColor(up,temp))break;
          }
       }
        return up - down > 4;
    },
    diagonalLeftWin = function(i,j){
        for(var down = i-1, temp = j+1; down > 0; down--, temp++){
          if(temp > 7 || !sameColor(down, temp))break;
          for(var up = i+1, temp = j-1; up < 7; up++, temp--){
            if(temp < 1 || !sameColor(up, temp))break;
          }
        }
        return up - down > 4;
    },
    addCellBehavior = function(t,j){
        $("#c-" + t + "-" + j).click(function(){
                if(!gameOver){
                    // for (var t = 6; t >= 1; t--){
                        if($("#c-" + t + "-" + j).hasClass('')){
                            $("#c-" + t + "-" + j).addClass(players[current]);
                            if(horizontalWin(t, j) || verticalWin(t, j) || diagonalLeftWin(t,j) || diagonalRightWin(t,j)){
                              gameOver = true;
                                newGame(winMessage.replace("%s",players[current]));
                            } else{
                              togglePlayer();
                            }
                            count += 1;
                            //handling a tie
                            if (count >= 42) {
                            	gameOver = true;
                            	newGame("tie! Play again???");
                            }
                            break;
                        }
                    // }
                }
        });
    },
    //initialization of the board
    init = function(){
      var table = $('<table></table>').attr({id:"gameboard"});
    		for (var i = 1; i < 7; i++) {
    			var row = $('<tr></tr>').appendTo(table);
    			for (var j = 1; j < 8; j++) {
    				$('<td></td>').attr({id : "c-" + i + "-" + j}).appendTo(row);
    			}
    		}
    		table.appendTo("#game");
    },
    //counter for counting the moves in order to handle a tie
    count,
    players = [$("#red").html(),$("#black").html()],
    current = 0,
    newGameMessage = $("#n").html(),
    winMessage = $("#win").html(),
    gameOver;
    init();
    start();
    forAllCells(addCellBehavior);
    $("#new").click(function(){
        newGame(newGameMessage);
    });

});
