import React from 'react'
import { Button } from '@chakra-ui/react'
import { StarIcon, CheckCircleIcon } from '@chakra-ui/icons'


const Favorite = ({isFavorite, onClick }) => {

    const IconSaved = isFavorite ? CheckCircleIcon : StarIcon;

  return (
  <Button onClick={onClick} bg='black'>{<IconSaved/>}</Button>
  )
}

export default Favorite