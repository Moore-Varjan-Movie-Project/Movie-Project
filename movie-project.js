'use strict';

// Delay the execution of this code by 5 seconds
setTimeout(function() {
    // Code to load or display content goes here

    // Populate the movie cards with info from db.json (glitch)
function getMovies () {
return fetch('https://golden-woozy-frog.glitch.me/movies')
    .then(response => response.json())
    }

getMovies().then( movies => {

    let markup = "";
    movies.forEach( movie => {
        const title = movie.title;
        const rating = movie.rating;
        const director = movie.director;
        const genre = movie.genre;
        console.log("each movie on GET request: ", movie)

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
}, 3000)


// Allow users to add movies and ratings to json file
const searchButton = $(`.submit`) // searchButton == "add movie button"
searchButton.on('click', function (e) {
    e.preventDefault()
    const userInput = $(`.addMovieForm`).val()
    // console.log('click')
    console.log("userInput on add: ", userInput)
    // let addedMovieObject = {id: , title: userInput}
    // addPost(addedMovieObject)

});



// addPost(movieObj){
//  post request body: movieObj
// tosee updated movies: new GET request to see the latest movies
// }
// function addPost(title, content, posts) {
//     const newPost = {
//         title: title,
//         content: content
//     };
//     posts.push(newPost);
//     // Update the JSON file on the server
//     fetch('posts.json', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(posts)
//     });
// }
// const form = document.querySelector('addMovieForm');
// form.addEventListener('submit', event => {
//     event.preventDefault();
//     const titleInput = document.querySelector('#title');
//     const ratingInput = document.querySelector('#rating');
//     const title = titleInput.value;
//     const rating = contentTextarea.value;
//     addPost(title, rating, posts);
// });



// const reviewObj = {
//     title: ' ',
//     rating: ' ',
//     // director: ' ',
//     // genre: ' ',
// };
// const url = 'https://golden-woozy-frog.glitch.me/movies';
// const options = {
//
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };

// wrap this functionality .. in a function "handleAddMovie(newMovie)"
// fetch(url, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */


//removes loading message after time interval (when content displays)
setTimeout(function() {
    $("#loading").fadeOut().empty();
}, 3000);

