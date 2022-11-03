import React from "react"
import Home from "./components/Home"
import { ChakraProvider } from '@chakra-ui/react'

function App() {



  return (
   <ChakraProvider>

      <Home />

    </ChakraProvider>
   )
}

export default App
