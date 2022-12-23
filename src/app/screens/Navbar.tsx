import {AiOutlineSearch} from "react-icons/ai"
import {FiPrinter} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import {BsCart2} from "react-icons/bs"
import {Container, Stack, Box, Flex, Text, Image, Icon, StackDivider, Input} from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
    return(
    <Box bg="primary.500" boxShadow="sm" paddingY={2}>
        <Container maxWidth="container.xl" p={0}>
            <Stack>
        
                <Stack direction={{base:"column", md:"row"}} justify="space-between">
                <Stack flex={1} direction="row" spacing={12}>
                    <Image src={logo} objectFit="contain" />
                    <Stack
                    maxWidth={600}
                    w="100%"
                    alignItems="center"
                    bg="white"
                    boxShadow="sm"
                    borderRadius="sm"
                    p={2} 
                    divider={<StackDivider />} 
                    direction="row" 
                    >
                    <Input paddingX={2} placeholder="Buscar productos, marcas y más..." variant="unstyled" />
                    <Icon w={6} color="gray.400" as={AiOutlineSearch} />
                    </Stack>
                </Stack>
                <Stack alignItems="center" spacing={3} direction="row" color="blackAlpha.700">
                    <Icon w={9} h={9} as={FiPrinter} />
                    <Text _hover={{color: "secondary.500"}} fontSize="lg" fontWeight="500" >Comprá tu Point y QR a 189$</Text>
                </Stack>
                </Stack>

                <Stack color="rgba(51,51,51,.6)" direction="row" alignItems="center" justify="space-between">
                <Stack  direction="row" alignItems="center" spacing="4rem">
                    <Flex align="center" gap={1}>
                    <Icon w={6} h={6} color="gray.400" as={GoLocation} />
                    <Box>
                        <Text fontSize="xs" lineHeight="normal">Enviar a</Text>
                        <Text fontSize="md" lineHeight="normal">Capital Federal</Text>
                    </Box> 
                    </Flex>
                            
                    <Stack direction="row" spacing={5}>
                    <Text fontSize="sm" >Categorias</Text>
                    <Text fontSize="sm" >Ofertas</Text>
                    <Text fontSize="sm" >Historial</Text>
                    <Text fontSize="sm" >Supermercado</Text>
                    <Text fontSize="sm" >Moda</Text>
                    <Text fontSize="sm" >Vender</Text>
                    <Text fontSize="sm" >Ayuda</Text>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={4} color="blackAlpha.700" align="center">
                    <Text>Crea tu cuenta</Text>
                    <Text>Ingresa</Text>
                    <Text>Mis Compras</Text>
                    <Icon w={6} color="gray.400" as={BsCart2} />
                </Stack>
                
                
                </Stack>
            </Stack>
        </Container>  
      </Box>

        
    )
}

export default Navbar;