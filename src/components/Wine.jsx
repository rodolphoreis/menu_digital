import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack} className="button_voltar">
      Voltar
    </button>
  );
};

const Wine = ({ type, items }) => {
  return (
    <div>
      <section className="extras">
        <h2 className="extras-heading">{type}</h2>
        {items.map((item, index) => (
          <article className="menu-item" key={index}>
            <div className="extras-name wine_btn">
              {item.nome}
              <button
                className="ver-imagem-button"
                onClick={() => openModal(meal)}
              >
                Ver Imagem
              </button>
            </div>

            <strong className="extras-price">€{item.preço}</strong>
            <p className="mains-description">{item.descrição}</p>
          </article>
        ))}
      </section>
      <div className="BackButton">
        <BackButton />
      </div>
    </div>
  );
};

export default Wine;
