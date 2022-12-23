import React from "react";
import {Routes, Route,} from "react-router-dom";
import DetailsScreen from "../product/screens/Details";

import mock from "../product/mock"
import { Product } from "../product/types";

import HomeScreen from "./screens/Home";

const Rutas: React.FC = () => {

  return (
    <Routes>
      <Route element={<HomeScreen />} path="/" />
      <Route element={<DetailsScreen product={mock.product} />} path="/:product" />
      {/* <Redirect to="/" /> */}
    </Routes>
  );
};

export default Rutas;
