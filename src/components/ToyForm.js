import React, { useState } from "react";

function ToyForm({ toys, setToys }) {

  const initialFormValue = {
    name: '',
    image: '',
    likes: 0
  }

  const [newToy, setNewToy] = useState(initialFormValue)
  const { name, image } = newToy

  function handleChange(e) {
    const { name, value } = e.target
    setNewToy({...newToy, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    }).then(res => res.json())
    .then(addedToy => setToys([...toys, addedToy]))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
