import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./styles.css";

export class Asidebottom extends React.Component {
  render() {
    return (
      <div className="aside-bottom">
        <div className="content">
          <div className="left-side">
            <h3>Smart Band 4</h3>
            <p>
              A Mi Smart Band 4 é uma pulseira inteligente da Xiaomi que oferece
              monitoramento de atividades físicas, como passos, calorias e
              frequência cardíaca. Ela possui uma tela colorida AMOLED,
              resistência à água até 50 metros, notificações de chamadas e
              mensagens, controle de música e bateria que dura até 20 dias. É
              ideal para quem busca funcionalidades básicas de smartwatch a um
              preço acessível.
            </p>
            <a href="/products" className="see-btn">
              <span>
                Ver Agora <FaChevronRight />
              </span>
            </a>
          </div>
          <div className="right-side">
            <img src="/images/exclusive.png" alt="Smart Band 4" />
          </div>
        </div>
      </div>
    );
  }
}
