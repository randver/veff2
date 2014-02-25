'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ["$scope", function($scope) {
  	$scope.userlist = [];


  	var socket = io.connect("http://localhost:8080")
  	$scope.loggedIn = false;
  	socket.on("roomlist", function(data){
  		console.log(data);
  		$scope.$apply(function(){
  			  $scope.rooms = data;	
  		})

  	});

  	$scope.rooms = [];

  	$scope.submit = function() {
  		var user = $scope.username;
  		console.log(user);
	  	socket.emit("adduser", user, function(available){
	    if (available){
	        // The "dabs" username is not taken! 
	        socket.emit("rooms");
	        $scope.loggedIn = true;
	    }
	    else
	    {
	    	alert(user + " is taken, please select a new username");
	    }
		});
	}
  }])
  .controller('MyCtrl2', [function() {

  }]);