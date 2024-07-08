export const fetchPokemonData = async (id: string) => {
    const apiURL = "http://localhost:3000/";
    const response = await fetch(`${apiURL}/api/pokemons/${id}`);
    return response.json();
  };