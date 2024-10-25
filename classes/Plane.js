const Airport = require("./Airport.js"); // connecting with Airport.js

class Plane {
  constructor(company, destination) {
    this.company = company;
    this.origin = Airport.airportCode; // Static property from Airport class
    this.destination = destination;
    this.passengers = []; // Initializes as an empty array
  }

  // Method to return the list of passengers
  getPassengers() {
    return this.passengers;
  }

  // Method to add a passenger to the passengers array
  addPassenger(passenger) {
    this.passengers.push(passenger);
  }
}

module.exports = Plane;
