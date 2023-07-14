// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
  config ,
  // fonts: {
  //   heading: `'Open Sans', sans-serif`,
  //   body: `'Raleway', sans-serif`,
  // },
})

export default theme