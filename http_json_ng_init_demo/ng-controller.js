
var app = angular.module('myJsonHttpApp',[]);

	app.controller("listController",function($scope,$http){

		$scope.getCountryData = function(){
			$http.get('country.json')
					.then(function(response){
						$scope.countries= response.data;
					});
		}

	});