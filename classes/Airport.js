class Airport {
  static airportCode = ""; // Static property for the airport code (set for each airport)

  constructor(name) {
    this.name = name;
    this.planes = []; // Initializes as an empty array
  }

  // Method to return the list of planes currently at the airport
  getPlanes() {
    return this.planes;
  }

  // Method to add a plane to the planes array
  addPlane(plane) {
    this.planes.push(plane);
  }
}

module.exports = Airport;
