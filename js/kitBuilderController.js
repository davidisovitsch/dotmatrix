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
					{"name": "SAVINGS INCENTIVE MATCH PLAN FOR EMPL OF SMALL EMPLOYERS (5304-SIMPLE)", "image": "component3.jpg", "pdf": "component3.pdf", "required": false},
					{"name": "Consent to Designation of Annuity Contract Beneficiary AZ, CA, ID, LA, NM, NV, PR, TX, WA, WI (AAFF-0001M3)", "image": "component4.jpg", "pdf": "component4.pdf", "required": false},
					{"name": "The Soloist Annuity Application AO 07/18 (APO-1807-10)", "image": "component5.jpg", "pdf": "component5.pdf", "required": false},
					{"name": "State Specific Forms -Replacement Forms WA (AD-SSP-WA)", "image": "component6.jpg", "pdf": "component6.pdf", "required": false}
				];
	
	$scope.send_to_email = null;
	$scope.show_email = false;

	$scope.first_name = null;
	$scope.last_name = null;
	$scope.address_1 = null;
	$scope.address_2 = null;
	$scope.city = null;
	$scope.state = null;
	$scope.zip = null;
	$scope.show_order = false;

	// Functions

	$scope.displayPdf = function(pdf) {
		window.open('../pdf/' + pdf);
	};

	$scope.sendEmail = function(email) {
		if (!email) {
			alert('Please enter an email address');
		} else {
			alert('Email sent!');
			$scope.show_email = false;
			$scope.send_to_email = null;
		}
	};

	$scope.showEmail = function() {
		$scope.show_order = false;
		$scope.show_email = !$scope.show_email;
	};

	$scope.cancelEmail = function() {
		$scope.show_email = false;
	};

	$scope.placeOrder = function() {
		alert('Order placed!');
		$scope.show_order = false;
	};

	$scope.showOrder = function() {
		$scope.show_email = false;
		$scope.show_order = !$scope.show_order;
	};

	$scope.cancelOrder = function() {
		$scope.show_order = false;
	};

	// Retrieving Data

});
