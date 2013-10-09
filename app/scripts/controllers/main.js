'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.ticTacToe = [[{value:""},{value:""},{value:""}],
  						[{value:""},{value:""},{value:""}],
  						[{value:""},{value:""},{value:""}]];

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

		++turnNum;
		if(turnNum == 9)
			alert("It's a tie!");

		$scope.wins(cell);

	}
	// win conditions
	$scope.wins = function() {

		for(var x=0; x<=2; ++x) {
		if($scope.ticTacToe[0][x].value == $scope.ticTacToe[1][x].value &&
			$scope.ticTacToe[1][x].value == $scope.ticTacToe[2][x].value &&
			$scope.ticTacToe[0][x].value != "") {
			if($scope.ticTacToe[0][x].value == "X")
				$scope.xWin = true;
			else
				$scope.yWin = true;
			}
		if($scope.ticTacToe[x][0].value == $scope.ticTacToe[x][1].value &&
			$scope.ticTacToe[x][1].value == $scope.ticTacToe[x][2].value &&
			$scope.ticTacToe[x][0].value != "") {
			if($scope.ticTacToe[x][0].value == "X")
				$scope.xWin = true;
			else
				$scope.yWin = true;
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
	}

	// resets game
	$scope.resetGame = function() {
		var tic = $scope.ticTacToe;

		for(var r in tic)
			for(var c in tic[r]) 
				tic[r][c].value = '';
		turnNum = 0;
		$scope.xWin = false;
		$scope.yWin = false;
		$scope.showDetails = false;
	}
});
