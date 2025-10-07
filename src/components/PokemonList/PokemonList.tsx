import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Link } from 'react-router-dom';

export const PokemonList = () => {
  const [filter, setFilter] = useState('');
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
 const handleSearchChange = (e) => {
   setFilter(e.target.value);
   console.log(filter);
   console.log(pokemons);
 };

  return (
    <div className={classes.root}>
      <input onChange={handleSearchChange} type="text" />
      {loading && <div>Loading...</div>}
      {pokemons.map(
        (pkmn) =>
          pkmn.name.toLowerCase().includes(filter.toLowerCase()) && (
            <Link
              to={`/pokemon/${pkmn.id}`}
              key={pkmn.id}
              className={classes.card}
            >
              <img
                src={pkmn.image}
                alt="Girl in a jacket"
                width="100%"
                height="50%"
              />
              <div>{pkmn.name}</div>
              <div>{pkmn.number}</div>
              <div>{pkmn.types}</div>
            </Link>
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
      justifyContent: 'space-between', // Evenly distributes space between cards
      gap: '24px', // Adds consistent spacing between cards
    },
    card: {
      padding: '32px',
      width: '20%',
      background: 'red',
      borderRadius: '30px',
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: '0 4px 12px rgba(251, 252, 249, 1)',
        cursor: 'pointer',
      },
      '& > div': {
        // styles for div elements directly inside card
        marginTop: '8px',
        fontWeight: 'bold',
      },
    },
  },
  { name: 'PokemonList' }
);
