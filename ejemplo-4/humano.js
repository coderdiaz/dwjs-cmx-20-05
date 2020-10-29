class Humano {
  name = '';
  edad = null;

  constructor(name, edad) {
    this.name = name;
    this.edad = edad;
  }

  sayHi() {
    return `Hey! Me llamo ${this.name}`;
  }
}

module.exports = Humano;
