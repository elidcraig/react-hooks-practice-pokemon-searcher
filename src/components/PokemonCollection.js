import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokemonCards = pokemon.map(item => {
    return (<PokemonCard key={item.id} {...item}/>)
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
