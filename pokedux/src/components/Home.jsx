import React, { useEffect } from "react"
import { Box, chakra, Input } from '@chakra-ui/react'
import PokemonCard from './PokemonCard'
import logo from '../assets/logo.svg'
import { setPokemons } from '../actions'
import { getPokemon, getPokemonDetails } from "../api/index"
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {

  const pokemons = useSelector((state)=> state.pokemons);
  const dispatch = useDispatch();

  useEffect(()=>{
    async function fetchPokemon(){
      const pokemons = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemons.map((pokemon)=> getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonsDetailed));
    } 
    
    fetchPokemon();
  },[])

  
return (
   <Box color='white'>
    <chakra.img w='200px' m='25px auto' src={logo} alt="pokedux" />
     <Box>
      <chakra.label htmlFor="searchId" display='flex' justifyContent='center' m={5} >Search:</chakra.label>
      <Input type="search" id='searchId' w='70%' display='flex' justifyContent='center' m='5px auto'/>
     </Box >
     <PokemonCard pokemons={pokemons}/>
   </Box>
  )
}



export default Home;