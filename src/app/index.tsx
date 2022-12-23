import React from "react";
import {Container, Stack, Box, Text} from "@chakra-ui/react";

import Rutas from "./Rutas";
import Navbar from "./screens/Navbar";

const App: React.FC = () => {
  return (
    <Stack spacing={0}>

      <Navbar />

      <Box>
        <Rutas />
      </Box>

    </Stack>
  );
};

export default App;
