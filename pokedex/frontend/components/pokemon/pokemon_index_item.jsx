import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return <li><Link to={`/pokemon/${pokemon.id}`}><img src={pokemon.image_url} height="100" width="100"></img> {pokemon.name}</Link></li>;
};

export default PokemonIndexItem;
