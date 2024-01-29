const express = require('express');
const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.listen(3000, () => {
    console.log('Server listening on port 3000');
})

