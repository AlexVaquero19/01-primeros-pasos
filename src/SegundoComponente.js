import React from "react";

function SegundoComponente() {
  const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
  //const libros = [];

  return (
    <>
      <h1>Listado de Libros</h1>

      {libros.length > 0 ? (
        <ul>
          {libros.map((libro, index) => (
            <li key={index}>{libro}</li>
          ))}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </>
  );
}

export default SegundoComponente;
