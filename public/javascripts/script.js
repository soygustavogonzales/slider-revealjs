Reveal.initialize()
console.log(location.host)

socket = io.connect(location.host);
socket.on('connect',function(){

var next = function(){
	Reveal.next()
};
var prev = function(){
	Reveal.prev()
};

socket.on('next',next)
socket.on('prev',prev)
});