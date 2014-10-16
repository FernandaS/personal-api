var app = angular.module('personal-api');

app.controller('homeCtrl', function($scope, myService, $location){

var getName = function(){
	myService.getNameNode()
	.then(function(data){
		$scope.myName = data;
	})

}
getName();

var getAddress = function(){
	myService.getAddressNode()
	.then(function(data){
		$scope.address = data
	})
}
getAddress();

$scope.skills = function(){
	$location.path('/skills');
}


})