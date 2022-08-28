class Sockets {

    constructor(io){
        this.io = io;

        this.socketEvent();
    }

    socketEvent(){
        // on Conecction
        this.io.on('connection', (socket) => { 
            
            socket.on('mensaje-to-server', (data) => {
                console.log(data)
        
                this.io.emit('mensaje-form-server', data);
        
            })
        
        });
        
    }

}

module.exports = Sockets