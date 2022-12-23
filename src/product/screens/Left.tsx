import React, {useState, useEffect} from "react";
import {Container, Heading, Link,Divider, Stack, VStack, Box, Flex, Text, Image, Icon, StackDivider, Select, Input, Button} from "@chakra-ui/react";
import {Product, ProductPicture} from "../types";
import QyA from "../components/QyA";

// import HomeScreen from "./screens/Home";
interface Props {
    product: Product
}



const Left: React.FC<Props> = ({product}) => {

    const [selectedIMG, setSelectedIMG] = useState<ProductPicture>({
        id: product.pictures[0].id,
        url: product.pictures[0].url ,
    })

  return (
    <Stack pl={2} direction="column" flex={1} 
    divider={<Divider h="1px" bg="gray.200" w="100%" orientation="horizontal"  />}>

            {/* CARRUSEL */}
            <Stack pb={4} direction="row" align="flex-start">
              <Stack direction="column" spacing={2}>
                {product.pictures.map( (p) => { 
                  return (
                  <Image 
                    key={p.id} 
                    onClick={()=> setSelectedIMG({id: p.id, url: p.url})} 
                    src={p.url} 
                    border="1px solid" 
                    borderColor= { selectedIMG.id == p.id ? "secondary.500" : "gray.300"}
                    borderRadius={5}
                    p={1} w={50} />
                  )
                })}
              </Stack>
              <Flex h={600} flex={1.5} justify="center" align="center">
                <Image w={700} h={550} objectFit="contain" src={selectedIMG.url} />
              </Flex>
            </Stack>

            {/*DESCRIPCION* y QyA */}
            <Stack spacing={12}>
              
              <Text mt={8} as="h1" fontSize="2xl" fontWeight="bold">Descripción</Text>
              <Text mb={8} fontSize={20} color="#666"> ******** HOLA! SOMOS DR.CLICK ********
                Somos DR.CLICK, una empresa dedicada a la venta de productos tecnológicos y del hogar. Contamos con un equipo de trabajo dedicado a hacer que tu compra con nosotros sea la mejor experiencia! Este mismo se encargara de que el producto llegue de forma óptima a tus manos brindándoles así mismo la mejor atención.
                Cualquier pregunta no dudes en consultarnos! <br />
                _______________________________________________<br />

                PELUCHE STITCH 45cm de alto

                Excelente calidad y diseño Premiun
                Ojos bordados y relleno de vellón súper soft
                Muy suave y más hermoso que nunca!!

                Descripción:
                45cm de alto
                28cm de ancho

                ( EL MEJOR PRECIO DEL MERCADO)

                FOTOS REALES DEL PRODUCTO <br />
                ______________________________________________<br />

                PREGUNTAS FRECUENTES:

                • Tienen stock?

                Si, si la publicación esta activa significa que hay stock disponible para entrega inmediata, además podes ver cuantas unidades quedan disponibles.

                • Hacen envíos?

                SI, haciendo tu compra ANTES de las 14hs recibís tu pedido EN EL MISMO DIA, todo CABA y GBA. Luego de las 14hs saldrá en el recorrido al día siguiente.
                Tambien realizamos envíos a todo el país a través de mercado envíos, podes consultar los costos utilizando el simulador de envíos que se encuentra debajo del precio de la publicación.


                • Se puede retirar en persona?

                Si, se puede retirar en nuestras oficinas en La Lucina, Vicente López, Bs. As.

                • Otorgan Garantía?

                Si, todos nuestros productos cuentan con garantía de 1 mes, además tienen devolución gratuita. Resolvemos cualquier inquietud al instante, ante cualquier disconformidad no dude en contactarse al numero que le llega en el paquete del soporte técnico.

                • Medios de pago?

                Trabajamos con todos los medios de pago a través de Mercado Pago, pudiendo abonar con tarjetas de crédito, débito, efectivo y transferencia bancaria.

                • Hacen factura?

                Si, únicamente hacemos Factura C.

                --
                Estamos respondiendo consultas las 24hs. DR.CLICK
              </Text>

              {/* PREGUNTAS y RTAS */}
              <QyA product={product} />
            </Stack>

    </Stack>
  );
};

export default Left;
