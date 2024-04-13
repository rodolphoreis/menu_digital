import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Home from "./components/Home";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Drink from "./components/Drink";
import { Provider } from "./Context";
import { pratos, acompanhamentos, bebidas } from "./data";
import "./styles.css";

export default function App() {
  return (
    <Provider>
      <Router>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mains" element={<Mains meals={pratos} />} />
          <Route
            path="/extras"
            element={<Extras type="Acompanhamentos" items={acompanhamentos} />}
          />
          <Route
            path="/drink"
            element={<Drink type="Bebidas" items={bebidas} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}
