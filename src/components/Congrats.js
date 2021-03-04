import React from "react";

import dog from "../images/dog.gif";

export default function Congrats() {
  return (
    <div className="checkout">
      <div className="congrats">
        <h2>Congrats! Pizza is on its way!</h2>
      </div>

      <h3>Enjoy this Dog with Pizza</h3>
      <img src={dog} alt="" />
    </div>
  );
}
