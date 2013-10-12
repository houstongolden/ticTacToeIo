'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', function ($scope, angularFire) {
	// bind to firebase
  	$scope.games = [];
    $scope.queue = {};

    // bind to angular templates
    $scope.player = "";
    $scope.gameId = -1;

  	var games = new Firebase("https://tictactoeio.firebaseio.com/games/");
  	angularFire(games, $scope, "games").then(function (){

	  	var queue = new Firebase("https://tictactoeio.firebaseio.com/games/queue/");
	      angularFire(queue, $scope, "queue").then(function (){
		      if($scope.queue.gameId == undefined) {
		          $scope.player = "p1";
		          console.log($scope.player);
		          // create game
		          var newGame = {
		            ticTacToe: [[{value:""},{value:""},{value:""}],
		  						[{value:""},{value:""},{value:""}],
		  						[{value:""},{value:""},{value:""}]],
		            turn: "p1",
		            gameOver: false,
		            turnNum: 0,
		            waiting: true
		          };
		       
		          // add game id to queue
		          $scope.gameId = $scope.games.push(newGame) - 1;  // the - 1 matches the index of the array since arrays start at 0g
		          $scope.queue.gameId = $scope.gameId;
		          
	          }


	        else {
	          $scope.player = "p2";
	          console.log($scope.player)
	          // read game id from queue
	          $scope.gameId = $scope.queue.gameId;
	          //clear the queue
	          $scope.queue = {};
	          $scope.games[$scope.gameId].waiting = false;
	          }
			});
		});

		
		$scope.clickBox = function(cell) {

			if($scope.player == $scope.games[$scope.gameId].turn) {
				// prevents overwriting
				if(cell.value != "")
					return;
				
				// alternates turns
				if($scope.games[$scope.gameId].turnNum % 2 == 0) {
					cell.value = "X";
					}
				else {
					cell.value = "O";
					}

				++$scope.games[$scope.gameId].turnNum;
				if($scope.games[$scope.gameId].turnNum == 9)
					alert("It's a tie!");

				if ($scope.player == 'p1') {
			        $scope.games[$scope.gameId].turn = 'p2';
			      }  else {
			        $scope.games[$scope.gameId].turn = 'p1';
			      }
			};

			$scope.wins(cell);

			// add play limitation
		};
		// win conditions
		$scope.wins = function() {

			// for convenience
			var tic = $scope.games[$scope.gameId].ticTacToe;



			for(var x=0; x<=2; ++x) {
			if(tic[0][x].value == tic[1][x].value &&
				tic[1][x].value == tic[2][x].value &&
				tic[0][x].value != "") 
				 {
				if(tic[0][x].value == "X")
					$scope.xWin = true;
				
				else
					$scope.yWin = true;
				
				}
			if(tic[x][0].value == tic[x][1].value &&
				tic[x][1].value == tic[x][2].value &&
				tic[x][0].value != "") 
				 {
				if(tic[x][0].value == "X")
					$scope.xWin = true;
				
				else
					$scope.yWin = true;
				
				}
			};

			if(tic[0][0].value == tic[1][1].value &&
				tic[1][1].value == tic[2][2].value &&
				tic[0][0].value != "") 
				 {
				if(tic[0][0].value == "X")
					$scope.xWin = true;
				
				else
					$scope.yWin = true;

				}
			
			if(tic[2][0].value == tic[1][1].value &&
				tic[1][1].value == tic[0][2].value &&
				tic[0][2].value != "")
				 {
				if(tic[0][2].value == "X")
					$scope.xWin = true;
				else
					$scope.yWin = true;
				}		
		};
		// resets game
		$scope.resetGame = function() {
			var tic = $scope.games[$scope.gameId].ticTacToe;

			for(var r in tic)
				for(var c in tic[r]) 
					tic[r][c].value = '';
			$scope.games[$scope.gameId].turnNum = 0;
			$scope.xWin = false;
			$scope.yWin = false;
			$scope.showDetails = false;
		};

});
