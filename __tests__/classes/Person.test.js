const { describe, expect, it} = require("@jest/globals");
const Person = require("../../classes/Person.js");
const Bag = require("../../classes/Bag.js");

// Test variables
const name = "Billy";
const destination = "MAN";
describe("Creates person", function() {
    it("should create an object of Person", function() {
        const person = new Person(name, destination);
        expect(person instanceof Person).toBeTruthy();
    });
});

describe("Bag functions", function() {
    it("returns bag on getBags()", function() {
        const person = new Person(name, destination);
        const bag = new Bag(20); // No owner defined because the function should set it
        person.addBag(bag);
        const bags = person.getBags();
        expect(bags[0] instanceof Bag).toBeTruthy();
    });
    it("adds a new bag on addBag() and sets the owner correctly", function() {
        const person = new Person(name, destination);
        const bag = new Bag(20); // No owner defined because the function should set it
        person.addBag(bag);
        const bags = person.getBags();
        expect(bags[0].getOwner()).toEqual(person);
    }) 
});
