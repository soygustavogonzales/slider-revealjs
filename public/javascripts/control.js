Reveal.initialize();
var previousIndex = 0;
console.log(location.host)
socket = io.connect(location.host);
socket.on('connect',function(){
	Reveal.addEventListener('slidechanged',function(event){
		with(console){
			//log(event)
			//log(event.previousSlide)
			//log(event.currentSlide)
			log(event.indexh)

			if(event.indexh>previousIndex){
				log("right")
				socket.emit('next',true)
			}else{
				socket.emit('prev',true)
				log("left")
			}
			previousIndex = event.indexh
			//log(event.indexv)
		}
	},false);

})