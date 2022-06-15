import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import MyData from './components/MyData';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MyData />
    </ChakraProvider>
  );
}

export default App;
