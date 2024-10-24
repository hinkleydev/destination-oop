const Plane = require("./Plane.js"); // Import the Plane class
const Airport = require("./Airport.js"); // Import the Airport class

describe("Plane class", () => {
  // Before each test, set a static airport code for the origin
  beforeEach(() => {
    Airport.airportCode = "JFK";
  });

  test("should assign company, origin, and destination correctly", () => {
    const plane = new Plane("Delta", "LAX");

    // Test that company, origin, and destination are correctly assigned
    expect(plane.company).toBe("Delta");
    expect(plane.origin).toBe("JFK"); // Origin is based on the static Airport.airportCode
    expect(plane.destination).toBe("LAX");
  });

  test("should initialize with an empty passengers array", () => {
    const plane = new Plane("United", "SFO");

    // Test that passengers array is initialized as an empty array
    expect(plane.getPassengers()).toEqual([]);
  });

  test("should add passengers to the passengers array using addPassenger()", () => {
    const plane = new Plane("American Airlines", "MIA");
    const passenger1 = { name: "John Doe" };
    const passenger2 = { name: "Jane Smith" };

    // Add passengers to the plane
    plane.addPassenger(passenger1);
    plane.addPassenger(passenger2);

    // Test that the passengers array contains the added passengers
    expect(plane.getPassengers()).toContain(passenger1);
    expect(plane.getPassengers()).toContain(passenger2);
  });
});
