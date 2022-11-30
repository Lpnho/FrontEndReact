import React, { useState, useEffect } from "react"; // Importando Hooks
import UsuariosTabela from "./UsuariosTabela";
import "./Componente1.css"
export default function Componente1() {
  const [contador, setContador] = useState(0);
  // o argumento tipa a variavel de retorno
  const [dados, setDados] = useState([]);

  function incContador() {
    setContador(contador + 1);
  }
  const decrement = function decContador() {
    setContador((contador) => contador - 1);
  };
  useEffect(() => {
    console.log("componentDidUpdate");
  });
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp));
  }, [url]);

  return (
    <div className="component-div">
      {/* <div>Componente de Exemplo da aula dev</div>
      <p>Parágrafo de teste</p> */}
      {/* <button onClick={incContador}>Clique para Implementar</button> */}
      {/* <p>{contador}</p> */}
      {/* <button onClick={decrement}> Clique para Decrementar</button> */}

      {/* {dados.map((opt) => {
        return (
          <div key={opt.id}>
            <span> Nome: {opt.name} |</span>
            <span> Email: {opt.email} </span>
          </div>
        );
      })} */}

      <UsuariosTabela dados={dados} />
    </div>
  );
}
