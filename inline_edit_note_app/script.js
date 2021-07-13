
function InlineEditorController($scope){

	$scope.showtooltip= false;
	$scope.value = 'Edit me!';


	$scope.hideToolTip = function(){
		$scope.showtooltip = false;
	}

	$scope.toggleToolTip = function($event){
		$event.stopPropagation();
		$scope.showtooltip = !$scope.showtooltip;
	}

}