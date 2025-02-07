import PropTypes from "prop-types";
import { FaMoneyBill } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./styles.css";

export default function Product({ image, name, price }) {
  Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">
        {price} <span>R$</span>
      </p>

      <div className="buttons">
        <a href="/products/123/checkout" className="btn-icon">
          <span>Comprar Agora</span>
          <FaMoneyBill />
        </a>
      </div>

      <button className="add-to-cart-btn">
        <span>Adicionar ao carrinho</span>
        <FaCartShopping />
      </button>
    </div>
  );
}
