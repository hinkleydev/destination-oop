const { describe, expect, it } = require("@jest/globals");
const Bag = require("../../classes/Bag.js");

const Owner = require("../../classes/Person.js");
const Person = require("../../classes/Person.js");

// Test variables
const owner = new Person("Billy", "MAN");
const weight = 20;

describe("Create bag", function() {
    it("creates a bag", function() {
        const bag = new Bag(weight, owner);
        expect(bag instanceof Bag).toBeTruthy();
    })
})

describe("Bag variables", function() {
    it("has an ID", function() {
        const bag = new Bag(weight, owner);
        expect(bag.id != NaN).toBeTruthy();
    })
    it("has the right weight", function() {
        const bag = new Bag(weight, owner);
        expect(bag.weight).toBe(weight);
    })
})

describe("Bag functions", function() {
    it("returns owner", function() {
        const bag = new Bag(weight, owner);
        expect(bag.getOwner()).toEqual(owner); // Object equality
    })
    it("sets owner", function() {
        const owner2 = new Person("Sophie", "MAN");
        const bag = new Bag(weight, owner2);
        expect(bag.getOwner()).toEqual(owner2); // Object equality
    })
})