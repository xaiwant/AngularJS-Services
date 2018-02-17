	  
/*Factory services*/   
  var MyApp = angular.module("MyApp", []);
  MyApp.controller('MyController', function($scope,  TaxFactory) {
    $scope.num1 = 599;
	$scope.num2 = 5
	/*calling service*/
	$scope.dosum = function() {
       $scope.total = TaxFactory.cal($scope.num1, $scope.num2);
	};
  });

  // Services getting registered using Module Factory.
  MyApp.factory('TaxFactory', function() {
    // creating empty serviceobject
    var calService = {};
    // Business logic 
    calService.cal = function(a, b) {
	  return (((a * b)/100)+parseInt(a));
    };
    // returning object that can be used by the controller.
    return calService;
  });
	 
/*Service services*/
	 
  MyApp.controller('YourController', function($scope,  TaxFactorys) {
    $scope.num1 = 250;
	$scope.num2 = 28
	/*calling service*/
	$scope.dosum = function() {
       $scope.total = TaxFactorys.cal($scope.num1, $scope.num2);
	};
  });

  // Services getting registered using Module Factory.
  MyApp.service('TaxFactorys', function() {
    this.cal = function(a, b) {
	  return (((a * b)/100)+parseInt(a));
    };
  });

/*Provider services*/

	MyApp.controller('OurController', function($scope,  TaxService) {
		$scope.a =20;
		$scope.b =30;
		$scope.addfn = function() {
			$scope.sum = TaxService.addfns($scope.a, $scope.b);
		};
	});

	MyApp.provider('TaxService', function() {  
		this.$get = function () {
			var CalculateService = {};
			 var a = this.a;
			CalculateService.addfns = function (a,b) {
				return parseInt(a) + parseInt(b);
			};
			return CalculateService;
		};
	});

	MyApp.config(["TaxServiceProvider", function (TaxServiceProvider) {
         //@todo
	}]);
  


  