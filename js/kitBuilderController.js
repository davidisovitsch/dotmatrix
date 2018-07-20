app = angular.module('kitBuilder', ['dndLists']);

app.controller('kitBuilderController', function($scope) {

	// Variables

	$scope.selected = null;
	$scope.required = [
					{"name": "Invest for tomorrow - today. Soloist Variable Annuity. Key Facts (NFM-1587AO)", "image": "kit1.jpg", "pdf": "kit1-pdf.pdf", "required": true},
					{"name": "Soloist Product Prospectus (PRO-2503)", "image": "component1.jpg", "pdf": "component1.pdf", "required": true},
					{"name": "Soloist Information (Forms Necessary to Set Up a Simple IRA Plan) (APO-3485)", "image": "component2.jpg", "pdf": "component2.pdf", "required": true}
				];
	$scope.optional = [
					{"name": "FI/ID/WH Nationwide Your Life Index Universal Life Client Kit TN", "image": "kit4.jpg", "pdf": "kit4-pdf.pdf", "required": false},
					{"name": "FI ID WH Your Life IUL Protector Client Kit IN", "image": "kit5.jpg", "pdf": "kit5-pdf.pdf", "required": false},
					{"name": "SAVINGS INCENTIVE MATCH PLAN FOR EMPL OF SMALL EMPLOYERS (5304-SIMPLE)", "image": "component3.jpg", "pdf": "component3.pdf", "required": false}
				];

	// Functions

	$scope.displayPdf = function(pdf) {
		window.open('../pdf/' + pdf);
	};

	// Retrieving Data

});
