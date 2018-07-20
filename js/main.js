/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute','duScroll','ngMaterial', 'ngAnimate']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/strat", {templateUrl: "partials/strategic-framework.html", controller: "PageCtrl"})
    .when("/logo", {templateUrl: "partials/logo.htm", controller: "PageCtrl"})
	.when("/icon-thumbs", {templateUrl: "partials/icon-thumbs.htm", controller: "PageCtrl"})
    .when("/voice", {templateUrl: "partials/voice.htm", controller: "PageCtrl"})
    .when("/photo", {templateUrl: "partials/photo.htm", controller: "PageCtrl"})
    .when("/type", {templateUrl: "partials/type.htm", controller: "PageCtrl"})
    // Blog
    .when("/color", {templateUrl: "partials/color.htm", controller: "PageCtrl"})
    .when("/icon", {templateUrl: "partials/icon.htm", controller: "PageCtrl"})
	.when("/patterns", {templateUrl: "partials/patterns.htm", controller: "PageCtrl"})
	.when("/example", {templateUrl: "partials/together.htm", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls the Blog
 */
app.controller('MyCtrl', function(/*$scope, $document, $location, $http*/){
	console.log("Page scroller reporting for duty.");
//    $scope.toTheTop = function() {
//      $document.scrollTopAnimated(0, 5000).then(function() {
//        console && console.log('You just scrolled to the top!');
//      });
//    }
//    var section2 = angular.element(document.getElementById('section-2'));
//    $scope.toSection2 = function() {
//      $document.scrollToElementAnimated(section2);
//    }
  }
).value('duScrollOffset', 90);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });
 

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});

	

