import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = pokemon => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = (id) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(id).then(pokemon => dispatch(receiveOnePokemon(pokemon)));
};