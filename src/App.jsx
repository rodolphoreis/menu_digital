import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import { Provider } from "./Context";
import { pratos, acompanhamentos, bebidas } from "./data";

import "./styles.css";

export default function App() {
  return (
    <Provider>
      <Logo />
      <div className="menu">
        <Mains meals={pratos} />
        <aside className="aside">
          <Extras type="Acompanhamentos" items={acompanhamentos} />
          <Extras type="Bebidas" items={bebidas} />
        </aside>
      </div>
    </Provider>
  );
}
