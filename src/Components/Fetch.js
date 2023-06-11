const BASE_URL = "https://resource-ghibli-api-pursuit.onrender.com"
// const movieEnd = "https://resource-ghibli-api-pursuit.onrender.com/films"
// const peopleEnd = "https://resource-ghibli-api-pursuit.onrender.com/people"
// const locationsEnd = "https://resource-ghibli-api-pursuit.onrender.com/locations"

// Movies

//index/get all
export function getAllMovies() {
    return fetch(`${BASE_URL}/films`).then((response) => response.json())
}
//People
//Get All people
export function getAllPeople() {
    return fetch(`${BASE_URL}/people`).then((response) => response.json())
}
//Get One Person
export function getOnePerson(name) {
    return fetch(`${BASE_URL}/people?name=${name}`).then((response) => response.json())
}
//Locations
//get locations
export function getAllLocations(id) {
    return fetch(`${BASE_URL}/locations`).then((response) => response.json())
}