import React, { useEffect } from "react"
import { Box, chakra, Input, Spinner } from '@chakra-ui/react'
import PokemonCard from './PokemonCard'
import logo from '../assets/logo.svg'
import { setPokemons, setLoading } from '../actions'
import { getPokemon, getPokemonDetails } from "../api/index"
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {

  const pokemons = useSelector((state)=> state.pokemons);
  const loading = useSelector((state)=> state.loading);
  const dispatch = useDispatch();

  useEffect(()=>{
    async function fetchPokemon(){
      dispatch(setLoading(true));
      const pokemons = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemons.map((pokemon)=> getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonsDetailed));
      dispatch(setLoading(false));
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
     { loading ? <Spinner size='xl'display='flex' ml='50%' mt='18%' />: <PokemonCard pokemons={pokemons} /> }
   </Box>
  )
}



export default Home;