import React from "react";
import "./styles.css";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="download-options">
          <p>Baixe a nossa aplicação</p>
          <p>Baixe a nossa aplicação para Android e IOS</p>
          <div>
            <img src="/images/app-store.png" alt="app store download" />
            <img src="/images/play-store.png" alt="play store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            Shop<span>Love</span>
          </h1>
          <p>
            Nosso objetivo é entregar o melhor serviço online para todos nossos
            clientes
          </p>
        </div>

        <div className="links">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <a href="./">Cupons</a>
            </li>
            <li>
              <a href="./">Blog Posts</a>
            </li>
            <li>
              <a href="./">Políticas</a>
            </li>
            <li>
              <a href="./">Torne-se Afiliado</a>
            </li>
          </ul>
        </div>

        <p className="copyright">
          Copyright 2030 - Pedro Oliveira - Todos os Direitos Reservados
        </p>
      </footer>
    );
  }
}
