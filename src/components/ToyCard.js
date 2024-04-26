import React, { useState } from "react";

function ToyCard({ toy, onDeleteToy, onAddLike }) {
  
  const { id, name, image, likes } = toy
  const [likesCount, setLikesCount] = useState(likes || 0)

  function handleLikeClick() {
    setLikesCount(prevNewLikes => prevNewLikes + 1)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: likesCount})
    }).then(res => res.json())
    .then(updatedToy => onAddLike(updatedToy))
  }

  function handleDonate() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(() => onDeleteToy(id))
  }

  return (
    <div className="card">
      <h2>{ name }</h2>
      <img
        src={ image }
        alt={ name }
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
