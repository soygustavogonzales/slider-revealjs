sliderApp.controller('ctrlVisitor', ['svcSocket', function(svcSocket){
	//console.log(Reveal);
	Reveal.initialize({
		keyboard:false,
		touch:false,
		slideNumber:true,
		backgroundTransition:'slide',
		transitionSpeed:'slow',
		controls:false
		//,parallaxBackgroundImage:'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
	})
	var  m = location.pathname.split('/');
	var room = null;
	var toSlide = function(opt){
		Reveal.slide(opt.indexh,opt.indexv)
	}
	m.shift();m.pop();
	room = m&&m[1];
	svcSocket.on('connect',function(){
		svcSocket.emit('joinToRoom',{room:room})
		svcSocket.on('toSlide',toSlide)
	})
}])