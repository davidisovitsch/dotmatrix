app = angular.module('kitBuilder', ['dndLists']);

app.controller('kitBuilderController', function($scope) {

	// Variables

	$scope.selected = null;
	$scope.required = [
					{"name": "RequiredComponent1", "image": "kit01.jpg", "pdf": "MC_0005889984.pdf"},
					{"name": "RequiredComponent2", "image": "kit02.jpg", "pdf": "MC_0007761663.pdf"},
					{"name": "RequiredComponent3", "image": "kit03.jpg", "pdf": "MC_0007847812.pdf"}
				];
	$scope.optional = [
					{"name": "OptionalComponent1", "image": "kit04.jpg", "pdf": "MC_0008027354.pdf"},
					{"name": "OptionalComponent2", "image": "kit05.jpg", "pdf": "MC_0008205763.pdf"},
					{"name": "OptionalComponent3", "image": "kit06.jpg", "pdf": "MC_0008256953.pdf"}
				];

	// Functions


	// Retrieving Data

});
