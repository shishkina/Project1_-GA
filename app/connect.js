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



var Board = function(){
this.boardCells = [];
  }
  
Board.prototype.makeBoard = function(){
    var numCells =  $(".cell").length;
    for (var i = 0; i < numCells; i++){

        this.boardCells.push(new Cell());
      }


  }

  var b = new Board();
  b.makeBoard();

var drop = function(){


}
