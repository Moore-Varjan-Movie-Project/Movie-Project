'use strict';

// Delay the execution of this code by 5 seconds
setTimeout(function() {
    // Code to load or display content goes here


function getMovies () {
return fetch('https://golden-woozy-frog.glitch.me/movies')
    .then(response => response.json())
    }

getMovies().then( movies => {

    let markup = "";
    movies.forEach( movie => {
        console.log(movie)
        const title = movie.title;
        const rating = movie.rating;
        const director = movie.director;
        const genre = movie.genre;

        markup +=
            `<div class="card">
  <img class="card-img-top" src="img/movieposter_en.jpg" alt="Card image cap">
  <div class="card-body">
    <h6 class="card-title">Title: ${title}</h6>
     <br>
    <h6 class="card-title">Rating: ${rating}</h6>
     <br>
    <h6 class="card-title">Genre: ${genre}</h6>
     <br>
    <h6 class="card-title">Director: ${director}</h6>
   
  </div>
</div>`;

        $(".movieInfo").html(markup);
    });
})
}, 5000)



// window.addEventListener('load', function() {
//     var loadingElement = document.getElementById("loading");
//     loadingElement.style.display = 'none';
// });
