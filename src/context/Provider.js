// src/context/Provider.js
import React, { useState } from "react";
import CarsContext from "./CarsContext";

const CARS_INITIAL = { red: false, blue: false, yellow: false };
const SIGNAL_INTIAL = {
  color: "red",
};
function Provider({ children }) {
  const [cars, setCars] = useState(CARS_INITIAL);
  const [signal, setSignal] = useState(SIGNAL_INTIAL);

  const moveCar = (car, side) => {
    setCars({ ...cars, [car]: side });
  };

  const changeSignal = (signalColor) => {
    setSignal({ ...signal, color: signalColor });
  };

  const context = {
    ...cars,
    ...signal,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>{children}</CarsContext.Provider>
  );
}

export default Provider;
