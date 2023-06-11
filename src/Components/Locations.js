import React, { useEffect, useState }  from 'react'
// import { useParams } from "react-router-dom";
import { getAllLocations } from './Fetch'

// <----Components ----->
import LocationCard from "./LocationCard";


export default function Locations() {
  const [toggle, setToggle] = useState(false);
  const [allLocations, setAllLocations] = useState([]);
  const [sortToggle, setSortToggle] = useState(false);
//   const { id } = useParams();


  useEffect(() => {
    getAllLocations()
    .then((locations)=> {
        setAllLocations(locations)
    })
    .catch((error) => {
        console.log(error)
    })
}, []);

  function sortFunction(property) {
    let orderOfLocations = 1;

    if (property[0] === "-") {
      orderOfLocations = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (orderOfLocations === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  function handleSorting(event) {
    event.preventDefault();
    setSortToggle(!sortToggle);

    if (!toggle) {
      setToggle(!toggle);
    }

    if (event.target.id === "sort-name") {
      allLocations.sort(sortFunction("name"));
    } else if (event.target.id === "sort-climate") {
      allLocations.sort(sortFunction("climate"));
    } else if (event.target.id === "sort-terrain") {
      allLocations.sort(sortFunction("terrain"));
    }
  }

  return (
    <div className="locations">
      <section>
        <h2>List of Locations</h2>
        <button className="btn btn-light" onClick={() => setToggle(!toggle)}>
          {!toggle ? "Show Locations" : "Hide Locations"}
        </button>
        {toggle && (
          <div>
            <button 
            id="sort-name" 
            className="btn btn-light"             
            onClick={handleSorting}>
            Sort by Name
            </button>
            <button 
            id="sort-climate" 
            className="btn btn-light" 
            onClick={handleSorting}>
            Sort by Climate
            </button>
            <button 
            id="sort-terrain" 
            className="btn btn-light" 
            onClick={handleSorting}>
            Sort by Terrain
            </button>
          </div>
        )}
      </section>
      {toggle && <LocationCard allLocations={allLocations} />}
    </div>
  );
}
