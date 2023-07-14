'use client';

// import '@fontsource/raleway/400.css'
// import '@fontsource/open-sans/700.css'

import { ChakraProvider} from "@chakra-ui/react";
// import theme from '../pages/theme'

// import {} from 'react'
import Visualizer from "./Visualizer";

export default function Home() {
  return (
    
   <>
   <ChakraProvider >
   {/* theme={theme} */}
      
      <Visualizer/>
   </ChakraProvider>  
   </>
  )
}
