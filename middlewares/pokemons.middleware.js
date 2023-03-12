const Pokemon = require('../models/pokemon.model');

exports.validExistpokemon = async (req, res, next) => {
  console.log('pasates por el middleware');
  try {
    const { id } = req.params;

    const pokemon = await Pokemon.findOne({
      attributes: ['id', 'name', 'image'],
      where: {
        id: id,
        status: 'avalaible',
      },
    });
    if(!pokemon){
        return res.status(404).json({
            status: 'error',
            message:'Resource Not Foud'
        })
    }
    req.pokemon = pokemon;

    next();
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something wen very Wrong ❌',
    });
  }
};
