import React from 'react'

const PhotoGet = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/photo")
      .then((response) => { return response.json() })
      .then((json) => {return json });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Enviar</button>
    </form>
  )
}

export default PhotoGet
