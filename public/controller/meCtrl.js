var app = angular.module('personal-api');

app.controller('meCtrl', function($scope, myService){


var getOccupation = function(){
	myService.getOccupationNode()
	.then(function(data){
		$scope.myOccupation = data
	})
}

getOccupation();

var getHobbies = function(){
	myService.getHobbiesNode()
	.then(function(data){
		$scope.hobbies = data
	})
}

})