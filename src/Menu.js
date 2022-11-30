import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/"> Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/usuarios"> Usuários</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/pessoas"> Pessoas</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/sobre"> Sobre</Link>{" "}
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
