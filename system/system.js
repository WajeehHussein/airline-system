'use strict';
// require("../manager/manager");
// require("../pilot/pilot")
// const events = require("../events");

// events.on("new-flight", handleNewFlight);
// events.on("took-off", handleTookoff)
// events.on("arrived", handleArrive)
require('dotenv').config()
const PORT = process.env.PORT

const server = require('socket.io')(PORT)

server.on('connection', (client) => {
    // console.log('connected ', client.id);

    client.on("new-flight", (flight) => {
        // console.log('///////////////////////////////////////');
        console.log(flight);
        console.log('------------------------------------------------------');
        server.emit('new-flight', flight)
    });


    client.on('took-off', (flight) => {
        console.log(flight);
        console.log('------------------------------------------------------');

    });


    client.on('arrived', (flight) => {
        console.log(flight);
        console.log('------------------------------------------------------');

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
