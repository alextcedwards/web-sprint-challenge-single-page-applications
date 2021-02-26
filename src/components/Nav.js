import React from "react";

export default function Nav(props) {
  return (
    <div className="navigation">
      <h1>Lambda Eats</h1>
      <nav>
        <button className="btn">Home</button>
        <button className="btn">Order</button>
      </nav>
      <div className="cover">
        <h2>Your favorite food, delivered while coding</h2>
        <button className="orderbtn">Order Now!</button>
      </div>
    </div>
  );
}
