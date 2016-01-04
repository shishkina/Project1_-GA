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
      //the loops start iteration with 1, so the cells are assigned values startin with 1
      //column assignment
        for (var i = 1; i < 7; i++){
          //row assignment
            for (var j = 1; j < 8; j++){
              //cell assignment
                action(i,j);
            }
        }
    },
    sameColor = function(i,j){
        return $("#c-" + i + "-" + j).hasClass(players[current]);;
    },
    togglePlayer = function(){
        $("#c").html(players[current = (current + 1) % 2]);
        //     players = [$("#red").html(),$("#black").html()]

    },
    horizontalWin = function(i, j){
      for (var left = j-1; left > 0; left--){
        if(!sameColor(i, left))break;
          for(var right = j+1; right < 8; right++){
            if(!sameColor(i, right)) break;
          }
      }
            return right - left > 4;

    },
    // yet to add the winning logic
    // to handle horizontal/vertical/diagonal wins
    addCellBehavior = function(i,j){
        $("#c-" + i + "-" + j).click(function(){
                if(!gameOver){
                    for (var t = 6; t > 0; t--){
                        if($("#c-" + t + "-" + j).hasClass('')){
                            $("#c-" + t + "-" + j).addClass(players[current]);
                            if(horizontalWin(t, j)){
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

    window.test={
    	players:players,
    }
});
