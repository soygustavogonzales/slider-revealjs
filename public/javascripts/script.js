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
m.shift();m.pop();
if(m[1]){room = m[1]}

socket = io.connect(location.host);
socket.on('connect',function(){
	socket.emit('joinToRoom',{room:room})
	socket.on('toSlide',toSlide)

});
var toSlide = function(opt){
	Reveal.slide(opt.indexh,opt.indexv)
}
