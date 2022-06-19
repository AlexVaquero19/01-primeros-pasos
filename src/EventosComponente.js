import React from 'react'

function EventosComponente() {

  function handleClick(e, name) {
    alert(`Hola ${name}, has dado click en el elemento ${e.target.tagName}`);
  }

  function handleDoubleClick(e) {
    alert(`Has dado doble click en el elemento ${e.target.tagName}`);
  }

  function handleMouseEnter(e, action) {
    console.log(`Has ${action} en la caja`);
  }

  function handleMouseLeave(e, action) {
    console.log(`Has ${action} de la caja`);
  }

  const handelOnFocus = e => {
    console.log("Estás dentro del input, escribe tu nombre");
  }

  const handelOnBlur = e => {
    console.log("Estás fuera del input");
  }

  return (
    <>
      <h1>Eventos React</h1>

      {/*Evento Click*/}
      <button onClick={e => handleClick(e, "Alejandro")}>Púlsame!</button>

      {/*Evento Doble Click*/}
      <button onDoubleClick={ handleDoubleClick }>Púlsame dos veces!</button>

      {/*Evento Mouse Enter y Mouse Leave*/}
      <div className="caja"
        onMouseEnter={e => handleMouseEnter(e, "entrado")}
        onMouseLeave={e => handleMouseLeave(e, "salido")} >Estás en una Caja</div>

      {/*Evento Focus*/}
      <p>
        <input type="text" onFocus={ handelOnFocus } onBlur={handelOnBlur} placeholder="Escribe algo" />
      </p>
    </>
  )
}

export default EventosComponente;