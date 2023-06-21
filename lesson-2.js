/**
 * Lesson 2: 
 * Run npm init to turn the project into a nodejs managed project,
 * so then 3rd party packages can be installed via the npm install command.
 * The npm init creates the package.json - a configuration file  
 */

const http = require('http');

function handleRequest(request, response) {
}

const server = http.createServer(handleRequest);
server.listen(3000);