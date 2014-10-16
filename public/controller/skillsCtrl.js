var app = angular.module('personal-api');

app.controller('skillsCtrl', function($scope, myService){

var getSkills = function(){
	myService.skillsgetNode()
	.then(function(data){
		$scope.skills = data;
		console.log(data);
	})
}

getSkills();

$scope.postSkills = function(){
	myService.skillsPostNode($scope.onPost)
	.then(function(){
		getSkills();
		$scope.onPost = '';
	})
}

	
})