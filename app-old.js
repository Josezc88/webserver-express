const http = require('http');

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'JOSE LUIS',
            edda: 27,
            url: request.url
        };
        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');