import React from 'react'
import PropTypes from 'prop-types';

function TercerComponente({
  nombre="Alejandro", apellidos="Vaquero Toba", ficha
}) {

  return (
    <>
      <h1>Comunicación entre Componentes</h1>

      <ul>
        <li>
          {nombre}
        </li>
        <li>
          {apellidos}
        </li>
        <li>
          {ficha.altura}
        </li>
      </ul>
    </>
  );
}

TercerComponente.propTypes = {
  nombre: PropTypes.string,
  apellidos: PropTypes.string,
  ficha: PropTypes.object,
}

TercerComponente.defaultProps = {
  nombre: "Alejandro",
  apellidos: "Vaquero Toba",
  ficha: {
    altura: "1.91",
    grupo: "A",
    estado: "Bueno",
    alergias: "Fruta y Frutos Secos"
  }
}

export default TercerComponente;