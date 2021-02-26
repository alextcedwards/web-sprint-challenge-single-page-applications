import React from "react";

export default function Pizza(props) {
  const { img, price, name } = props;

  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <div className="pizzacont">
        <h4>${price}</h4>
        <button>Order</button>
      </div>
    </div>
  );
}
