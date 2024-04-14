import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Home from "./components/Home";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Drink from "./components/Drink";
import Desserts from "./components/Desserts";
import Wine from "./components/Wine";
import { Provider } from "./Context";
import { pratos, acompanhamentos, bebidas, sobremesas, vinhos } from "./data";
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
            path="/sobremesas"
            element={<Desserts type="Sobremesas" items={sobremesas} />}
          />
          <Route
            path="/drink"
            element={<Drink type="Bebidas" items={bebidas} />}
          />
          <Route path="/wine" element={<Wine type="Vinhos" items={vinhos} />} />
        </Routes>
      </Router>
    </Provider>
  );
}
