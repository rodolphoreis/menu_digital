import React from "react";
import Swal from "sweetalert2";

export default function Mains({ meals }) {
  const openModal = (meal) => {
    Swal.fire({
      imageUrl: meal.imagem,
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: meal.nome,
      showCloseButton: false,
      showCancelButton: false,
      confirmButtonColor: "#4a4a4a",
      confirmButtonText: "Fechar",
      focusConfirm: false,
      width: "300px",
      height: "auto",
    });
  };

  return (
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
  );
}
