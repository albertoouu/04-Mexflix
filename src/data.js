
const novedades =["midnight sky","sputnik","ad astra","tenet","ready player one","songbird","infinite","the tomorrow war","2067","arrival"]
const recomendaciones = ["blade runner","mad max fury road","the matrix","interstellar","a.i.","back to the future","children of men","akira","alien"]
const clasicas = ["2001","metropolis","the incredible shrinking man","e.t.","Le voyage dans la lune","the thing","blade runner","Close Encounters of the Third Kind"]
const populares = ["avatar","star wars","avengers endgame","jurassic park","e.t.","independence day","men in black","armageddon"]
const tendencias = ["inception","ex machina","seconds", "dune","avatar","star wars","snowpiercer","gravity","war of the worlds"]
const maraton = ["the matrix","the matrix reloaded","the matrix revolutions","blade runner","blade runner 20490","back to the future part II","Back to the Future Part III"]

let renderMovies= (movieData) => {
  console.log(movieData)
  let catalogue = document.getElementById('catalogue')
  //let movieName = document.getElementById('movie-name')
  //let movieImg = document.getElementById('movie-img')
  for(let i =0; i<movieData.Search.length; i++){
    //movieName.innerHTML = movieData.Search[1].Title
    //movieImg.setAttribute('src', movieData.Search[1].Poster)
    console.log(movieData.Search[i].Poster)
    catalogue.innerHTML += `<h2>${movieData.Search[i].Title}</h2> <img src="${movieData.Search[i].Poster}" alt="movie-img" id="modificar con bootsrapp" />`
  }
}
let renderMovie= (movieData) => {
  console.log(movieData)
  let catalogue = document.getElementById('catalogue')
  //let movieName = document.getElementById('movie-name')
  //let movieImg = document.getElementById('movie-img')
    //movieName.innerHTML = movieData.Search[1].Title
    //movieImg.setAttribute('src', movieData.Search[1].Poster)
    console.log(movieData.Poster)
    catalogue.innerHTML += `<h2>${movieData.Title}</h2>
    <img src="${movieData.Poster}" alt="movie-img" id="movie-img" />
    <h4>Plot:</h4><p>${movieData.Plot}</p>
    <h4>Actors:</h4><p>${movieData.Actors}</p>
    <h4>Year:</h4><p>${movieData.Year}</p>`
}

export let searchMoviesFromOMDBAPI = (searchMovie) => {
  fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=ffc12cae&`)
 .then((response) => response.json())
 .then( (data) => renderMovies(data))
 .catch((error) => console.log(error))
 .finally(() => console.log("promesa resuelta"))
}
export let printMovieFromOMDBAPI = (searchMovie) => {
  fetch(`http://www.omdbapi.com/?t=${searchMovie}&apikey=ffc12cae`)
 .then((response) => response.json())
 .then( (data) => renderMovie(data))
 .catch((error) => console.log(error))
 .finally(() => console.log("promesa resuelta"))
}