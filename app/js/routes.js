"use strict";

angular.module('MyApp.routes', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/app', {
			templateUrl: 'partial/home.html',
			controller: 'testCtrl'
		});

		$routeProvider.otherwise({
			redirectTo: '/app'
		});
	}]);