  $(function(){("loaded!")});

// test
// $(".rowA > .cell").on("click",function()


// for (var i = 0; i < clickCell; i ++){
//   clickCell[i].addEventListener("click", function(e){
//     e.target.color("red");
//   })
// }

var Cell = function(value) {
  this.value = value;

  };
Cell.prototype.playable = function(){
  return (this.value)? false : true;
};

var Column = function(){
  this.colCells = [];

};

Column.prototype.makeColumns = function(){
  for (var j = 0; j < 6; j++){
     this.colCells.push(new Cell(""));
    }

  };

var Row = function(){
  this.rowCells = [];
};
Row.prototype.makeRows = function(b){
  for (var i = 0; i < b.boardColumns.length; i++){
        this.rowCells[i] = b.boardColumns[i].colCells[0];

    }

}

var Board = function(){
this.boardColumns = [];
this.currentPlayer = 'R';
  };

Board.prototype.makeBoard = function(c){

     for (var i = 0; i < $(".col").length; i++){

       this.boardColumns.push(c);
    }


  }
Board.prototype.render = function(){
  if (this.currentPlayer === 'R'){
             this.currentPlayer = 'B';
           }
             else if (this.currentPlayer === 'B'){
               this.currentPlayer = 'R';
             }

  }

  var c = new Column();
  c.makeColumns();
  var b = new Board();
  b.makeBoard(c);

  var r = new Row();
  r.makeRows(b);


// var drop = function(e){
//     b.render();
//     if (e.length < 6 ) {
//     e.push(new Cell(b.currentPlayer));
//     console.log(e);
//
//     return;
//   }
//
// }
    var drop = function(c){
      b.render();
    for (var i = 0; i <= c.length; i++){
        if(c[i].value === ""){
            c[i].value = b.currentPlayer;
            c[i].playable();
            console.log(c[i]);
          console.log( "Cell " + i + " " + c[i].value);
          return;
        }
    }

}
// var drop = function(boardColumns){
//
//   for (var i = boardColumns.length-1 ; i >=0; i--){
//       console.log(boardColumns.eq([i]));
//       if(boardColumns.eq([i]).text("")){
//             boardColumns.eq([i]).text("R");
//             boardColumns
//       }
//       return;
//     }
//   }

// var checkWin(playedCell, boardColumns, x ) {
//
//
// }
// horizontal win logic:

 var horizontalWin = function(i,j){

   if (b.boardColumns[i-1].colCells[j] != null && b.boardColumns[i-1].colCells[j].value === b.boardColumns[i].colCells[j].value){

      if(b.boardColumns[i-2].colCells[j] != null && b.boardColumns[i-2].colCells[j].value === b.boardColumns[i].colCells[j].value){

        if( b.boardColumns[i-3].colCells[j] != null && b.boardColumns[i-3].colCells[j].value === b.boardColumns[i].colCells[j].value){
          return true;
        }
        else if( b.boardColumns[i+1].colCells[j] != null && b.boardColumns[i+1].colCells[j].value === b.boardColumns[i].colCells[j].value){
          return true;
        }
         else return false;
       }

        else if(b.boardColumns[i+1].colCells[j] != null && b.boardColumns[i+1].colCells[j].value === b.boardColumns[i].colCells[j].value){

            if(b.boardColumns[i+2].colCells[j] != null && b.boardColumns[i+2].colCells[j].value === b.boardColumns[i].colCells[j].value){
              return true;
            }
            else return false;
        }
        else return false;

   }


   else if(b.boardColumns[i+1].colCells[j] != null && b.boardColumns[i+1].colCells[j].value === b.boardColumns[i].colCells[j].value){

      if( b.boardColumns[i+2].colCells[j] != null && b.boardColumns[i+2].colCells[j].value === b.boardColumns[i].colCells[j].value){

        if(b.boardColumns[i+3].colCells[j] !== null && b.boardColumns[i+3].colCells[j].value === b.boardColumns[i].colCells[j].value){
          return true;
        }
        return false;
      }
      return false;
   }
   else return false;

}

var verticalWin = function(i,j){

  if (b.boardColumns[i].colCells[j-1] != null && b.boardColumns[i].colCells[j-1].value === b.boardColumns[i].colCells[j].value){

     if(b.boardColumns[i].colCells[j-2] != null && b.boardColumns[i].colCells[j-2].value === b.boardColumns[i].colCells[j].value){

       if( b.boardColumns[i].colCells[j-3] != null && b.boardColumns[i].colCells[j-3].value === b.boardColumns[i].colCells[j].value){
         return true;
       }
       else if( b.boardColumns[i].colCells[j+1] != null && b.boardColumns[i].colCells[j+1].value === b.boardColumns[i].colCells[j].value){
         return true;
       }
        else return false;
      }

       else if(b.boardColumns[i].colCells[j+1] != null && b.boardColumns[i].colCells[j+1].value === b.boardColumns[i].colCells[j].value){

           if(b.boardColumns[i].colCells[j+2] != null && b.boardColumns[i].colCells[j+2].value === b.boardColumns[i].colCells[j].value){
             return true;
           }
           else return false;
       }
       else return false;

  }

  else if(b.boardColumns[i].colCells[j+1] != null && b.boardColumns[i].colCells[j+1].value === b.boardColumns[i].colCells[j].value){

     if( b.boardColumns[i].colCells[j+2] != null && b.boardColumns[i].colCells[j+2].value === b.boardColumns[i].colCells[j].value){

       if(b.boardColumns[i].colCells[j+3] !== null && b.boardColumns[i].colCells[j+3].value === b.boardColumns[i].colCells[j].value){
         return true;
       }
       return false;
     }
     return false;
  }
  else return false;
}

var diagonalWin = function(i,j) {
  if (b.boardColumns[i-1].colCells[j-1] != null && b.boardColumns[i-1].colCells[j-1].value === b.boardColumns[i].colCells[j].value){

     if(b.boardColumns[i-2].colCells[j-2] != null && b.boardColumns[i-2].colCells[j-2].value === b.boardColumns[i].colCells[j].value){

       if( b.boardColumns[i-3].colCells[j-3] != null && b.boardColumns[i-3].colCells[j-3].value === b.boardColumns[i].colCells[j].value){
         return true;
       }
       else if( b.boardColumns[i+1].colCells[j+1] != null && b.boardColumns[i+1].colCells[j+1].value === b.boardColumns[i].colCells[j].value){
         return true;
       }
        else return false;
      }

       else if(b.boardColumns[i+1].colCells[j+1] != null && b.boardColumns[i+1].colCells[j+1].value === b.boardColumns[i].colCells[j].value){

           if(b.boardColumns[i+2].colCells[j+2] != null && b.boardColumns[i+2].colCells[j+2].value === b.boardColumns[i].colCells[j].value){
             return true;
           }
           else return false;
       }
       else return false;

  }

  else if(b.boardColumns[i+1].colCells[j+1] != null && b.boardColumns[i+1].colCells[j+1].value === b.boardColumns[i].colCells[j].value){

     if( b.boardColumns[i+2].colCells[j+2] != null && b.boardColumns[i+2].colCells[j+2].value === b.boardColumns[i].colCells[j].value){

       if(b.boardColumns[i+3].colCells[j+3] !== null && b.boardColumns[i+3].colCells[j+3].value === b.boardColumns[i].colCells[j].value){
         return true;
       }
       return false;
     }
     return false;
  }
  else return false;
}











// console.log($("#A > div").eq(1).text("R"));


// $(".col").on("click",".cell",function(e){
//      if(this.parentElement.id === "A"){
//     console.log(this.parentElement.id);
//     drop($(this.parentElement).children());
//     this.parentElement.length -1;
//   }
//
//
// });

//   $(".col").on("click",".cell",function(e){
//   if(this.parentElement.id === "B"){
//     console.log(this.parentElement.id);
//     var boardColumns = b.boardColumns[1].colCells;
//     for (var i = 0; i <= boardColumns.length; i++){
//       if (boardColumns[i].value === null){
//         boardColumns[i].value = "R";
//         boardColumns[i].playable();
//         console.log(boardColumns[i]);
//              console.log( "Cell " + i + " " + boardColumns[i].value);
//              return;
//       }
//
//     }
//   }
//
//
// });

$("#A").on("click",".cell",function(e){
    console.log(this.parentElement.id);
    drop(b.boardColumns[0].colCells);
  });
$("#B").on("click",".cell",function(e){
    console.log(this.parentElement.id);
    drop(b.boardColumns[1].colCells);
  });

//   if(this.parentElement.id === "C"){
//     drop(b.boardColumns[2].colCells);
//   }
//   if(this.parentElement.id === "D"){
//     drop(b.boardColumns[3].colCells);
//   }
//   if(this.parentElement.id === "E"){
//     drop(b.boardColumns[4].colCells);
//   }
//   if(this.parentElement.id === "F"){
//     drop(b.boardColumns[5].colCells);
//   }
//   if(this.parentElement.id === "G"){
//     drop(b.boardColumns[6].colcolCellss);
//   }
//
// });
