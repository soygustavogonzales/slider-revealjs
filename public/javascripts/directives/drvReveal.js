sliderApp.directive('drvReveal', [function(){
	// Runs during compile
	return {
		restrict: 'A',
		controller: function($scope, $element, $attrs) {

			//console.log($attrs)
			Reveal.initialize({
				transition:$attrs.transition,
				touch:$attrs.touch,
				sliderNumer:$attrs.sliderNumer,
				backgroundTransition:$attrs.backgroundTransition,
				transitionSpeed:$attrs.transitionSpeed,
				controls:$attrs.controls
			})	
			/*
			*/
		}
	};
}]);