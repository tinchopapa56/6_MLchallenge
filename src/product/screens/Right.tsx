import React, {useState} from "react"
import {Container, Heading, Link,Divider, Stack, VStack, Box, Flex, Text, Image, Icon, StackDivider, Select, Input, Button} from "@chakra-ui/react";

import {Product} from "../types";

import {BsTruck, BsTrophy, BsShieldCheck} from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import {FaMedal} from "react-icons/fa"
import {IoHeart, IoHeartOutline} from "react-icons/io5";

import ColourBar from "../components/ColourBar";
import PayMethods from "../components/PayMethod";
import Stars from "../components/Stars";

interface Props {
    product: Product;
}

const Right: React.FC<Props> = ({product}) => {
    const [fav, setFav] = useState(false)

    const IRELOJ= "https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg";
    const IMSJ="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg";

    const reviewsAmount = product.reviews.length;
    const reviewsRating =  product.reviews.reduce( (sum: number, review: any) => { return sum + review.rating}, 0) / reviewsAmount;
  return (
    <Stack spacing={4} direction="column" maxWidth={360} flex={0.5}>

            {/* COLUMNA DE PRECIO */}
            <Stack p={4} direction="column" color="grisecito" border=".5px lightgray solid" borderRadius={5}>
              <Stack direction="row" divider={<StackDivider />}>
                <Text fontSize="sm">{product.condition}</Text>
                <Text fontSize="sm">{product.sold_quantity} vendidos</Text>
              </Stack>
              <Stack direction="row">
                <Text as="h1" fontSize="2xl" fontWeight="bold" color="black" lineHeight={1.15}>{product.title}</Text>
                <Icon
                  as={fav ? IoHeart : IoHeartOutline}
                  color="secondary.500"
                  cursor="pointer"
                  height={7}
                  width={7}
                  onClick={() => setFav(!fav)}
                />
              </Stack>
              <Box>
                <Stars rating={reviewsRating} size={5}>
                  <Text color="blackAlpha.700" fontSize="sm" pl={2}>
                    {reviewsAmount === 1 ? "1 Opinión" : `${reviewsAmount} opiniones`}
                  </Text>
                </Stars>
              </Box>
                
              <Box pt={4} pb={4}>
                <Text as="h1" fontSize="4xl" color="black" fontWeight="200" lineHeight={1.15}>$ {product.base_price.toLocaleString("es-AR")}</Text>
                <Text as="span"> en 6x ${Math.floor(product.base_price / 6).toLocaleString("es-AR")}</Text>
                <Text  color="secondary.400">Ver los medios de pago</Text>
              </Box>
              
              <Stack direction="row">
                <Icon w={4} h={6} as={BsTruck} color="success.400" />
                <Box>
                  <Text  color="success.400">Llega gratis mañana</Text>
                  <Text fontSize="sm" color="grisecito">Solo en CABA y zonas de GBA</Text>
                  <Text fontSize="sm" color="grisecito">Comprando dentro de las próximas 12 h 54 min</Text>
                  <Text fontSize="sm" color="secondary.400">Ver más formas de entrega</Text>
                </Box>
              </Stack>
              <Stack direction="row">
                <Icon w={4} h={6} as={BsTruck} color="success.400" />
                <Box>
                  <Text color="success.400" >Devolucion Gratis</Text>
                  <Text fontSize="sm" color="grisecito" >Tenés 30 días desde que lo recibís.</Text>
                  <Text fontSize="sm" color="secondary.400" >Conocer más</Text>
                </Box>
              </Stack>

              <Text pb={4} pt={4} fontWeight="bold" color="blackAlpha.500">Stock disponible</Text>

              <Stack pb={4} direction="row" align="center" spacing={0}>
                <Text>Cantidad:</Text>
                <Select placeholder='1 Unidad' w="38%" variant="Flushed" color="secondary.500">
                  <option value='1unidad'>1 Unidad</option>
                  <option value='2unidad'>2 Unidades</option>
                  <option value='3unidad'>3 Unidades</option>
                  <option value="4unidad">4 Unidades</option>
                  <option value='5unidad'>5 Unidades</option>
                  <option value='6unidad'>6 Unidades</option>
                  <option value='mas6'> Mas de 6 Unidades</option>
                </Select>
              <Text fontSize="sm">({product.initial_quantity} disponibles)</Text>
              </Stack>

              <Button p={6} bg="secondary.500" color="white">Comprar ahora</Button>
              <Button p={6} color="secondary.500" bg="secondary.100" variant="ghost" mb={4}>Agregar al carrito</Button>
              
              <Stack p="0.75em 0" direction="row" spacing={2}>
                <Icon w={4} h={6} as={BsShieldCheck} />
                <Text fontSize="sm"><Text as="span" color= "secondary.400">Compra protegida</Text>,  recibí el producto que esperabas o te devolvemos tu dinero.</Text>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Icon w={4} h={6} as={BsTrophy} />
                <Text fontSize="sm"><Text as="span" color= "secondary.400">Mercado Puntos</Text>, Sumás 67 puntos.</Text>
              </Stack>
            
            </Stack>

            {/* INFO vendedor  */}
            <Stack spacing={6} p={4} direction="column" color="grisecito" border=".5px lightgray solid" borderRadius={5}>
              <Text fontSize="lg" color="black">Informción sobre el vendedor</Text>
              <Stack direction="row">
                <Icon w={4} h={6} as={GoLocation} />
                <Box>
                  <Text color="black">Ubicacion</Text>
                  <Text fontSize="xs">{product.seller_address.search_location.neighborhood.name},{product.seller_address.search_location.city.name} </Text>
                </Box>
              </Stack>
              <Stack direction="row">
                <Icon w={4} h={6} color="success.500" as={FaMedal} />
                  <Box>
                    <Text color="success.500">MercadoLíder Platinum</Text>
                    <Text fontSize="xs">Es uno de los mejores del sitio!</Text>
                  </Box>
              </Stack>
              {/*barra de colores*/}
              <Stack direction="row" align="center">
                {["red", "orange", "yellow", "green", "green"].map((color, i) => {
                  if(i==4){
                    return(<Box key={i} bg={`${color}.500`} height={3} w="20%" />)
                  }
                  return (<Box key={i} bg={`${color}.200`} height={2} w="20%" />)
                })}
              </Stack>
                <Stack direction="row" divider={<StackDivider />} fontSize="xs">
                  <VStack textAlign="center" spacing={0}>
                    <Text fontSize="xl">6167</Text>
                    <Text>Ventas en los últimos 60 días</Text>
                  </VStack>
                  <VStack textAlign="center" spacing={1}>
                    <Image src={IRELOJ} width={8} />
                    <Text>Brinda buena atencion</Text>
                  </VStack>
                  <VStack textAlign="center" spacing={1}>
                    <Image src={IMSJ} w={8}/>
                    <Text>Despacha sus productos a tiempo</Text>
                  </VStack>
                </Stack>
                <Text fontSize="sm" color="secondary.500">Ver más datos del vendedor</Text>
            </Stack>

                {/* garantia y etc */} 
              <Stack spacing={6} p={4} divider={<StackDivider />} direction="column" color="grisecito" border=".5px lightgray solid" borderRadius={5}>
                <Stack spacing={5}>
                  <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
                    Devolución gratis
                  </Heading>
                  <Text color="blackAlpha.600" fontSize="sm" lineHeight="normal">
                    Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!
                  </Text>
                  <Link fontSize="sm">Conocer más sobre devoluciones</Link>
                </Stack>

                <Stack spacing={5}>
                  <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
                    Garantía
                  </Heading>
                  <Text>Compra Protegida con Mercado Pago</Text>
                  <Text color="blackAlpha.600" fontSize="sm" lineHeight="normal">
                    Recibí el producto que esperabas o te devolvemos tu dinero
                  </Text>
                  <Link fontSize="sm">Conocer más sobre garantía</Link>
                </Stack>

                <PayMethods />
              </Stack>
            </Stack>
  );
};

export default Right;