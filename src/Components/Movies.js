import React, { useEffect, useState }  from 'react'
import { useParams } from "react-router-dom";
import { getAllMovies } from './Fetch'

function Movies() {
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState(null)  
    const { id } = useParams();


    useEffect (()=> {
        getAllMovies(id)
        .then((movies)=> {
          setMovies(movies);
        //   console.log(movies)
        })
        .catch((error) => {
            console.log(error)
        })
      }, [id]);
    
      const handleSelectedMovie = (event) => {
        let title = event.target.value
        let selectedMovie = movies.find(movie => movie.title === title)
         setSelected(selectedMovie)
         console.log(selectedMovie)
      }

  return (
    <div className='movies '>
      <h1 className="text-center">SELECT A MOVIE</h1>
      <select className="form mx-auto col-3 col-md-3 col-lg-4 form-control-lg" onChange={handleSelectedMovie} >
        <option></option>
        {movies.map(movie => {
            return (
                <option key={movie.id}>{movie.title}</option>
            )
        })}
      </select>
      
      {
        selected ? (
            <div className='movie-box text-center bg-light m-5 p-3'>
              <h2>Title: {selected.title}</h2>
              <br />
              <p><strong>Release Date:</strong> {selected.release_date}</p>
              <p><strong>Description:</strong> {selected.description}</p>
            </div>
        ) : null
      }
    </div>
  )
}

export default Movies
