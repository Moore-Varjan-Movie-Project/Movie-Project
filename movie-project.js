// (function() {
'use strict';

// Delay the execution of this code by 5 seconds
setTimeout(function () {
    getMovies();
}, 3000)

// Code to load or display content goes here

// Populate the movie cards with info from db.json (glitch)
async function getMovies() {
    $(".movieInfo").html("");
    return await fetch('https://golden-woozy-frog.glitch.me/movies')
        .then(response => response.json())


        .then(movies => {

            let markup = "";
            movies.forEach(movie => {
                const title = movie.title;
                const rating = movie.rating;
                const director = movie.director;
                const genre = movie.genre;
                const movieId = movie.id;
                // console.log("each movie on GET request: ", movie)

                markup +=
                    `<div class="card" id="${movieId}">
  <img class="card-img-top" src="img/film-g4afe793fb_1920.jpg" width="300" height = "300" alt="Card image cap">
  <div class="card-body">
    <h6 class="card-title">Title: ${title}</h6>
     <br>
    <h6 class="card-title">Rating: ${rating}</h6>
    <h6 class ="card-title">Genre: ${genre}</h6>
    <h6 class="card-title">Reference # ${movieId}</h6>
  </div>
  <button type="button" class="deleteBtn">Delete</button>
</div>`;
                $(".movieInfo").html(markup);
            });
            let movieOptions = ''
            $("#current-movie").html(" <option class=\"dropdown\" id=\"first-option\">Select Movie</option>")
            movies.forEach(movie => {
                movieOptions = `<option id="second-option">${movie.title}</option>`
                $("#current-movie").append(movieOptions);
            })
        })
}

//Add a new movie functionality
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
async function deleteMovie(id) {
    await $.ajax(apiEndpoint + '/' + id, {
        type: 'DELETE'
    }).done(function (data, status) {
        console.log(data);
        console.log(status);
    });
}

// Click function to delete movies
$(document).on('click', 'button.deleteBtn', async function (e) {
    e.preventDefault()
    let deleteMovieId = $(this).parent("div").attr("id");
    console.log(deleteMovieId);
    await deleteMovie(deleteMovieId)
    await getMovies();
})
// Edit movies function
document.querySelector('#current-movie').addEventListener("click", async function () {
    let dropdownValue = document.querySelector('#current-movie').value;
    console.log(dropdownValue);
    await fetch(apiEndpoint).then(response => response.json()).then(movies => {
        movies.forEach(({title, rating, genre, id}) => {
            if (dropdownValue === title) {
                document.querySelector('#movie-id').innerHTML = id
                document.querySelector('#movie-id').style.visibility = 'hidden'
                document.querySelector('#edited-title').value = dropdownValue
                document.querySelector('#edit-genre').value = genre
                document.querySelector('#edit-rating').value = rating
            }
        })
    });
})

//Edit movies to PUT function
document.querySelector('#edit-movie-btn').addEventListener("click", async function (e) {
    e.preventDefault();

    let dropdownIdValue = document.querySelector('#movie-id').innerHTML;
    console.log(dropdownIdValue);
    await fetch(apiEndpoint + "/" + dropdownIdValue, {
        method: "PUT",
        body: JSON.stringify({
            title: document.querySelector('#edited-title').value,
            rating: document.querySelector('#edit-rating').value,
            genre: document.querySelector('#edit-genre').value
        }),
        headers: {"Content-Type": "application/json"}
    }).catch(error => console.log(error));

    await getMovies();
})

//removes loading message after time interval (when content displays)
setTimeout(function () {
    $("#loading").fadeOut().empty();
}, 3000);






