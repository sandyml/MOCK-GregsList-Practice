import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleting }) {

  const newListings = listings.map(list => <ListingCard key={list.id} listing={list} handleDeleting={handleDeleting} />)
  return (
    <main>
      <ul className="cards">
        {newListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
