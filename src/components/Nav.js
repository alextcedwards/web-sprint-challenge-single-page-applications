import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navigation">
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <button className="btn">Contact</button>
      </nav>
      <div className="cover">
        <h2>Your favorite food, delivered while coding</h2>
      </div>
    </div>
  );
}
