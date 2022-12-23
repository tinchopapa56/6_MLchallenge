import React from "react";
import {Container, Link, Stack, Box, Flex, Text, Image, Icon, StackDivider, Select, Input, Button} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs"

import { Product } from "../types";

interface Props {
  product: Product;
}
interface QyA {
  id: number,
  client: string,
  seller: string,
}

const QyA: React.FC<Props> = ({product}) => {
  // console.log(product.QyA)


  return (
    <>
      <Text pb={6} as="h1" fontWeight="400" fontSize="2xl">Preguntas y respuestas</Text>
      <Text fontWeight="bold" fontSize="lg">¿Que queres saber?</Text>
      <Stack direction="row" spacing={4}>
        <Link bg="secondary.100" p={2} borderRadius="5px" >Costo y tiempo de envio</Link>
        <Link bg="secondary.100" p={2} borderRadius="5px" >Devoluciones Gratis</Link>
        <Link bg="secondary.100" p={2} borderRadius="5px" >Medios de Pago y promociones</Link>
        <Link bg="secondary.100" p={2} borderRadius="5px" >Garantia</Link>
      </Stack>
      <Text pt={8} fontWeight="bold" fontSize="lg">Preguntale al vendedor</Text>
        <Stack pb={8} direction="row" spacing={4} align="center" wrap="wrap">
          <Input p={6} placeholder="Escribi tu pregunta..." /*flex={1.5}*/flex="75%" />
          <Button bg="secondary.500" color="white" p={6} /*flex={0.25}*/ flex="20%">Preguntar</Button>
          <Text pt={1} fontSize="xs">Tiempo aproximado de respuesta: 52 minutos</Text>
        </Stack>
        
      <Text pb={2} fontWeight="bold" fontSize="xl">Ultimas realizadas</Text>
      <Stack direction ="column" spacing={6}>
        {product.QyA.map((pregunta: QyA) => (
          <Box key={pregunta.id.toString()}>
          <Text fontSize="md" >{pregunta.client}</Text>
          <Stack direction="row" ml={2} mt={2}>
            <Icon as={BsArrowReturnRight} />
            <Text fontSize="md"  color="grisecito">{pregunta.seller}</Text>
          </Stack>
          
        </Box>
        ))}
      </Stack>
    </>
  );
};

export default QyA;



// {
//   client:"Sí realiza la compra ahora lo puedo ir a retirar en el transcurso del día?"
// seller: "Si la plataforma te da la opción de retiro si! Cualquier otra consulta estamos en contacto! Saludos!22/12/2022"
// },
// {
//   client:"Buen día! Consulta, tenes en stock para ofertar? Gracias"
// seller: "Hola, como estas? Contamos con stock disponible si! Cualquier otra consulta estamos en contacto! Saludos!22/12/2022"
// },
// {
//   client:"Buen día , tenés en azu, el envio esta incluido?"
// seller: "Hola, como esta,s? Sii te adjunto el link! https://articulo.mercadolibre.com.ar/MLA-1178352489-peluche-stitch-30cm-importado-stitch-hermosos-suaves-_JM Cualquier otra consulta estamos en contacto! Saludos!22/12/2022"
// },
// {
//   client:"Hola. Tenés en rosa?"
// seller: "Hola, como estas? Por el momento contamos con stock del publicado! Cualquier otra consulta estamos en contacto! Saludos!19/12/2022"
// },
// {
//   client:"Es una foto real?"
// seller: "Así es. Saludos17/12/2022"
// "},
// {
//   client:"Hola! Es el original de Disney?"
// seller: "Hola, como estas? es de MultiVentas AZ Cualquier otra consulta estamos en contacto! Saludos!16/12/2022"
// },
// {
//   client:"Buenas tardes, se puede retirar personalmente?"
// seller: "Hola, como estas? Una vez realizada la compra si!! Cualquier otra consulta estamos en contacto! Saludos!16/12/2022"
// },
// {
//   client:"En rosa lo tenés?"
// seller: "Hola, como estas? solo disponemos el azul- Cualquier otra consulta estamos en contacto! Saludos!15/12/2022"
// },
// {
//   client:"Si compro hoy, puedo retirar mañana?"
// seller: "Hola, como estas? Por supuesto si!! Cualquier otra consulta estamos en contacto! Saludos!14/12/2022"
// },
// {
//   client:"Hola! El local es en olivos? Como dice en las imagenes?"
// seller: "Hola, como estas? No contamos con local, somo se puede realizar retiros una vez realizada la compra! Cualquier otra consulta estamos en contacto! Saludos!14/12/2022"
// },
// {
//   client:"Otra consulta, tiene buenas terminaciones de costura? Es para una nena chiquita. Gracias"
// seller: "Así es, es de excelente calidad. Te recordamos que realizando tu compra ahora, la tenes mañana mismo. Cualquier otra consulta estamos en contacto! Saludos!11/12/2022"
// },
// {
//   client:"Buenas tardes, es tal cual la foto, con las patitas bordadas?"
// seller: "Hola, como estas? Si, es tal cual como se ve en las fotos. Aguardamos tu compra. Cualquier otra consulta estamos en contacto! Saludos!11/12/2022"
// }