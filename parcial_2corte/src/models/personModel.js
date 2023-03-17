const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
  name: { type: String, require: true },
  username: { type: String, require: true },
  address: {
    type: Object,
    require: true,
    geo: {
      type: Object,
      require: true,
      lang: { type: String, require: true },
      lat: { type: String, require: true },
    },
    city: { type: String, require: true },
    code_zip: { type: Number, require: true },
  },
  phone: { type: Number, require: true },
});
module.exports = mongoose.model('PersonCollection', personSchema);
