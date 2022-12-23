import React from "react";
import {Box, BoxProps} from "@chakra-ui/react";

type Props = {
  color: string; //"red" | "orange" | "green" | "yellow" | "lightgreen"
}

const ColourBar = (props: Props) => {
  const {color} = props;
  const actualColor = `${color}.100`
//   const [size, colores] = active ? [3, `${color}.500`] : [2, `${color}.100`];

  return <Box bg={actualColor} flex={1} height={3} />;
};

export default ColourBar;
