"use strict";
require("./manager");
const events = require("../events");

events.on("new-flight", handleTookoff);
events.on("new-flight", handleArrive);
/////////////////////////////////tookoff
function handleTookoff(flight) {
    setTimeout(() => {
        flight.events = "took_off";
        console.log(`Pilot: flight with ID ${flight.Details.flightID} took-off`);
        // console.log(flight);
        events.emit('took-off', flight);
    }, 4000);
}

/////////////////////////////////////arrive
function handleArrive(flight) {
    setTimeout(() => {
        flight.events = "arrived";
        console.log(`Pilot: flight with ID ${flight.Details.flightID} has arrived`);
        // console.log(flight);
        events.emit('arrived', flight)

    }, 3000);
}
