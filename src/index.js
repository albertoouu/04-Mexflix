import {searchMoviesFromOMDBAPI} from "./data.js"
import {printMovieFromOMDBAPI} from "./data.js"

const ArrNovedades =["the midnight sky","sputnik","ad astra","tenet","ready player one","songbird","infinite","the tomorrow war","2067","arrival"]
const ArrRecomendaciones = ["blade runner","mad max fury road","the matrix","interstellar","a.i.","back to the future","children of men","akira","alien"]
const ArrClasicas = ["2001","metropolis","the incredible shrinking man","e.t.","Le voyage dans la lune","the thing","blade runner","Close Encounters of the Third Kind"]
const ArrPopulares = ["avatar","star wars","avengers endgame","jurassic park","e.t.","independence day","men in black","armageddon"]
const ArrTendencias = ["inception","ex machina","seconds", "dune","avatar","star wars","snowpiercer","gravity","war of the worlds"]
const ArrMaraton = ["the matrix","the matrix reloaded","the matrix revolutions","blade runner","blade runner 2049","back to the future","back to the future part II","Back to the Future Part III"]
document.getElementById('catalogue').hidden = true
document.getElementById('boton').hidden = true



let printStartMovies = () => {
  let novedades = document.getElementById('novedades')
  printMovieFromOMDBAPI(novedades,ArrNovedades)

  let recomendaciones = document.getElementById('recomendaciones')
  printMovieFromOMDBAPI(recomendaciones,ArrRecomendaciones)

    let clasicas = document.getElementById('clasicas')
  printMovieFromOMDBAPI(clasicas,ArrClasicas)

    let populares = document.getElementById('populares')
  printMovieFromOMDBAPI(populares,ArrPopulares)

    let tendencias = document.getElementById('tendencias')
  printMovieFromOMDBAPI(tendencias,ArrTendencias)

    let maraton = document.getElementById('maraton')
  printMovieFromOMDBAPI(maraton,ArrMaraton)
}
printStartMovies()

let searchMovie = () => {
  let searchValue = document.getElementById('searchInput2').value
  console.log(searchValue)
  document.getElementById('home').hidden = true
  document.getElementById('catalogue').hidden = false
  document.getElementById('boton').hidden = false
  searchMoviesFromOMDBAPI(searchValue)
}

let buttonSearch = document.getElementById('searchButton2')
buttonSearch.addEventListener('click',searchMovie)

let regresar = document.getElementById('comeBack')
regresar.addEventListener('click', function(){
  document.getElementById('catalogue').hidden = true
  document.getElementById('home').hidden = false
  document.getElementById('boton').hidden = true
  document.getElementById('catalogue').innerHTML=''
})