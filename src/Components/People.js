import React, { useEffect, useState }  from 'react'
// import { useParams } from "react-router-dom";
import { getAllPeople } from './Fetch'

export default function People() {

    const [allPeople, setAllPeople] = useState([]);
    const [search, setSearch] = useState("");
    const [personName, setPersonName] = useState(null)


    useEffect (()=> {
        getAllPeople()
        .then((people)=> {
            setAllPeople(people)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    function handleSearch(event) {
        event.preventDefault();
        const filterSearch = allPeople.find(
            (person) => person.name.toLowerCase() === search.trim() || person.name.toUpperCase() === search.trim() || person.name === search
        );
        filterSearch ? setPersonName(filterSearch) : setPersonName(0);

        setSearch("");
    }

    return (
        <div className="people">
            <section>
                <h2>Search for a Person</h2>
                <form onSubmit={handleSearch}>
                    <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    required
                    />
                    <button>Search</button>
                </form>
            </section>

            {personName === 0 ? (
                <p className="not-found">Not Found</p>
                ) : personName ? (
                <aside>
                    <h3>Name: {personName.name}</h3>
                    <span>Age:</span> {personName.age}
                    <br />
                    <span>Gender:</span> {personName.gender}
                    <br />
                    <span>Eye Color:</span> {personName.eye_color}
                    <br />
                    <span>Hair Color:</span> {personName.hair_color}
                </aside>
                ) : null}
        </div>
    );
}