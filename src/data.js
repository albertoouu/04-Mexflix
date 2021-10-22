let renderSearchMovies= (movieData) => {//se renderean las peliculas mediante el input que el usuario ingreso 
  console.log(movieData)
  let catalogue = document.getElementById('catalogue')
      let movieModalSearch = document.getElementById('movieModalSearch')
  //let movieName = document.getElementById('movie-name')
  //let movieImg = document.getElementById('movie-img')
  for(let i =0; i<movieData.Search.length; i++){
    //movieName.innerHTML = movieData.Search[1].Title
    //movieImg.setAttribute('src', movieData.Search[1].Poster)
    //console.log(movieData.Search[i].imdbID)

    //Se crea el codigo html necesario para los modales, en esta caso los modales de las peliculas buscadas
    movieModalSearch.innerHTML += `    <div
      class="modal fade"
      id=`+`${movieData.Search[i].imdbID}`+`
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">` + `${movieData.Search[i].Title}` +
            `</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>Type:</h5><p>${movieData.Search[i].Type}</p>
            <h5>Year:</h5><p>${movieData.Search[i].Year}</p> </div>
            <h5>imdbID:</h5><p>${movieData.Search[i].imdbID}</p>
            <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>`
    catalogue.innerHTML += `<a href="" data-bs-toggle="modal" data-bs-target=#` + `${movieData.Search[i].imdbID}` + `><img src="${movieData.Search[i].Poster}" alt="movie-img" class="img-fluid rounded mx-auto" /></a>`
  }//se renderean las peliculas buscadas en en el div="catalogue"
}
let renderStartMovies= (movieData,div) => {
    let movieModal = document.getElementById('movieModal')
    movieModal.innerHTML += `    <div
      class="modal fade"
      id=`+`${movieData.imdbID}`+`
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">` + `${movieData.Title}` +
            `</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>Plot:</h5><p>${movieData.Plot}</p>
            <h5>Actors:</h5><p>${movieData.Actors}</p>
            <h5>Year:</h5><p>${movieData.Year}</p> </div>
            <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>`
     div.innerHTML += `<a href="" data-bs-toggle="modal" data-bs-target=#` + `${movieData.imdbID}` + `><img src="${movieData.Poster}" alt="movie-img" class="img-fluid rounded mx-auto imagenes" /></a>`

}

export let searchMoviesFromOMDBAPI = (searchMovie) => {
  fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=ffc12cae&`)
 .then((response) => response.json())
 .then( (data) => renderSearchMovies(data))
 .catch((error) => console.log(error))
 .finally(() => console.log("promesa resuelta"))
}

export let printMovieFromOMDBAPI = (div,Arr) => {
  for (let i = 0; i<=(Arr.length-1);i++) {
    fetch(`https://www.omdbapi.com/?t=${Arr[i]}&apikey=ffc12cae`)
    .then((response) => response.json())
    .then( (data) => {
     // console.log(data)
      renderStartMovies(data,div)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("promesa resuelta"))
  }

}