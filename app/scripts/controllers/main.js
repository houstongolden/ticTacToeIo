'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

  	// calls to firebase
  	var database = new Firebase("https://fire-base-tictactoe.firebaseio.com/room/");
  	$scope.room={};
  	// promise delays response to firebase
  	var promise = angularFire(database, $scope, "room");

  	promise.then(function(){
  		$scope.room={
  			ticTacToe: [[{value:""},{value:""},{value:""}],
  						[{value:""},{value:""},{value:""}],
  						[{value:""},{value:""},{value:""}]],
			turnNum: 0,
			// players: [player1, player2]
			// player1: Math.floor(Math.random()*1001),
			// player2: Math.floor(Math.random()*1001),
			// if(player1 == player2) {
			// 	player2 + 1;
			// }
			};

		$scope.clickBox = function(cell) {

			// prevents overwriting
			if(cell.value != "")
				return;
			
			// alternates turns
			if($scope.room.turnNum % 2 == 0)
				cell.value = "X";
			else
				cell.value = "O";

			++$scope.room.turnNum;
			if($scope.room.turnNum == 9)
				alert("It's a tie!");

			$scope.wins(cell);

		}
		// win conditions
		$scope.wins = function() {

			for(var x=0; x<=2; ++x) {
			if($scope.room.ticTacToe[0][x].value == $scope.room.ticTacToe[1][x].value &&
				$scope.room.ticTacToe[1][x].value == $scope.room.ticTacToe[2][x].value &&
				$scope.room.ticTacToe[0][x].value != "") {
				if($scope.room.ticTacToe[0][x].value == "X")
					$scope.xWin = true;
				else
					$scope.yWin = true;
				}
			if($scope.room.ticTacToe[x][0].value == $scope.room.ticTacToe[x][1].value &&
				$scope.room.ticTacToe[x][1].value == $scope.room.ticTacToe[x][2].value &&
				$scope.room.ticTacToe[x][0].value != "") {
				if($scope.room.ticTacToe[x][0].value == "X")
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
			var tic = $scope.room.ticTacToe;

			for(var r in tic)
				for(var c in tic[r]) 
					tic[r][c].value = '';
			$scope.room.turnNum = 0;
			$scope.xWin = false;
			$scope.yWin = false;
			$scope.showDetails = false;
		}
	});
}]);
