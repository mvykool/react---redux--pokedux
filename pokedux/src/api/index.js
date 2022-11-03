import axios from 'axios';

export const getPokemon = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

  return data.results;
    } catch (error) {
      console.error(error.message)
     
    }
   
 
  }

export const getPokemonDetails = async (pokemon) =>{
   try {
    const res = await axios.get(pokemon.url);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
}