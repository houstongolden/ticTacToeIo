'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

  	// calls to firebase
  	var database = new Firebase("https://fire-base-tictactoe.firebaseio.com/room/");
  	$scope.room={};
  	var promise = angularFire(database, $scope, "room"); // room is whatever you're binding

  	// var myDataRef = new Firebase("https://fire-base-tictactoe.firebaseio.com/queue/");
  	// myDataRef.transaction(function(current_value) {
  	// 	return current_value + 1;
  	// })
  	// angularFire(myDataRef, $scope, "queue", []).then(function() {
  	// 	if($scope.queue != {})


  	// });
  	// $scope.queue={};
  	// ref.remove look up documentation
  	// promise delays response to firebase
  	// var promise = angularFire(database, $scope, "queue");
  	// if($scope.queue != {})
  	// 	join game
  	// 	i am player2
  	// else
  	// 	create game
  	// 	i am player1

  	promise.then(function(){
  		$scope.room={
  			ticTacToe: [[{value:""},{value:""},{value:""}],
  						[{value:""},{value:""},{value:""}],
  						[{value:""},{value:""},{value:""}]],
  			// gameWon: false;
			// players: [player1, player2]
			// player1: Math.floor(Math.random()*1001),
			// player2: Math.floor(Math.random()*1001),
			// if(player1 == player2) {
			// 	player2 + 1;
			// }
			turnNum: 0,
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

			// for convenience
			var tic = $scope.room.ticTacToe;

			// win possibilities
			// var winz=[[[0,0] [0,1], [0,2]],[[1,0], [1,2], [1,3]],[[2,0], [2,1], [2,2]],
			// 		  [[0,0] [1,0], [2,0]],[[0,1], [1,1], [2,1]],[[0,2], [1,2], [2,2]],
			// 		  [[0,0] [0,1], [0,2]],[[1,0], [1,2], [1,3]];

			// for(var i = 0; i < winz.length; ++i)
			// if ((tic[winz[i][0].value] == tic[winz[i][1].value]) && 
			// 	(tic[winz[i][1].value] == tic[winz[i][2].value]) &&
			// 	(tic[winz[i][0].value] != "")) {
			// 	if(tic[winz[i][0].value] == "X")
			// 		$scope.xWin = true;
			// 	else
			// 		$scope.yWin = true;
			// }

			for(var x=0; x<=2; ++x) {
			if(tic[0][x].value == tic[1][x].value &&
				tic[1][x].value == tic[2][x].value &&
				tic[0][x].value != "") {
				if(tic[0][x].value == "X")
					$scope.xWin = true;
				else
					$scope.yWin = true;
				}
			if(tic[x][0].value == tic[x][1].value &&
				tic[x][1].value == tic[x][2].value &&
				tic[x][0].value != "") {
				if(tic[x][0].value == "X")
					$scope.xWin = true;
				else
					$scope.yWin = true;
				}
			};

			if(tic[0][0].value == tic[1][1].value &&
				tic[1][1].value == tic[2][2].value &&
				tic[0][0].value != "") {
				if(tic[0][0].value == "X")
					$scope.xWin = true;
				else
					$scope.yWin = true;
				}
			
			if(tic[2][0].value == tic[1][1].value &&
				tic[1][1].value == tic[0][2].value &&
				tic[0][2].value != "") {
				if(tic[0][2].value == "X")
					$scope.xWin = true;
				else
					$scope.yWin = true;
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
