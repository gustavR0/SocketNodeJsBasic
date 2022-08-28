//Servidor Express
const express = require('express')
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {

    constructor () {
        this.app  = express();
        this.port = process.env.PORT;

        //Http Server
        this.server = http.createServer(this.app);
        

        //Configuraciones de Sockets
        this.io = socketIo(this.server, {/*Config*/ });

    }

    middlewares () {
        //Desplegar directorio Pulbico
        this.app.use(express.static( path.resolve(__dirname, '../public') ));
        
        //cors enable
        this.app.use(cors());
    }

    configSockets () {
        new Sockets(this.io);
    }

    execute(){
        
        this.middlewares();

        this.configSockets();

        this.server.listen(this.port, () => {
            console.log(`Server on Port ${process.env.PORT}`);
        });
    }

    

}

module.exports = Server;