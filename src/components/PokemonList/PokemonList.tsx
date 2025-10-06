import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      {pokemons.map((pkmn) => (
        <div key={pkmn.id}>
          <div>{pkmn.name}</div>
          <div>{pkmn.number}</div>
          <div>{pkmn.types}</div>
          <img
            src={pkmn.image}
            alt="Girl in a jacket"
            width="500"
            height="600"
          />
        </div>
      ))}
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
    },
  },
  { name: 'PokemonList' }
);
