const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  varients: [],
  price: [],
  category: { type: String, required: true },
  image: { type: String, required: true },
  descripthin: { type: String, required: true },
}, {
  timestamps: true,
});

const PizzaModel = mongoose.model('Pizza', pizzaSchema);

module.exports = PizzaModel;
