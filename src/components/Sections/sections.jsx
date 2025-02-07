import React from "react";
import "./styles.css";

export class Sections extends React.Component {
  render() {
    return (
      <div className="all-content">
        <section className="suporte">
          <h3>SUPORTE</h3>
          <ul>
            <li>
              <a href="./">Podemos Ajudar?</a>
            </li>
            <li>
              <a href="./">Atendimento ao Cliente</a>
            </li>
            <li>
              <a href="./">Dúvidas Frequentes</a>
            </li>
            <li>
              <a href="./">Como Comprar</a>
            </li>
            <li>
              <a href="./">Entregas e Frete</a>
            </li>
            <li>
              <a href="./">Opções de Pagamento</a>
            </li>
          </ul>
        </section>

        <section className="informacao">
          <h3>INFORMAÇÃO CORPORATIVA</h3>
          <ul>
            <li>
              <a href="./">Sobre Nós</a>
            </li>
            <li>
              <a href="./">Carreiras</a>
            </li>
            <li>
              <a href="./">Imprensa</a>
            </li>
          </ul>
        </section>

        <section className="lojas">
          <h3>LOJAS</h3>
          <ul>
            <li>
              <a href="./">Localizador de Lojas</a>
            </li>
          </ul>
        </section>

        <section className="nosso-mundo">
          <h3>Nosso Mundo</h3>
          <ul>
            <li>
              <a href="./">Impacto</a>
            </li>
            <li>
              <a href="./">Pessoas</a>
            </li>
            <li>
              <a href="./">Planeta</a>
            </li>
          </ul>
        </section>

        <section className="produtos">
          <h3>PRODUTOS</h3>
          <ul>
            <li>
              <a href="./">Novidades</a>
            </li>
            <li>
              <a href="./">OUTLET</a>
            </li>
            <li>
              <a href="./">Black Friday</a>
            </li>
            <li>
              <a href="./">Cyber Monday</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
