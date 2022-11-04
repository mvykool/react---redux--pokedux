import React from 'react'
import { Box, Text, chakra } from '@chakra-ui/react'
import Favorite from './Favorite'
import {useDispatch} from 'react-redux'
import { setFavorites } from '../actions'

const PokemonCard = ({pokemons, id, favorite}) => {

  const dispatch = useDispatch()


  const handleFavorites = () => {
    favorite == true
    dispatch(setFavorites({pokemonId: id}))
  }
  

  return (
   
   <Box display='flex' flexWrap='wrap' m={10} justifyContent='center'>
     {pokemons.map((pokemon)=> {
        return <Box border='1px' w='20%' borderRadius='15px' m={5} key={pokemon.name}>
                <Box>{<Favorite isFavorite={pokemon.favorite} onClick={handleFavorites} />}</Box>
                 <Text fontSize='25px' display='flex' justifyContent='center' m={5}>{pokemon.name}</Text>
                 <chakra.img w={60} m='5px auto' src={pokemon.sprites.front_default} alt='image' />
                 <chakra.p fontSize='25px' display='flex' justifyContent='center' m={5}>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</chakra.p>
                 <chakra.p fontSize='25px' display='flex' justifyContent='center' m={5}>{pokemon.types.map(type => type.type.name).join(', ')}</chakra.p>
             </Box>
         })}
   </Box>
   
  )
}

export default PokemonCard