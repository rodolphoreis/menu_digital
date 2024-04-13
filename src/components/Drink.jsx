import React from "react";

export default function Drink({ type, items }) {
  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          <div className="extras-name">{item.nome}</div>
          <strong className="extras-price">€{item.preço}</strong>
        </article>
      ))}
    </section>
  );
}