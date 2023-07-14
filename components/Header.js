import React from 'react';
import { Flex ,Box,Spacer, Heading} from '@chakra-ui/react';
import Toggler from '../pages/Toggler';

const Header = () => {
  return (
    <>
     <Flex m={4} mt={8}>
        <Box  boxShadow={'dark-lg'} p={4}  rounded={'md'}
              borderWidth={"1px"} borderColor={"blue.500"} 
              _focus={{ boxShadow: "outline" }}
        >
          <Heading color={'teal.300'}>S-Visualizer</Heading>
        </Box>
        <Spacer />
        <Box p={4} >
          <Toggler/>
        </Box>
      </Flex>
    
    </>
  )
}

export default Header