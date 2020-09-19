const io = require('socket.io')();
const {createGameState} = require('./game');
const {FRAME_RATE} = require('./constants');

io.on('connection', client => {
    client.emit('init', {data: 'hello world'});
    createGameInterval(client, state);
});

function createGameInterval(client, state) {
    const intervalId = setInterval(() => {
        const winner = gameLoop(state);
    }, 1000 /FRAME_RATE);
}

io.listen(3000);