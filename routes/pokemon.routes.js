const { Router } = require('express');
const { check } = require('express-validator');
const { findsPokemons, findPokemon, createPokemon, UpdatePokemon, deletePokemon } = require('../controllers/pokemon.controller');
const { validExistpokemon } = require('../middlewares/pokemons.middleware');
const { validateFields } = require('../middlewares/validateFiel.middleware');

const router = Router();

router.get('/', findsPokemons);

router.get('/:id', validExistpokemon, findPokemon);
 
router.post('/',[
  check('name', 'The user name must mandatory').not().isEmpty(),
  check('image','The image is mandatory').not().isEmpty(),
], validateFields, createPokemon);

router.put('/:id',validExistpokemon, UpdatePokemon);

router.delete('/:id', validExistpokemon,deletePokemon); 

module.exports = {
  pokemonRouter: router,
};
