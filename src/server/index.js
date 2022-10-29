const express = require('express');
const sequelize = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5757;

app.get('/', (req, res) => res.status(200).json({
  message: 'server initialized',
}));

const start = async() => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`started at ${PORT} port`));
  } catch (error) {
    console.log(error);
  }
};

start();