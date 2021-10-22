import {searchMoviesFromOMDBAPI} from "./data.js"// Se importa la funcion: searchMoviesFromOMDBAPI
import {printMovieFromOMDBAPI} from "./data.js"// Se importa la funcion: printMovieFromOMDBAPI
// Se inicializan los arreglos con las peliculas preseleccionadas
const ArrNovedades =["the midnight sky","sputnik","ad astra","tenet","ready player one","songbird","infinite","the tomorrow war","2067","arrival","The Invisible Man","Underwater","A Quiet Place",]
const ArrRecomendaciones = ["blade runner","mad max fury road","the matrix","interstellar","a.i.","back to the future","children of men","akira","alien","WALL·E","Edge of Tomorrow","Brazil","Soylent Green","videodrome","La mort en direct","Primer","Strange Days","Donnie Darko"]
const ArrClasicas = ["2001","metropolis","the incredible shrinking man","e.t.","Le voyage dans la lune","the thing","blade runner","Close Encounters of the Third Kind","How I Learned to Stop Worrying and Love the Bomb","Frankenstein","Stalker","Forbidden Planet"]
const ArrPopulares = ["avatar","star wars","avengers endgame","jurassic park","e.t.","independence day","men in black","armageddon","War for the Planet of the Apes","Aliens","Eternal Sunshine of the Spotless Mind"]
const ArrTendencias = ["inception","ex machina","seconds", "dune","avatar","star wars","snowpiercer","gravity","war of the worlds","The Martian","The Terminator","Terminator 2","Looper","the congress"]
const ArrMaraton = ["the matrix","the matrix reloaded","the matrix revolutions","blade runner","blade runner 2049","back to the future","back to the future part II","Back to the Future Part III","The Force Awakens","The Empire Strikes Back","Return of the Jedi","Star Wars Episode I The Phantom Menace","Solo: A Star Wars Story"]
document.getElementById('catalogue').hidden = true
document.getElementById('boton').hidden = true


//la funcion: printMovieFromOMDBAPI renderea las peliculas preseleccionadas
let printStartMovies = () => {
  let novedades = document.getElementById('novedades')//se llama por Id a el div="novedades"
  printMovieFromOMDBAPI(novedades,ArrNovedades)//se llama la funcion: printMovieFromOMDBAPI que toma como argumentos el arreglo de peliculas y el div donde se van a renderear

  let recomendaciones = document.getElementById('recomendaciones')//Se hace lo mismo con todas las secciones 
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
printStartMovies()//Se ejecuta la funcion: printMovieFromOMDBAPI

let searchMovie = () => {
  let searchValue = document.getElementById('searchInput2').value//toma el valor del input y lo utiliza como argumento de la funcion: earchMoviesFromOMDBAPI
  console.log(searchValue)
  document.getElementById('home').hidden = true//al mismo tiempo que se captura el input se oculta la pantalla home
  document.getElementById('catalogue').hidden = false//y se muestra el catalogo de peliculas buscadas
  document.getElementById('boton').hidden = false
  searchMoviesFromOMDBAPI(searchValue)
}

let buttonSearch = document.getElementById('searchButton2')
buttonSearch.addEventListener('click',searchMovie)//Se crea un addEventListener y si se 'clickea' el boton "searchButton2" se ejecuta la funcion searchMovie

let regresar = document.getElementById('comeBack')//addEventListener para controlar el DOM mediante el metodo .hidden 
regresar.addEventListener('click', function(){//Este evento se utiliza para "regresar a la pantalla home"
  document.getElementById('catalogue').hidden = true
  document.getElementById('home').hidden = false
  document.getElementById('boton').hidden = true
  document.getElementById('catalogue').innerHTML=''
})