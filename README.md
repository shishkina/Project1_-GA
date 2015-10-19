# Project1_-GA
##Connect4

I'm trying to build a simple connect 4 game.
There are two players: red and black. In order to win the game the player needs to connect 4 pieces of the same color either horizontally, vertically, or diagonally.

I set up the grid in a way that I have a Board object which consist of Column objects, inside the Columns, there are Cell objects. At the beginning of the game makeBoard function sets up the Board of empty Column arrays. Every column is clickable, however, only the bottom most cell gets filled up with a value by calling `drop()` function (On every click the player toggles). However, I have an issue here: inside the click event I set up multiple if statements to determine the columnId and the drop function is called separately for every column. However, the for loop inside the drop function keeps iteration with every new column click, but shouldn't it start from 0?


`checkWin()` function is broken up in parts:
'checkHorizontally(i,j)` and `checkVertically(i,j)`, `checkDiagonally(i,j)` are passed two parameters: i = index of a column, j = index of a cell.Then start comparing the clicked cell with adjacent cells starting with first left, second left, etc.then with the first right, second, etc.
The same principle for the diagonal. Check the adjacent diagonal cell from the previous row, the row before, etc.
