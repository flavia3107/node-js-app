/**
 * Lesson 1: Basic NodeJS
 * 
 * require allows the use of packages and returns an instance of that package.
 * 
 * To create a server: 
 * 1. Use the method create server from http package.
 * 2. Pass a function that will be called when there are requests. This function
 * takes two parameters: response and request. The response will specify what the server
 * will return and request specifies the details of the client requests to the server.
 * 3. Listen to the server that is 'hosted' in localhost/3000 the port specified as an argument.
 */ 


const http = require('http');

function handleRequest(request, response) {
    // request.url return the part of the url after localhost:3000/currenttime
    if (request.url === '/currenttime') {
                    response.statusCode = 200;
    response.end('<h1>'+ new Date().toISOString() + '</h1>');
    } else if (request.url === '/') {
            response.statusCode = 200;
    response.end('<h1>Hello World!</h1>');
    }
}

const server = http.createServer(handleRequest);
server.listen(3000);