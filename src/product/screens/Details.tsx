import React, {useState, useEffect} from "react";
import {Container, Heading, Link,Divider, Stack, VStack, Box, Flex, Text, Image, Icon, StackDivider, Select, Input, Button} from "@chakra-ui/react";

import {Product} from "../types";

import {BsTruck, BsTrophy, BsShieldCheck} from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import {FaMedal} from "react-icons/fa"
import {IoHeart, IoHeartOutline} from "react-icons/io5";

import ColourBar from "../components/ColourBar";
import PayMethods from "../components/PayMethod";
import Stars from "../components/Stars";
import Left from "./Left";
import Right from "./Right";



interface Props {
  product: Product;
}

  const DetailsScreen: React.FC<Props> = ({product}) => {
    
    
  return (
    <Box bg="rgba(0,0,0,.1)" p={4}>
      <Container maxWidth="container.xl" p={0} fontSize="sm">
        <Text mb={8}> También puede interesarte: peluches de sonic - peluches - squishmallows - peluches de stitch - peluche de stich</Text>
        <Stack mb={2} direction="row" justify="space-between">
          <Text color="secondary.400"><span style={{color: "black"}}>Volver al listado</span> | Juegos y Jugetes | Peluches</Text>
          <Text color="secondary.400">Compartir | Vender uno igual</Text>
        </Stack>
      </Container>

      {/* WHITE BOX */}

      <Container p={4} bg="white" maxWidth="container.xl" borderRadius="5px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Stack direction="row" spacing={12} >

          {/* LEFT PART (carrusel, preguntas, descripicon) */}
          <Left product={product}/>
          
          {/* RightT PART (carrusel, preguntas, descripicon) */}
          <Right product={product}/>

          </Stack>
          

        {/* </Stack> */}

      </Container>
    </Box>
  );
};

export default DetailsScreen;


