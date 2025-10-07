import { useNavigate } from 'react-router-dom';

import { createUseStyles } from 'react-jss';
type Pokemon = {
  id: string;
  number: string;
  name: string;
  types: string[];
  image: string;
};
type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  function typeBoxes(types: string[]) {
    return (
      <div className={classes.typeContainer}>
        {types.map((type: string, index: number) => {
          return (
            <div key={index} className={classes[type]}>
              {type}
            </div>
          );
        })}
      </div>
    );
  }
  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };
  return (
    <div
      key={pokemon.id}
      className={classes.cardContainer}
      onClick={handleClick}
    >
      <img
        src={pokemon.image}
        alt="Girl in a jacket"
        className={classes.cardImage}
      />
      <div>{pokemon.name}</div>
      <div>#{pokemon.number}</div>
      <div>{typeBoxes(pokemon.types)}</div>
    </div>
  );
};
const useStyles = createUseStyles(
  {
    cardContainer: {
      background: '#2E2E3E',
      borderRadius: '10%',
      width: '15%',
      padding: '20px',
      '& > div': {
        height: '8%',
      },
      '& > *': {
        padding: '5px',
      },
      '&:hover': {
        boxShadow: '0 4px 12px rgba(251, 252, 249, 1)',
        cursor: 'pointer',
      },
    },
    typeContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      '& > div': {
        minWidth: '70px',
        padding: '5px',
        borderRadius: '10px',
      },
    },
    cardImage: {
      borderRadius: '10%',
      width: '80%',
      height: '60%',
    },
    Grass: {
      background: '#78CD54',
    },
    Poison: {
      background: '#AB549A',
    },
    Flying: {
      background: '#669AFF',
    },
    Bug: {
      background: '#ABBC1C',
    },
    Fire: {
      background: '#FF421C',
    },
    Water: {
      background: '#3393DD',
    },
    Normal: {
      background: '#BABBAA',
    },
    Electric: {
      background: '#E5C531',
    },
    Ground: {
      background: '#D6B55A',
    },
    Fighting: {
      background: '#A55745',
    },
    Psychic: {
      background: '#EA5D60',
    },
    Rock: {
      background: '#BAAB82',
    },
    Ice: {
      background: '#86D2F5',
    },
    Ghost: {
      background: '#6075A6',
    },
    Dragon: {
      background: '#5060E1',
    },
    Dark: {
      background: '#585366',
    },
    Steel: {
      background: '#89A1B0',
    },
    Fairy: {
      background: '#ED90E9',
    },
  },
  { name: 'PokemonList' }
);
export default PokemonCard;
