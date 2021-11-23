import React from "react";
import "../App.css";

function Product(props) {
  return (
    <div
      className="product"
      onClick={() => {
        props.buyProduct(props.type);
      }}
    >
      <p>Click me to buy a {props.type}!</p>
    </div>
  );
}

export default Product;
