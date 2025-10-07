import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components';
import PokemonSearch from 'src/components/PokemonSearch/PokemonSearch';

export const ListPage = () => {
  const [filter, setFilter] = useState('');

  const classes = useStyles();

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className={classes.root}>
      <PokemonSearch handleSearchChange={handleSearchChange} />
      <PokemonList filter={filter} />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
    },
  },
  { name: 'ListPage' }
);
