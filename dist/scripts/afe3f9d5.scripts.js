"use strict";angular.module("newTicApp",["firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newTicApp").controller("MainCtrl",["$scope","angularFire",function(a,b){a.games=[],a.queue={},a.player="",a.gameId=-1;var c=new Firebase("https://tictactoeio.firebaseio.com/games/");b(c,a,"games").then(function(){var c=new Firebase("https://tictactoeio.firebaseio.com/games/queue/");b(c,a,"queue").then(function(){if(void 0==a.queue.gameId){a.player="p1",console.log(a.player);var b={ticTacToe:[[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}]],turn:"p1",gameOver:!1,turnNum:0,waiting:!0};a.gameId=a.games.push(b)-1,a.queue.gameId=a.gameId}else a.player="p2",console.log(a.player),a.gameId=a.queue.gameId,a.queue={},a.games[a.gameId].waiting=!1})}),a.clickBox=function(b){if(a.player==a.games[a.gameId].turn){if(""!=b.value)return;b.value=0==a.games[a.gameId].turnNum%2?"X":"O",++a.games[a.gameId].turnNum,9==a.games[a.gameId].turnNum&&alert("It's a tie!"),a.games[a.gameId].turn="p1"==a.player?"p2":"p1"}a.wins(b)},a.wins=function(){for(var b=a.games[a.gameId].ticTacToe,c=0;2>=c;++c)b[0][c].value==b[1][c].value&&b[1][c].value==b[2][c].value&&""!=b[0][c].value&&("X"==b[0][c].value?a.xWin=!0:a.yWin=!0),b[c][0].value==b[c][1].value&&b[c][1].value==b[c][2].value&&""!=b[c][0].value&&("X"==b[c][0].value?a.xWin=!0:a.yWin=!0);b[0][0].value==b[1][1].value&&b[1][1].value==b[2][2].value&&""!=b[0][0].value&&("X"==b[0][0].value?a.xWin=!0:a.yWin=!0),b[2][0].value==b[1][1].value&&b[1][1].value==b[0][2].value&&""!=b[0][2].value&&("X"==b[0][2].value?a.xWin=!0:a.yWin=!0)},a.resetGame=function(){var b=a.games[a.gameId].ticTacToe;for(var c in b)for(var d in b[c])b[c][d].value="";a.games[a.gameId].turnNum=0,a.xWin=!1,a.yWin=!1,a.showDetails=!1}}]);