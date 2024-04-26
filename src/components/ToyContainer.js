import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onAddLike }) {

  const renderToys = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onAddLike={onAddLike}/>
  })

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
