const superheroModel = require('../models/superhero_v2_model');

class SuperheroService {
  /* promesas y funciones asincronicas
una funcion asincronica devuelve una promesa
js es un lenguaje que ejecuta un hilo -> solo hace una cosa a la vez  */

  async createSuperhero(superhero_v2) {
    superhero_v2.save();
    return superhero_v2;
  }
  async listSuperhero() {
    return superheroModel.find();
  }
  async showSuperhero(superheroId) {
    return superheroModel.findById({ _id: superheroId });
  }
  async editSuperhero(superheroId, superhero, realname, superpower) {
    return superheroModel
      .findById({ _id: superheroId })
      .then((superheroFind) => {
        if (superheroFind) throw Error('No se encontró el superheroe');
        return superheroModel.updateOne(
          { superheroId },
          { superhero, realname, superpower }
        );
      });
  }
  removeSuperhero(superheroId) {
    const superhero_remove = superheroModel.findById({ _id: superheroId });
    superheroModel.deleteOne(superher_remove);
  }
}

module.exports = SuperheroService;
