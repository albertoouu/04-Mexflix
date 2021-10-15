let renderMovies= (movieData) => {
  console.log(movieData)
  let catalogue = document.getElementById('catalogue')
  //let movieName = document.getElementById('movie-name')
  let movieImg = document.getElementById('movie-img')
  for(let i =0; i<movieData.Search.length; i++){
    //movieName.innerHTML = movieData.Search[1].Title
    //movieImg.setAttribute('src', movieData.Search[1].Poster)
    console.log(movieData.Search[i].Poster)
    catalogue.innerHTML += `<h2>${movieData.Search[i].Title}</h2> <img src="${movieData.Search[i].Poster}" alt="movie-img" id="movie-img" />`
  }
}

export let getMovieFromOMDBAPI = (searchMovie) => {
  fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ffc12cae&s=${searchMovie}`)
 .then((response) => response.json())
 .then( (data) => renderMovies(data))
 .catch((error) => console.log(error))
 .finally(() => console.log("promesa resuelta"))
}

//data.Search[0].Title