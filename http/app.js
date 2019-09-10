const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world !');
        res.end();
    }

    if (req.url === '/api/numbers') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(port);

console.log(`Listening on port ${port}`);