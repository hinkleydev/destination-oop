import Person from ("./Person.js")

class Bag extends Person{
  #owner
  constructor(weight, id, name, destination, bags) {
    super(name, destination, bags)
    this.weight = weight;
    this.id = id;
    this.#owner = null;
  }
  getOwner(){
      return this.#owner
  }
  assignOwner(person){
      if(person instanceof Person){
          this.#owner = person
          person.addBag(this)
      }else{
          throw new Error("owner must ba a valid Person instance")
      }
  }
}

module.exports = Bag;
