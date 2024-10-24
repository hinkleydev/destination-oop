class Person {
    #bags;
    constructor(name, destination) {
        this.name = name; this.destination = destination; // Basic init
        this.#bags = [];
    }

    getBags() {
        return this.#bags;
    }

    addBag(bag) {
        bag.assignOwner(this);
        this.#bags.push(bag)
    }
}


module.exports = Person;