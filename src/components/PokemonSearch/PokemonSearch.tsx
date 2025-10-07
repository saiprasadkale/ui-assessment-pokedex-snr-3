import { createUseStyles } from 'react-jss';
import React from 'react';

function PokemonSearch({ handleSearchChange }) {
  const classes = useStyles();
  return (
    <div className={classes.SearchContainer}>
      <input
        onChange={handleSearchChange}
        className={classes.SearchBox}
        type="text"
        placeholder="Search your Pokemon"
      />
    </div>
  );
}
const useStyles = createUseStyles(
  {
    SearchBox: {
      background: '#2E2E3E',
      padding: '10px',
      borderRadius: '10px',
    },
    SearchContainer: {
      margin: '10px',
    },
  },
  { name: 'PokemonSearch' }
);

export default PokemonSearch;
