# Project1_-GA
##Connect4

I'm trying to build a simple connect 4 game.
There are two players: red and black. In order to win the game the player needs to connect 4 pieces of the same color either horizontally, vertically, or diagonally.

I set up the grid in a way that I have a Board object which consist of Column objects, inside the Columns, there are Cell objects. At the beginning of the game makeBoard function sets up the Board of empty Column arrays. Every column is clickable, however, only the bottom most cell gets filled up with a value respectively (On every click the player toggles.)

checkWin function is broken up in parts:
checkHorizontally();
checkVertically();
checkDiagonally();
