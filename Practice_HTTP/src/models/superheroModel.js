const mongoose = require('mongoose');
const superheroSchema = mongoose.Schema({
  superhero: {
    type: String,
    require: true,
  },
  realname: {
    type: String,
    require: true,
  },

  features: {
    type: Object,
    require: true,
    universe: {
      type: String,
      require: true,
    },
    super_powers: {
      type: Array,
      require: true,
    },
  },
  superhero_sidekick: {
    type: Object,
    require: true,
    sidekick: {
      type: String,
      require: true,
    },
    superpowers_sidekick: {
      type: Array,
      require: true,
    },
  },
});

module.exports = mongoose.model('SuperHeroCollection', superheroSchema);
