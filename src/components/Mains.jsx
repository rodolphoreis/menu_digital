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

export default function Mains({ meals }) {
  const openModal = (meal) => {
    Swal.fire({
      imageUrl: meal.imagem,
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: meal.nome,
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
    <>
      <section className="mains">
        {meals.map((meal, index) => (
          <article className="menu-item" key={index}>
            <div className="meal-info">
              <h3 className="mains-name">{meal.nome}</h3>
              <button
                className="ver-imagem-button"
                onClick={() => openModal(meal)}
              >
                Ver Imagem
              </button>
            </div>
            <strong className="mains-price">€{meal.preço}</strong>
            <p className="mains-description">{meal.descrição}</p>
          </article>
        ))}
      </section>
      <div className="BackButton">
        <BackButton />
      </div>
    </>
  );
}
