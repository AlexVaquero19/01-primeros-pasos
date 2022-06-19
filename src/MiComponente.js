import React from "react";

function MiComponente() {
  const usuario = {
    nombre: "Victor",
    apellidos: "Gonzalez",
    web: "victor.com",
  };

  return (
    <>
      <h1>Hola Mundo</h1>

      <h3>Listado de Usuarios</h3>
      <ul>
        <li>
          Nombre: <strong>{usuario.nombre}</strong>
        </li>
        <li>
          Apellidos: <strong>{usuario.apellidos}</strong>
        </li>
        <li>
          Web: <strong>{usuario.web}</strong>
        </li>
      </ul>
    </>
  );
}

export default MiComponente;
