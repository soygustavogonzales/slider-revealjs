sliderApp.controller('ctrlAdmin', ['svcSocket',function(svcSocket){
	Reveal.initialize();
	var  m = location.pathname.split('/');
	var room = null;
	m.shift();m.pop();
	room = m&&m[1]

	svcSocket.on('connect',function(){
		svcSocket.emit('joinToRoom',{room:room})
	})

	Reveal.addEventListener('slidechanged',function(event){
		svcSocket.emit('toSlide',{indexh:event.indexh,indexv:event.indexv})
	},false);
}])