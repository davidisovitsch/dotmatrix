<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" > <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Nationwide Brand Guidelines</title>
<meta name="description" content="Nationwide Brand Guidelines" />
<meta name="keywords" content="Nationwide Brand Guidelines" />

<!-- Bootstrap -->
<link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc.5/angular-material.css">
<link rel="stylesheet" type="text/css" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc.5/docs.css">
<script src="js/modernizr.custom.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/jquery.fancybox.css" rel="stylesheet">
<link href="css/flickity.css" rel="stylesheet" >
<link href="css/animate.css" rel="stylesheet">
<link href="css/font-awesome.min.css" rel="stylesheet">

<link href="css/tabstyle.css" rel="stylesheet">
<link href="css/queries.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
 <!-- Our Website CSS Styles -->
    <link rel="stylesheet" href="css/main.css"> 
  
</head>

<body ng-app="tutorialWebApp" ng-cloak>
<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->

<!-- Our Website Content Goes Here -->
<div ng-include='"templates/header.html"'></div>
<div ng-view></div>
<div ng-include='"templates/footer.html"'></div>











<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -----------------------------> 
<script src="js/min/toucheffects-min.js"></script> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> 
<script src="js/flickity.pkgd.min.js"></script> 
<script src="js/jquery.fancybox.pack.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed -------> 
<script src="js/retina.js"></script> 
<script src="js/waypoints.min.js"></script> 
<script src="js/bootstrap.min.js"></script> 


<script>
	
jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

  </script>
        
        <!-- Vendor: Angular, followed by our custom Javascripts -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-route.min.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>
   <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-114/svg-assets-cache.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc.5/angular-material.min.js"></script>
<script src="js/angularScroll.js"></script>
<script src="js/script.js"></script>  

<script src="js/main.js"></script>

</body>

</html>
