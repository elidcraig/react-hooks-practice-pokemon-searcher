import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(resp => resp.json())
      .then(pokemon => setPokemonList(pokemon))
  }, [])

  const handleSearch = (e) => setSearchInput(e.target.value)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchInput={searchInput} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonList} searchInput={searchInput}/>
    </Container>
  );
}

export default PokemonPage;
