sliderApp.controller('ctrlVisitor', ['svcSocket', function(svcSocket){
	//console.log(Reveal);

	var  m = location.pathname.split('/');
	var room = null;
	var toSlide = function(opt){
		Reveal.slide(opt.indexh,opt.indexv)
	}
	//console.log(m);
	//m.shift();m.pop();
	room = m&&m[2];

	//console.log(room);

	svcSocket.on('connect',function(){
		//console.log(room);
		svcSocket.emit('joinToRoom',{room:room})
		svcSocket.on('toSlide',toSlide)
	})
}])