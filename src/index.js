import {searchMoviesFromOMDBAPI} from "./data.js"
import {printMovieFromOMDBAPI} from "./data.js"

let searchMovie = () => {
  let searchValue = document.getElementById('searchInput').value
  console.log(searchValue)
  searchMoviesFromOMDBAPI(searchValue)
}
let printStartMovies = () => {
  let novedades = document.getElementById('novedades')
}

let buttonSearch = document.getElementById('searchButton')
buttonSearch.addEventListener('click',searchMovie)
