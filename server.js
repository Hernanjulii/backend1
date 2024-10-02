// import { createServer } from "http"
// import router from "./router.js";
import express from "express"

const server = express();
const port = 8000;
const ready = () => console.log("server ready on port " + port);

server.listen(port, ready);

//para definir una ruta para leer el get()
server.get()


// // 1. creo un servidor
// const server  = createServer(router)
// // 5. el servidor tiene que conectarse con las rutas definidas en el enrutador

// // 2. defino un puerto de mi computadora donde quiero que funcione mi servidor de backend
// const port = 8000

// // 3. defino una callback que se va a ejecutar cuando se inicie el servidor
// const ready = ()=> console.log("server ready on port "+ port);

// // 4. inicio/levanto/corro el servidor
// server.listen(port, ready)

// //escucho el puerto de la variable "port" para levantar el servidor "server"
// //y luego ejecuto la callback que me va a informar en la consola que el servidor está funcionado
