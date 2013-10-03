'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.ticTacToe = [['','',''],['','',''],['','','']];

	var turnNum = 0;


	$scope.clickBox = function(row, column) {

		var letter;

		if(this.ticTacToe[row][column] != "")
			return;
		// prevents overwriting

		if(turnNum % 2 == 0 && turnNum < 9)
			letter = "X";
		else
			letter = "O";
		// alternates turns

		this.ticTacToe[row][column] = letter;
		event.target.innerHTML = letter;

		++turnNum;

	};

	// $scope.winCond = function(row, column) {

	// 	var letter;

		
	// }
});

// var turn = 0;
// function playBox() {
// 	if (event.target.className.split(" ")[1] != "played") {
// 		if (turn % 2 == 0) {
// 			event.target.classList.add('played');  // adds a class everytime user clicks a div
// 			event.target.innerHTML = "X";
// 		}
// 		else {
// 			event.target.classList.add('played');
// 			event.target.innerHTML = "O";
// 		}
// 		turn++;
// 		}
// 	else {
// 		alert('Choose Another!');
// 	}
// }



// function navCells() {

// var cellArray = [["","",""],["","",""],["","",""]];

// for(c=0; c<=2; ++c)
// 		for(r=0; r<=2; ++r)
// 			cellArray[r][c] = document.getElementById("cell"+(r+1)+"_"+(c+1)).innerHTML;

// for(x=0; x<=2; ++x) {
// 	if(cellArray[0][x] == cellArray[1][x] &&
// 		cellArray[1][x] == cellArray[2][x] &&
// 		cellArray[0][x] != "") {
// 		if(cellArray[0][x] == "X")
// 			document.getElementById("plyMsg").style.display="block";
// 		else
// 			document.getElementById("plyMsg2").style.display="block";
// 		}
// 	if(cellArray[x][0] == cellArray[x][1] &&
// 		cellArray[x][1] == cellArray[x][2] &&
// 		cellArray[x][0] != "") {
// 		if(cellArray[x][0] == "X")
// 			document.getElementById("plyMsg").style.display="block";
// 		else
// 			document.getElementById("plyMsg2").style.display="block";
// 		}
	
// 	if(cellArray[0][x] == cellArray[1][x+1] &&
// 		cellArray[1][x+1] == cellArray[2][x+2] &&
// 		cellArray[0][x] != "") {
// 		if(cellArray[0][x] == "X")
// 			document.getElementById("plyMsg").style.display="block";
// 		else
// 			document.getElementById("plyMsg2").style.display="block";
// 		}
// 	if(cellArray[0][x] == cellArray[1][x-1] &&
// 		cellArray[1][x-1] == cellArray[2][x-2] &&
// 		cellArray[0][x] != "") {
// 		if(cellArray[0][x] == "X")
// 			document.getElementById("plyMsg").style.display="block";
// 		else
// 			document.getElementById("plyMsg2").style.display="block";
// 		}
// 	}
// }

// function hidePopup() {
// 	document.getElementById("start").style.display="none";
// 	document.getElementById("container").style.display="block";
// }






