import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import "./styles.css";

export class Main extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <main>
        <div className="section-content">
          <div className="products-title">
            <h3>Lista de Produtos</h3>
            <div className="underline"></div>
          </div>
        </div>

        <div className="products-list">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  products: PropTypes.array.isRequired,
};
