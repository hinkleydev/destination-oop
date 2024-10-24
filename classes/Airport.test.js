const Airport = require("./Airport"); // Import the Airport class
import { describe, it, expect, beforeEach } from ('@jest.globals')

describe("Airport class", () => {
  test("should assign the correct name and initialize with an empty planes array", () => {
    const airport = new Airport("John F. Kennedy");

    // Test the name property
    expect(airport.name).toBe("John F. Kennedy");

    // Test that planes array is initialized as an empty array
    expect(airport.getPlanes()).toEqual([]);
  });

  test("should add planes to the planes array using addPlane()", () => {
    const airport = new Airport("Heathrow");
    const plane1 = { model: "Boeing 747", capacity: 500 };
    const plane2 = { model: "Airbus A380", capacity: 800 };

    // Add planes to the airport
    airport.addPlane(plane1);
    airport.addPlane(plane2);

    // Test if the planes are correctly added
    expect(airport.getPlanes()).toContain(plane1);
    expect(airport.getPlanes()).toContain(plane2);
  });

  test("should set and return the correct static airportCode value", () => {
    // Set the static airport code property
    Airport.airportCode = "JFK";

    // Test if airportCode is correctly set
    expect(Airport.airportCode).toBe("JFK");
  });

  test("should be able to change the airportCode and keep the value static across instances", () => {
    // Create two different airports
    const airport1 = new Airport("John F. Kennedy");
    const airport2 = new Airport("Los Angeles International");

    // Change the static airportCode
    Airport.airportCode = "LAX";

    // Test if airportCode reflects the same across both instances
    expect(Airport.airportCode).toBe("LAX");
  });
});
