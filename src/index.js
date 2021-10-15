import {getMovieFromOMDBAPI} from "./data.js"

let searchMovie = () => {
  let searchValue = document.getElementById('searchInput').value
  console.log(searchValue)
  getMovieFromOMDBAPI(searchValue)
}

let agregarDivs = () => {
  console.log("agregarDivs")
  let agregar = document.getElementById('catalogue')
  for(let i =0; i<5;i++){
  agregar.innerHTML += `<p>Hooollla</p> <h3> Es la interacion numero: ${i}</h3>`
  }
}

let buttonSearch = document.getElementById('searchButton')
buttonSearch.addEventListener('click',searchMovie)

