const personRouter = require('../routes/person.router');
const personModel = require('../models/personModel');

class personService {
  //Promesas y funciones asincronicas
  //Una funcion asincronica devuelve una promesa
  //Js es un lenguaje ejecuta un hilo -> solo hace una cosa a la vez

  async createperson(person) {
    person.save();
    return person;
  }

  async listperson() {
    return personModel.find();
  }

  async showperson(personId) {
    return personModel.findById({ _id: personId });
  }

  async editperson(
    personId,
    name,
    lastname,
    dni,
    address = { city, code_zip, geo }
  ) {
    return personModel.findById({ _id: personId }).then((personFind) => {
      if (!personFind) throw Error('No se encontro el usuario');
      return personModel.updateOne(
        { personId },
        { name, lastname, dni, address }
      );
    });
  }

  async removeperson(personId) {
    const person_remove = personModel.findById({ _id: personId });
    personModel.deleteOne(person_remove);
    return personModel.deleteOne(person_remove);
  }
}

module.exports = personService;
