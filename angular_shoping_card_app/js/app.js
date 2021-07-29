var app = angular.module("myModule",[])
				 .controller("myController",function($scope){

				 	$scope.products = [
				 				{p_name : "Sumsung Galaxy m31" , p_image:"images/1.png", p_prize:15999},
				 				{p_name : "iPhone 12" , p_image:"images/2.png", p_prize:150999},
				 				{p_name : "Lenovo Yoga" , p_image:"images/3.jpg", p_prize:80999},
				 				{p_name : "MacBook Pro with M1 chip" , p_image:"images/4.jpg", p_prize:160999},
				 				{p_name : "Sony 4k TV" , p_image:"images/5.jpg", p_prize:250999},
				 				{p_name : "Sumsung TV" , p_image:"images/6.jpg", p_prize:70999},
				 				{p_name : "Nokia Android 5" , p_image:"images/7.jpg", p_prize:15999},

				 	];


				 });