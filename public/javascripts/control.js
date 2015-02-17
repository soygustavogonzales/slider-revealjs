Reveal.initialize({
	transition:'slide'
	//,parallaxBackgroundImage:'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
});
console.log(location.host)
var  m = location.pathname.split('/');
var room = null;
m.shift();m.pop();
if(m[1]){room = m[1]}

socket = io.connect(location.host);
socket.on('connect',function(){
	socket.emit('joinToRoom',{room:room})
})

	Reveal.addEventListener('slidechanged',function(event){
			socket.emit('toSlide',{indexh:event.indexh,indexv:event.indexv})
	},false);