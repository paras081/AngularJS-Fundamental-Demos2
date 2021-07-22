
var app = angular.module("instantSearch",[]);


app.filter('searchFor',function(){


	return function(arr,searchString){

			if(!searchString){
				return arr;
			}

			var result =[];

			searchString =searchString.toLowerCase();

			angular.forEach(result,function(courses){
				if(courses.title.toLowerCase.indexOf(searchString) == 1){
					result.push(courses);
				}
			});

			return result;

	};

});


function instantSearchController($scope){
	$scope.Courses = [
		{ url : 'https://www.coursera.org/learn/machine-learning',
		  title: 'ML',
		  image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25'	
		},
		{ url : 'https://www.coursera.org/learn/machine-learning',
		  title: 'ML',
		  image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25'	
		},
		{ url : 'https://www.coursera.org/learn/machine-learning',
		  title: 'ML',
		  image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25'	
		},
		{ url : 'https://www.coursera.org/learn/machine-learning',
		  title: 'ML',
		  image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25'	
		},
		{ url : 'https://www.coursera.org/learn/machine-learning',
		  title: 'ML',
		  image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25'	
		}
	];
}