  $(function(){("loaded!")});



// $(".rowA > .cell").on("click",function()
$(".col").on("click",".cell",function(e){
//this.cell.attr("data-set-value", "")
  $(this).css("background-color", "red");


})






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

Column.prototype.makeColumns = function(){
  for (var j = 0; j < 6; j++){
     this.colCells.push(new Cell());

   }

  }



var Board = function(){
this.boardColumns = [];

  }

Board.prototype.makeBoard = function(c){

     for (var i = 0; i < $(".col").length; i++){

       this.boardColumns.push(c);
    }


  }
  var c = new Column();
  c.makeColumns();
  var b = new Board();
  b.makeBoard(c);

var drop = function(){


}
