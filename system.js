'use strict';
require("./src/manager");
require("./src/pilot")
const events = require("./events");

events.on("new-flight", handleNewFlight);
events.on("took-off", handleTookoff)
events.on("arrived", handleArrive)

function handleNewFlight(flight) {
    console.log(flight);
    console.log('------------------------------------------------------');
}

function handleTookoff(flight) {
    console.log(flight);
    console.log('------------------------------------------------------');

}
function handleArrive(flight) {
    console.log(flight);
    console.log('------------------------------------------------------');

}

module.exports = events;
