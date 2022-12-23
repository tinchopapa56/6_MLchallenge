import React from "react";
// import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import { createRoot } from 'react-dom/client';

import App from "./app";
import theme from "./theme";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </>,
  // document.getElementById("root"),
);
