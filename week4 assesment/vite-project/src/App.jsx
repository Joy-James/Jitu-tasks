/*Task.
In this test you are expected to build a simple react search filter functionality to display,
 a filtered list based on the search value entered by the user on an input element.
The app should display all the items in the list when there is no text typed in the input. 
You can list anything e.g. fruits, movies, movie characters etc.*/

import React, { useState } from "react";
import  styles from "./App.css";
const App = (props) => {
  const people = [
    { name: "Ted Mosby", role_by: "Joy Njuguna", id: 1 },
    { name: "Marshall Erikson ", role_by: "Tony Mwangi", id: 2 },
    { name: "Robin Shobasky", role_by: "Lynette Njeri", id: 3 },
    { name: "Barney Stinson", role_by: "Gideon Kori", id: 4 },
    { name: "Lily Audrin", role_by: "William James", id: 5 }
  ];

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? people
    : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="Movie">
      <h1>How I Met Your Mother </h1>
      Filter persons:{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
      <h2>Movie Characters</h2>
      {filtered.map((person) => {
        return (
          <p key={person.id}>
            {person.name} - {person.role_by}
          </p>
        );
      })}
    </div>
  );
};

export default App;