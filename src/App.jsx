import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import PetGulp from "./PetGulp/PetGulp";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <PetGulp />
    </ChakraProvider>
  );
};

export default App;
