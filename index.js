var http = require('http'); // carga el modulo http


http.createServer((request, response) => {
    // response.writeHead(200, {'Content-type' : 'text/html'}); // madna al navegador que la solicitud fue hecha correctamente y la respuesta es html
    // response.end('Hello world'); // informar al navegaodr que la respuesta fue enviada

    if(request.url in routes){
        return routes[request.url](request, response);
    }
     response.writeHead('404');
     response.end(http.STATUS_CODES[404]);
}).listen(8080); // escuchar las solicitudes en el puerto



var routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Hello world!');
    },

    '/foo': function (request, response) {
        response.writeHead(200);
        response.end('Ruta foo');
    }
}