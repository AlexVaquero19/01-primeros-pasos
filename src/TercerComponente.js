import React from 'react'
import PropTypes from 'prop-types';

function TercerComponente({nombre, apellidos, ficha}) {

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

export default TercerComponente;