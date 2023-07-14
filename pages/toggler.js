import { useColorMode, Button} from "@chakra-ui/react";
import { MoonIcon,SunIcon} from '@chakra-ui/icons';

const Toggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
  
        <Button onClick={toggleColorMode} size='lg'>
         {colorMode === 'light' ? <SunIcon boxSize={8} color={'teal.300'}  /> : <MoonIcon boxSize={8} color={'teal.300'}/>}
        </Button>
    
    </>
  )
};

export default Toggler;