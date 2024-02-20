const express = require('express');
const DB = require('./DB.js');
const Pizza = require('./models/pizzaModel.js');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {    
  res.send('Server working!');
});

app.get('/getPizzas', async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
