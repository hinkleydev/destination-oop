const Person = require("./Person.js")

class Bag {
  static id = 1;  
  #owner
  constructor(weight, owner) {
    this.weight = weight;
    this.id = Bag.id;
    Bag.id++;
    this.#owner = owner;
  }
  getOwner(){
      return this.#owner
  }
  assignOwner(person){
      if(person instanceof Person){
          this.#owner = person
      }else{
          throw new Error("owner must ba a valid Person instance")
      }
  }
}

module.exports = Bag;
