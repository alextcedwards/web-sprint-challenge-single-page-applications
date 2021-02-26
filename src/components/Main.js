import React from "react";

import Pizza from "./Pizza";

import mac from "../images/mac.jpg";
import hawaii from "../images/hawaii.jpg";
import lobster from "../images/lobster.jpg";
import meat from "../images/meat.jpg";
import truffle from "../images/truffle.jpg";
import veggie from "../images/veggie.jpg";

export default function Main(props) {
  return (
    <div className="content-container">
      <h2>Food Delivery Right To Your Door!</h2>
      <div className="content">
        <Pizza img={mac} name={"Mac And Cheese"} price={"12.99"} />
        <Pizza img={hawaii} name={"Hawaiian"} price={"12.99"} />
        <Pizza img={lobster} name={"Lobster"} price={"19.99"} />
        <Pizza img={meat} name={"Meat Lovers"} price={"14.99"} />
        <Pizza img={truffle} name={"Truffle"} price={"19.99"} />
        <Pizza img={veggie} name={"Veggie Lovers"} price={"14.99"} />
      </div>
    </div>
  );
}
