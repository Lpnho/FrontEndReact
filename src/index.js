import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Componente1 from "./Componente1";
import Sobre from "./Sobre";
import Menu from "./Menu";
import Usuarios from "./Usuarios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/usuarios" element={<Componente1 />}></Route>
      <Route path="/sobre" element={<Sobre />}></Route>
      <Route path="/pessoas" element={<Usuarios/>}></Route>
    </Routes>
  </BrowserRouter>
);
