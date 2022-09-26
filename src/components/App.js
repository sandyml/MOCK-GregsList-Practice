import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const baseUrl = 'http://localhost:3001/listings'
 
function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, []) 

  const handleDeleting = (listing) => {
    const newList = listings.filter(listObj => listObj.id !== listing.id)
    setListings(newList)
    fetch(baseUrl + `${listing.id}`, {
      method: "DELETE"
    })
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} handleDeleting={handleDeleting}/>
    </div>
  );
}

export default App;
