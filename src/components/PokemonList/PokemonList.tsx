import React from 'react';
import { createUseStyles } from 'react-jss';

import { useGetPokemons } from '../../hooks/useGetPokemons';
import PokemonCard from '../PokemonCard/PokemonCard';

export const PokemonList = ({ filter }) => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      {pokemons.map(
        (pkmn) =>
          pkmn.name.toLowerCase().includes(filter.toLowerCase()) && (
            <PokemonCard key={pkmn.id} pokemon={pkmn} />
          )
      )}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'space-evenly',
    },
  },
  { name: 'PokemonList' }
);
