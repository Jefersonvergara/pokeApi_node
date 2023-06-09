const { Sequelize } = require('sequelize');
    
const db = new Sequelize({
    dialect: process.env.DB_DIALECT, // para seleccionar el dialecto del motor de la DB
    host: process.env.DB_HOST, //direccion donde se encuentra la base de datos
    username:process.env.DB_USERNAME, //usuario por defecto postgre
    password: process.env.DB_PASSWORD, //contraseña que se digita en postgre
    database: process.env.DB_DATABASE, //nombre de la base de datos
    logging: false // mostar log en la base de datos por consola
})

module.exports = { db };