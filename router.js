import productsManager from "./data/ProductsManager.js";

async function router(requerimientos, respuesta){
    const url = requerimientos.url
    const opts = { "Content-type": "text/plain" }
    switch (url) {
        case "/":
            respuesta
            //a la respuesta
            .writeHead(200, opts)
            //le estoy configurando los encazamientos con el codigo de estado y las opciones de configuracion solicitada
            .end("der api connected")
            //y en el envio de la data solicitada(que es en este caso es la "landing" de mi servidor)
            break;
        case "/api/products":
        try {
            const products = await productsManager.readAll()
            respuesta
            .writeHead(200, opts)
            .end(JSON.stringify(products));
            break;
        } catch (error){
            respuesta
            .writeHead(error.statusCode)
            .end("not found products");
        }
        default:
            respuesta
            .writeHead(404, opts)
            .end("endpoint not found");
            break;
    }
}

export default router