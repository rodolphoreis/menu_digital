import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
  const openModal = (item) => {
    Swal.fire({
      imageUrl: item.imagem,
      imageWidth: 144,
      imageHeight: 250,
      imageAlt: item.nome,
      showCloseButton: false,
      showCancelButton: false,
      confirmButtonColor: "#a37443",
      confirmButtonText: "Fechar",
      confirmButtonClass: "custom-close-button",
      focusConfirm: false,
      didRender: () => {
        const confirmButton = document.querySelector(".swal2-confirm");
        if (confirmButton) {
          confirmButton.style.border = "none";
        }
      },
      width: "280px",
      height: "auto",
    });
  };

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
                onClick={() => openModal(item)}
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
