import React from "react";
import {Link, Text, Box, Flex} from "@chakra-ui/react";

const HomeScreen: React.FC = () => {
  return (
    <Flex pt={32} justify="center" align="center" direction="column" >
      <Text textAlign="center">{`<HomeScreen />`}</Text>
      <br />
      <Link href="/productId">Ver página de detalle de producto</Link>
    </Flex>
  );
};

export default HomeScreen;
