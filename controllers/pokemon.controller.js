const { where } = require('sequelize');
const Pokemon = require('../models/pokemon.model');

exports.findsPokemons = async (req, res) => {
  try {
    const { count, rows } = await Pokemon.findAndCountAll({
      attributes: ['id', 'name', 'image'], // muestra solo los atributos que queremos ver por postman
      where: {
        status: 'avalaible',
      },
    });

    res.status(200).json({
      ok: true,
      status: 'success',
      count,
      results: rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fails',
      message: 'Internal Server Error',
    });
  }
};

exports.findPokemon = async (req, res) => {
  try {
    const {pokemon}=req

    res.status(200).json({
      ok: true,
      status: 'success',
      pokemon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fails',
      message: 'Internal Server Error',
    });
  }
};

exports.createPokemon = async (req, res) => {
  try {
    const { name, image } = req.body; // desestructuramos

    const pokemon = await Pokemon.create({
      name: name,
      image: image,
    });
    res.status(200).json({
      status: 'success',
      message: 'pokemon create successfully',
      pokemon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fails',
      message: 'Internal Server Error',
    });
  }
};
exports.UpdatePokemon = async (req, res) => {
  try {
    const { pokemon } = req;
    const {name, image}=req.body;
    
await pokemon.update({name, image})

    res.status(200).json({
      ok: true,
      status: 'Success',
      message:'Pokemon update successfully'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fails',
      message: 'Internal Server Error',
    });
  }
};

exports.deletePokemon = async (req, res) => {
  try {
    const{pokemon} = req;

    await pokemon.update({status:'disaable'})


    res.status(200).json({
      ok: true,
      status: 'success',
      message:'Pokemon deleted Successfully'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fails',
      message: 'Internal Server Error',
    });
  }
};
