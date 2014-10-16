var app = angular.module('personal-api', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider){

$routeProvider
	.when('/',{
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	.when('/me',{
		templateUrl: 'pages/me.html',
		controller: 'meCtrl'
	})
	.when('/skills', {
		templateUrl: 'pages/skills.html',
		controller: 'skillsCtrl'

	})
	.otherwise({
		redirectTo: '/'
	})


}]);
