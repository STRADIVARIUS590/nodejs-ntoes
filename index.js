var http = require('http'); // carga el modulo http

function index(request, response){
    response.writeHead(200);
    response.end('Hello, wold');
}

http.createServer((request, response) => {
    // response.writeHead(200, {'Content-type' : 'text/html'}); // madna al navegador que la solicitud fue hecha correctamente y la respuesta es html
    // response.end('Hello world'); // informar al navegaodr que la respuesta fue enviada

    if(request.url  == '/'){
        return index(request, response);
     }

}).listen(8080); // escuchar las solicitudes en el puerto

