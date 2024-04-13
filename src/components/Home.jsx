import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="centered-buttons">
      <Link to="/mains" className="button">
        Pratos Principais
      </Link>
      <Link to="/extras" className="button">
        Acompanhamentos
      </Link>
      <Link to="/drink" className="button">
        Bebidas
      </Link>
    </div>
  );
};

export default Home;
