// (function() {
'use strict';

// Delay the execution of this code by 5 seconds
setTimeout(function () {
    getMovies();
}, 2000)

// Code to load or display content goes here

// Populate the movie cards with info from db.json (glitch)
function getMovies() {
    $(".movieInfo").html("");
    return fetch('https://golden-woozy-frog.glitch.me/movies')
        .then(response => response.json())


        .then(movies => {

            let markup = "";
            movies.forEach(movie => {
                const title = movie.title;
                const rating = movie.rating;
                const director = movie.director;
                const genre = movie.genre;
                const movieId = movie.id;
                console.log("each movie on GET request: ", movie)

                markup +=
                    `<div class="card" id="${movieId}">
  <img class="card-img-top" src="img/movieposter_en.jpg" alt="Card image cap">
  <div class="card-body">
    <h6 class="card-title">Title: ${title}</h6>
     <br>
    <h6 class="card-title">Rating: ${rating}</h6>
    <h6 class="card-title">Reference # ${movieId}</h6>
  </div>
  <button type="button" class="editBtn">Edit</button>
  <button type="button" class="deleteBtn">Delete</button>
</div>`;
                $(".movieInfo").html(markup);
            });
        })
}


const postForm = document.querySelector('#postForm');

postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const post = Object.fromEntries(formData.entries());

    const addPost = new Promise((resolve, reject) => {
        fetch('https://golden-woozy-frog.glitch.me/movies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });

    addPost.then((data) => {
        console.log(`Post added: ${JSON.stringify(data)}`);
        // Reset form after successful submission
        postForm.reset();
        //new get request
        getMovies();
    })
        .catch((error) => {
            console.error(`Error adding post: ${error.message}`);
        });
});

// Set the API endpoint URL and post ID
const apiEndpoint = 'https://golden-woozy-frog.glitch.me/movies';

// Create a Promise to send the DELETE request to the API endpoint
function deleteMovie(id) {
    $.ajax(apiEndpoint + '/' + id, {
        type: 'DELETE'
    }).done(function (data, status) {
        console.log(data);
        console.log(status);
    });
}

// Click function to delete movies
$(document).on('click', 'button.deleteBtn', function (e) {
    let deleteMovieId = $(this).parent("div").attr("id");
    console.log(deleteMovieId);
    deleteMovie(deleteMovieId)
    getMovies();
})

// Click function to edit movies

// function deleteMovie(id) {
//     $.ajax(apiEndpoint + '/' + id, {
//         type: 'DELETE'
//     }).done(function (data, status) {
//         console.log(data);
//         console.log(status);
//     });
// }
// const postForm = document.querySelector('#postForm');

    let dropdownIdValue = getMovies();
function editMovie(id) {
    $.ajax(apiEndpoint + '/' + id, {
        type: "PUT",
        body: JSON.stringify({
            title: document.querySelector('#edited-title').value,
            rating: document.querySelector('#edit-rating').value,
            genre: document.querySelector('#edit-genre').value
        }),
        headers: {"Content-Type": "application/json"}
    }).done(function (data, status) {
        console.log(data);
        console.log(status);
    });
}

$(document).on('click', 'button.editBtn', function (e) {
    let editMovieId = $(this).parent("div").attr("id");
    console.log(editMovieId);
    editMovie(editMovieId)
    getMovies();
})


//removes loading message after time interval (when content displays)
setTimeout(function () {
    $("#loading").fadeOut().empty();
}, 3000);





