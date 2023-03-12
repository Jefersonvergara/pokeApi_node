const { DataTypes } = require('sequelize'); // importamos sequelize
const { db } = require('../database/db'); // importamos el archivo de configuracion de nuestra DB

const Pokemon = db.define('Pokemon', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status:{
    type:DataTypes.STRING,
    defaultValue: 'avalaible',
    allowNull:false,
  }

});

module.exports = Pokemon;
