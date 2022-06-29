'use strict';

require('dotenv').config()
const PORT = process.env.PORT
const { v4: v4 } = require("uuid");
const server = require('socket.io')(PORT)

const airline = server.of('/airline');

const queue = {
    flights: {

    }
};

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
    ////// lab 13
    client.on("get-all", (flight) => {
        Object.keys(queue.flights).forEach((id) => {
            client.emit("new-flight", {
                id: id,
                flight: queue.flights[id]
            });
        });
    });

    ////// lab 13
    client.on("delete", (flight) => {
        delete queue.flights[flight.id];
    });
})


server.on('connection', (client) => {
    console.log('connected ', client.id);

    client.on("new-flight", (flight) => {
        // console.log('///////////////////////////////////////');
        console.log({ flight });
        console.log('------------------------------------------------------');
        let id = v4();
        queue.flights[id] = flight;
        airline.emit('new-flight', flight)
    });



});



