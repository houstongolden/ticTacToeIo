'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', function ($scope) {

 //  	$scope.ticTacToe = [];
	// var sideLength = 3;

	// 	for(rw=0; rw < sideLength; ++rw) {
	// 		var myNewArray = [];
			
	// 		$scope.ticTacToe.push( myNewArray );
	// 		for(col=0; col < sideLength; ++col) {
	// 			myNewArray.push( {val:"", r:rw, c:col} );
	// 		}
	// };

  	$scope.ticTacToe = [[{value:"", r:0, c:0},{value:"", r:0, c:1},{value:"", r:0, c:2}],
  						[{value:"", r:1, c:0},{value:"", r:1, c:1},{value:"", r:1, c:2}],
  						[{value:"", r:2, c:0},{value:"", r:2, c:1},{value:"", r:2, c:2}]];

	var turnNum = 0;

	$scope.clickBox = function(cell) {

		var letter;

		if(cell.value != "")
			return;
		// prevents overwriting

		if(turnNum % 2 == 0)
			letter = "X";
		else
			letter = "O";
		// alternates turns

		cell.value = letter;
		event.target.innerHTML = letter;

		++turnNum;
		if(turnNum == 9)
			alert("It's a tie!");

		$scope.wins(cell);

	}

	$scope.wins = function() {

		for(var x=0; x<=2; ++x) {
		if($scope.ticTacToe[0][x].value == $scope.ticTacToe[1][x].value &&
			$scope.ticTacToe[1][x].value == $scope.ticTacToe[2][x].value &&
			$scope.ticTacToe[0][x].value != "") {
			if($scope.ticTacToe[0][x].value == "X")
				$scope.showWin = true;
			else
				$scope.showWin2 = true;
			}
		if($scope.ticTacToe[x][0].value == $scope.ticTacToe[x][1].value &&
			$scope.ticTacToe[x][1].value == $scope.ticTacToe[x][2].value &&
			$scope.ticTacToe[x][0].value != "") {
			if($scope.ticTacToe[x][0].value == "X")
				$scope.showWin = true;
			else
				$scope.showWin2 = true;
			}
		
		// if($scope.ticTacToe[0][x].value == $scope.ticTacToe[1][x+1].value &&
		// 	$scope.ticTacToe[1][x+1].value == $scope.ticTacToe[2][x+2].value &&
		// 	$scope.ticTacToe[0][x].value != "") {
		// 	if($scope.ticTacToe[0][x].value == "X")
		// 		alert("X Wins");
		// 	else
		// 		alert("O Wins");
		// 	}
		// 	console.log(x);
		// if($scope.ticTacToe[0][x].value == $scope.ticTacToe[1][x-1].value &&
		// 	$scope.ticTacToe[1][x-1].value == $scope.ticTacToe[2][x-2].value &&
		// 	$scope.ticTacToe[0][x].value != "") {
		// 	if($scope.ticTacToe[0][x].value == "X")
		// 		alert("X Wins");
		// 	else
		// 		alert("O Wins");
		// 	}
		}
	};

	$scope.resetGame = function(cell) {

		for(var r in cell.value){
			for(var c in cell[r].value) {
				cell[r][c].value = "";
			}
		}
	};

		// for(r=0; r<$scope.ticTacToe.length; r++)
		// 	winTest == 0;
		// 	for(c=0; c<$scope.ticTacToe.length; c++)

		// 		switch(this.ticTacToe[r][c]) {
		// 		case "X":
		// 			++winTest;
		// 			break;
		// 		case "O":
		// 			--winTest;
		// 			break;
		// 		}

		// if(math.abs(this.ticTacToe[row][column]) == 3)
		// 	alert("Winner");

		
		// for(r=0; r<$scope.ticTacToe.length; r++)
		// 	winTest == 0;
		// 	for(c=0; c<$scope.ticTacToe.length; c++)

		// 		switch(this.ticTacToe[c][r]) {
		// 		case "X":
		// 			++winTest;
		// 			break;
		// 		case "O":
		// 			--winTest;
		// 			break;
		// 		}

		// if(math.abs(this.ticTacToe[row][column]) == 3)
		// 	alert("Winner");

	 //  };
});
