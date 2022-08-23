const express = require('express');

const app = express();

app.get('/ping', (request, response) => {
    response.send('pong');
});

// Test

app.get('/status', (request, response) => {
    response.send('TimeStamp');
});


app.listen(8090, 'localhost');