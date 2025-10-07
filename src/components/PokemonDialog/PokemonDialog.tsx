import { useParams, useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useQuery } from '@apollo/client/react';
import gql from 'graphql-tag';


const POKEMON_QUERY = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const PokemonDialog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(POKEMON_QUERY, {
    variables: { id },
  });

  const handleClose = () => {
    navigate(-1); // close modal, go back
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>{data?.pokemon.name}</DialogTitle>
      <DialogContent>
        {loading ? (
          'Loading...'
        ) : error ? (
          'Error!'
        ) : (
          <>
            <img src={data.pokemon.image} alt={data.pokemon.name} />
            <div>Number: {data.pokemon.number}</div>
            <div>Type: {data.pokemon.types.join(', ')}</div>
            {/* Add other fields as needed */}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
