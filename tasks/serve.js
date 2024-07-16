const handler = require('serve-handler');
const http = require('http');
const dotenv = require('dotenv');

require('dotenv').config();

const { VITE_HOST, VITE_PORT } = process.env;

console.info(process.env);

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: 'build'
  });
});

server.listen(VITE_PORT, () => {
  console.info('Client: Accepting connections at ' + VITE_HOST);
});
