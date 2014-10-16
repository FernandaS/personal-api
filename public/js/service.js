var app = angular.module('personal-api');

app.service('myService', function($http){


this.skillsgetNode = function(){
	return $http({
		method: 'GET',
		url: 'http://localhost:8989/skills'
	}).then(function(response){
		console.log(response)
		return response.data;
		
	})
}

this.skillsPostNode = function(skills) {
	return $http({
		method: 'POST',
		url: 'http://localhost:8989/skills',
		data: {
			name: skills.name,
			id: skills.id,
			experience: skills.experience
		}
	}).then(function(response){
		return (response);

	})
}

this.getNameNode = function(){
	return $http({
		method: 'GET',
		url: 'http://localhost:8989/name'
	}).then(function(response){
		return response.data
	})
}

this.getAddressNode = function(){
	return $http({
		method: 'GET',
		url: 'http://localhost:8989/location'
	}).then(function(response){
		return response.data
	})

}

this.getOccupationNode = function(){
	return $http({
		method: 'GET',
		url: 'http://localhost:8989/occupation'
	}).then(function(response){
		return response.data
	})
}

this.getHobbiesNode = function(){
	return $http({
		method: 'GEt',
		url: 'http://localhost:8989/hobbies'
	}).then(function(response){
		console.log(response)
		return response.data
	})
}

});