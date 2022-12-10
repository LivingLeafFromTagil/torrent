require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models');
const router = require('./routes');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandlerMiddleware');

const PORT = process.env.PORT || 5757;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'server initialized',
  })
});

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