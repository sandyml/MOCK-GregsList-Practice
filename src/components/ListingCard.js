import React, { useState } from "react";

function ListingCard({ listing, handleDeleting }) {
  const [liked, setLiked] = useState(false)

  const likeToggle = () => {
    setLiked(!liked)
    console.log('liked')
  }

  const handleDelete = () => {
    console.log('trashed', listing)
    handleDeleting(listing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={likeToggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={likeToggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
