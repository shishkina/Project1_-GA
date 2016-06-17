$( document ).ready(function(){
console.log("loaded");

var start = function(){
    	    count = 0;
          gameOver = false;
          togglePlayer();
    };
    //clear the board on the newGame button click
var newGame = function(message){
        if (confirm(message)){
            start();
            forAllCells(function(i,j){
            	$("#c-" + i + "-" + j).removeClass();
            });
        }
    };

var forAllCells = function(action){
      //the loops start iteration with 1, so the cells are assigned values starting with 1
      //row assignment starts with the top row being first, and the bottow one - 6th
        for (var i = 1; i < 7; i++){
        //assign columns
            for (var j = 1; j < 8; j++){
              //cell assignment
                action(i,j);
            }
        }
    };
    // function to check if the cell has the same class as current player
    // to use in checkWin
var sameColor = function(i,j){
        return $("#c-" + i + "-" + j).hasClass(players[current]);;
    };
var togglePlayer = function(){
        $("#c").html(players[current = (current + 1) % 2]);
    };
var horizontalWin = function(i, j){
      //check lefthand first
      for (var left = j-1; left >= 1; left--){
        if(!sameColor(i, left))break;
        //then righthand
          for(var right = j+1; right <= 7; right++){
            if(!sameColor(i, right))break;
          }
      }
      return right - left > 4;

    };
var verticalWin = function(i, j){
      for(var down = i+1; down <= 6; down++){
        if(!sameColor(down, j))break;
      }
        return down - i > 3;
    };
    // handle diagonal wins
var diagonalLeftUpWin = function(i,j){
      /*add temporary variables to access the diagonal cells
      up, down variables correspond to the diagonal i(row),
      temp variable holds the value of the diagonal j(column),
      as it loops through, first,
      make sure that loop does not go ouside of the boundaries of the board,
      then check if  the color of the diagonal cell is the same, if not, BREAK.
      */
      var up, down, temp;
      for(up = i-1, temp = j-1; up > 0; up--, temp--) {
        if( temp < 1 || !sameColor(up,temp))break;
          }

      for(down = i+1, temp = j+1; down < 7; down++,temp++){
        if(temp > 7 || !sameColor(down,temp))break;
          }
          //return true or false
        return down - up > 4;
    };
var diagonalRightUpWin = function(i,j){
  //same principle as diagonalLeftUpWin
  var up, down, temp;
        for(up = i-1, temp = j+1; up > 0; up--, temp++) {
          if(temp > 7 || !sameColor(up, temp))break;
          }
        for(down = i+1, temp = j-1; down < 7; down++, temp--) {
          if(temp < 1 || !sameColor(down, temp))break;

          }
        return down - up > 4;
    };
var addCellBehavior = function(t,j){
        $("#c-" + t + "-" + j).click(function(){
                if(!gameOver){
                    for (var t = 6; t >= 1; t--){
                        if($("#c-" + t + "-" + j).hasClass('')){
                            $("#c-" + t + "-" + j).addClass(players[current]);
                            if(horizontalWin(t, j) || verticalWin(t, j) || diagonalLeftUpWin(t,j) || diagonalRightUpWin(t,j)){
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
                      }
                }
        });
    };
    //initialization of the board
var init = function(){
      var table = $('<table></table>').attr({id:"gameboard"});
    		for (var i = 1; i < 7; i++) {
    			var row = $('<tr></tr>').appendTo(table);
    			for (var j = 1; j < 8; j++) {
    				$('<td></td>').attr({id : "c-" + i + "-" + j}).appendTo(row);
    			}
    		}
    		table.appendTo("#game");
    };
    //counter for counting the moves in order to handle a tie
var count;
var players = [$("#red").html(),$("#black").html()];
var current = 0;
var newGameMessage = $("#n").html();
var winMessage = $("#win").html();
var gameOver;
init();
start();
forAllCells(addCellBehavior);
$("#new").click(function(){
  newGame(newGameMessage);
  });

});
