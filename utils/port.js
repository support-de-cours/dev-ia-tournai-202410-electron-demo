const net = require('net');

function randomPort() {
    const server = net.createServer();
    server.listen(0);
    const port = server.address().port;
    server.close();
    return port;
}
module.exports = randomPort();


