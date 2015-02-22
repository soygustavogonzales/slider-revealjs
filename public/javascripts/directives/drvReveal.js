sliderApp.directive('drvReveal', [function(){
	// Runs during compile
	return {
		restrict: 'A',
		controller: function($scope, $element, $attrs) {
			var opt = new Object()
			angular.forEach($attrs.$attr,function(a,b){
				if(a.split('-')[0]=="data"){
						//console.log($attrs[b])
						if(($attrs[b]=="true")||($attrs[b]=="false")){
							opt[b] = eval($attrs[b])
						}else{
							opt[b] = $attrs[b]
						}
						//opt[b] = (($attrs[b]=="true")||($attrs[b]=="false"))&&(eval($attrs[b]))
						//opt[b] = (!(($attrs[b]=="true")||($attrs[b]=="false")))&&$attrs[b]
				}

			})
			//console.log(opt)
			Reveal.initialize(opt)	

		}
	};
}]);