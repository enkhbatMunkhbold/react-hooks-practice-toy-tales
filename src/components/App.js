import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const[toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddLike(updateToy) {
    const updatedToys = toys.map(toy => toy.id === updateToy.id ? updateToy : toy)
    setToys(updatedToys)
  }

  function handleDeleteToy(deletedToyId) {
    const updatedToys = toys.filter(toy => toy.id !== deletedToyId)
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy} onAddLike={handleAddLike}/>
    </>
  );
}

export default App;
