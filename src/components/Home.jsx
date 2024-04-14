import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  const location = useLocation();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  if (location.pathname === "/") {
    return null;
  }

  return (
    <button onClick={handleGoBack} className="button_voltar">
      Voltar
    </button>
  );
};

const Home = () => {
  return (
    <div className="centered-buttons">
      <Link to="/mains" className="button">
        Pratos Principais
      </Link>
      <Link to="/extras" className="button">
        Acompanhamentos
      </Link>
      <Link to="/sobremesas" className="button">
        sobremesas
      </Link>
      <Link to="/drink" className="button">
        Bebidas
      </Link>
    </div>
  );
};

export default Home;
