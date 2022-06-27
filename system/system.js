'use strict';

require('dotenv').config()
const PORT = process.env.PORT

const server = require('socket.io')(PORT)

const airline = server.of('/airline');



airline.on('connection', (client) => {
    console.log('connect to airline system ', client.id);

    client.on('took-off', (flight) => {
        console.log(flight);
        console.log('------------------------------------------------------');

    });

    client.on('arrived', (flight) => {
        console.log(flight);
        console.log('------------------------------------------------------');

    });

})


server.on('connection', (client) => {
    console.log('connected ', client.id);

    client.on("new-flight", (flight) => {
        // console.log('///////////////////////////////////////');
        console.log(flight);
        console.log('------------------------------------------------------');
        airline.emit('new-flight', flight)
    });

})



// function handleTookoff(flight) {
//     console.log(flight);
//     console.log('------------------------------------------------------');

// }
// function handleArrive(flight) {
//     console.log(flight);
//     console.log('------------------------------------------------------');

// }

// module.exports = events;
