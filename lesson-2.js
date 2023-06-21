/**
 * Lesson 2: 
 * Run npm init to turn the project into a nodejs managed project,
 * so then 3rd party packages can be installed via the npm install command.
 * The npm init creates the package.json - a configuration file  
 * 
 * Express package returns a function and that function returns an object (Stored in the app constant)
 * 
 * The app constant is used then to create a server ( with the listen method)
 * and to handle requests with the get method ( which takes as an argument the path of the request
 * and the function that should be executed for that request)
 * 
 * An app.get method should be defined for each route
 */

const express = require('express');
const app = express();


app.get('/currenttime', function (request, response) {
    response.send('<h1>' + new Date().toISOString() + '</h1>')
});

app.get('/', function (request, response) {
    response.send('<h1>Hello World!</h1>')
});

app.listen(3000);
