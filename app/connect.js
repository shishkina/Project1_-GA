  $(function(){("loaded!")});



// $(".rowA > .cell").on("click",function()


// for (var i = 0; i < clickCell; i ++){
//   clickCell[i].addEventListener("click", function(e){
//     e.target.color("red");
//   })
// }

var Cell = function() {
  this.value = null;

  };

Cell.prototype.playable = function(){
  return (this.value)? false : true;
};


var Column = function(){
  this.colCells = [];

};

Column.prototype.makeColumn = function(){
  for (var j = 0; j < 6; j++){
     this.colCells.push(new Cell());
    }

  };

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
             this.currentPlayer === 'B';
           }
             else if (this.currentPlayer === 'B'){
               this.currentPlayer === 'R';
             }

  }
  var c = new Column();
  c.makeColumn();
  var b = new Board();
  b.makeBoard(c);

var drop = function(c){

    for (var i = 0; i <= c.length; i++){
        b.render();
        if(c[i].value === null){
            c[i].value = b.currentPlayer;
            c[i].playable();
            console.log(c[i]);
          console.log( "Cell " + i + " " + c[i].value);
          return;
        }
    }

}

$(".col").on("click",".cell",function(e){

  if(this.parentElement.id === "A"){
    console.log(this.parentElement.id);
    drop(b.boardColumns[0].colCells);
  }
  if(this.parentElement.id === "B"){
    console.log(this.parentElement.id);
    drop(b.boardColumns[1].colCells);
  }
  if(this.parentElement.id === "C"){
    drop(b.boardColumns[2].colCells);
  }
  if(this.parentElement.id === "D"){
    drop(b.boardColumns[3].colCells);
  }
  if(this.parentElement.id === "E"){
    drop(b.boardColumns[4].colCells);
  }
  if(this.parentElement.id === "F"){
    drop(b.boardColumns[5].colCells);
  }
  if(this.parentElement.id === "G"){
    drop(b.boardColumns[6].colCells);
  }

});
