const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  'torrent',
  'postgres',
  '123456789',
  {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433
  }
)