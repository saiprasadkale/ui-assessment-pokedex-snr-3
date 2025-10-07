import { useParams, useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { createUseStyles } from 'react-jss';
import { useGetPokemon } from 'src/hooks/useGetPokemon';

export const PokemonDialog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pokemon, loading, error } = useGetPokemon({ id });

  const handleClose = () => {
    navigate(-1);
  };
  const classes = useStyles();
  return (
    <Dialog className={classes.root} open={true} onClose={handleClose}>
      <DialogTitle>{pokemon?.name}</DialogTitle>
      <DialogContent>
        {loading ? (
          'Loading...'
        ) : error ? (
          'Error!'
        ) : (
          <>
            <img src={pokemon?.image} alt={pokemon?.name} />
            <div className={classes.text}>Number: {pokemon?.number}</div>
            <div className={classes.text}>
              Type: {pokemon?.types.join(' | ')}
            </div>
            <div className={classes.text}>Max HP: {pokemon?.maxHP}</div>
            <div className={classes.text}>
              Weakness: {pokemon?.weaknesses.join(' | ')}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
      background: '#2E2E3E',
      color: '#ffffff',
      '& .MuiDialogContent-root': {
        color: '#2E2E3E',
      },
      '& .MuiDialogTitle-root': {
        color: '#2E2E3E',
      },
    },
    text: {
      color: '#2E2E3E',
    },
  },
  { name: 'ListPage' }
);
