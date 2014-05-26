'use strict';

angular.module('MyApp.controllers', [])

	.controller('testCtrl', ['$scope', '$location', '$firebase',
	function($scope, $location, $firebase){
		var urlUsers = "https://donkino.firebaseio.com/users/";
		var userRef = new Firebase(urlUsers);
		$scope.users = $firebase(userRef);
		$scope.usersList = [];

		$scope.addUser = function(){
			$scope.users.$add($scope.newUser);
			$scope.newUser = "";
		};

		$scope.supprUser = function(user) {
			userRef.on('value', function(snap){
				var refs = snap.val();
				for(var i in refs){
					if (refs[i] == user) {
						var rem = new Firebase(urlUsers + i);
						rem.remove();
					}
				};
			});
		};
	}]);