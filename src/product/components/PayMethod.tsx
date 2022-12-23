import React from "react";
import {HStack, Icon, Stack, Text, Heading, Link} from "@chakra-ui/react";

import {RiVisaLine} from "react-icons/ri"
import {FaCcMastercard, FaMoneyBill} from "react-icons/fa"
// import {BiMoney} from "react-icons/bi"

type PayMethodProps = {
  title: string;
  description?: string;
  icons: any[];
  id: number;
};

const PayMethods = () => {
  const methods = [
    {
      title: "Tarjetas de crédito con Mercado Pago",
      description: "¡Cuotas sin interés con bancos seleccionados!",
      icons: [RiVisaLine, FaCcMastercard],
      id: 324
    },
    {title: "Tarjetas de débito",
    icons: [RiVisaLine, FaCcMastercard],
    id: 329
    },
    {title: "Efectivo",
     icons: [RiVisaLine, FaCcMastercard, RiVisaLine],
     id: 4324
    },
  ];

  return (
    <Stack spacing={5}>
      <Heading as="h3" fontSize="lg" pb={2} variant="thin_gray">
        Medios de pago
      </Heading>
      {methods.map((method) => (
        // <PayMethod key={i} {...method} />

        <Stack key={method.id} spacing={1}>
          <Text>{method.title}</Text>
          {method.description && (
            <Text color="blackAlpha.600" fontSize="sm" lineHeight="normal">
              {method.description}
            </Text>
          )}
          <HStack spacing={4}>
            {method.icons.map((icon, i) => (
              <Icon key={i} as={icon} color="secondary.700" height={7} width={7} />
            ))}
          </HStack>
        </Stack>

      ))}
      <Link fontSize="sm">Conocé otros medios de pago</Link>
    </Stack>
  );
};

export default PayMethods;
