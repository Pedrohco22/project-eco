import React from "react";
import "./styles.css";
import { FaChevronRight } from "react-icons/fa";

export class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className="announcement-content">
          <div className="left-side">
            <h2>Deixe Um Novo Estilo Para o Seu Trabalho!</h2>
            <p>
              Transforme cada clique em uma nova conquista! Ofertas imperdíveis,
              qualidade garantida e a melhor experiência de compra para você.
            </p>
            <a href="/" className="button">
              Ver Agora <FaChevronRight />
            </a>
          </div>
          <div className="right-side">
            <img src="/public/images/header-image.png" alt="products"></img>
          </div>
        </div>
      </aside>
    );
  }
}
