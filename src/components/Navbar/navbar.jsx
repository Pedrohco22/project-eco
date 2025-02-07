import React from "react";
import "./styles.css";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          {/* Logo */}
          <h1 className="logo">
            Shop<span>Love</span>
          </h1>

          {/* Hamburguer */}
          <button className="hamburger"></button>

          {/* Menu */}
          <ul className="nav-list">
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Produtos</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Conta</a>
            </li>
          </ul>

          {/* Busca */}
          <div className="nav-icon-container">
            <div className="search-container">
              <input type="search" placeholder="Buscar" />
              <IoIosSearch />
            </div>

            {/* Carrinho */}
            <button className="cart">
              <FaCartShopping />
              <div className="cart-count">0</div>
            </button>
          </div>
        </nav>
      </header>
    );
  }
}
