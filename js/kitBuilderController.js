app = angular.module('tutorialWebApp', ['dndLists']);

app.controller('kitBuilderController', function($scope) {

	// Variables

	$scope.selected = null;
	$scope.required = [
					{"name": "RequiredComponent1", "image": "kit1.jpg", "pdf": "kit1-pdf.pdf"},
					{"name": "RequiredComponent2", "image": "kit2.jpg", "pdf": "kit2-pdf.pdf"},
					{"name": "RequiredComponent3", "image": "kit3.jpg", "pdf": "kit3-pdf.pdf"}
				];
	$scope.optional = [
					{"name": "OptionalComponent1", "image": "kit4.jpg", "pdf": "kit4-pdf.pdf"},
					{"name": "OptionalComponent2", "image": "kit5.jpg", "pdf": "kit5-pdf.pdf"},
					{"name": "OptionalComponent3", "image": "kit6.jpg", "pdf": "kit6-pdf.pdf"}
				];

	// Functions


	// Retrieving Data

});
