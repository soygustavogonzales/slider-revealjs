module.exports = function(socket){
	//console.log(this)//this = io.sockets
	   socket.on('toSlide',function(opt){
        this.in(socket.room).emit('toSlide',opt)
    })
    socket.on('joinToRoom',function(opt){
        socket.join(opt.room)
        socket.room = opt.room
        console.log(socket.room)
    })
    socket.on('disconnect',function(){

    });
}