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



const postForm = document.querySelector('#postForm');

postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const post = Object.fromEntries(formData.entries());

    const addPost = new Promise((resolve, reject) => {
        fetch('https://golden-woozy-frog.glitch.me/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
    })
        .catch((error) => {
            console.error(`Error adding post: ${error.message}`);
        });
});


//removes loading message after time interval (when content displays)
setTimeout(function() {
    $("#loading").fadeOut().empty();
}, 3000);

