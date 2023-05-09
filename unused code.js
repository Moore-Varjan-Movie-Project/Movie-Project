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



// // Allow users to add movies and ratings to json file
// const searchButton = $(`.submit`) // searchButton == "add movie button"
// searchButton.on('click', function (e) {
//     e.preventDefault()
//     const userInput = $(`.addMovieForm`).val()
//     // console.log('click')
//     console.log("userInput on add: ", userInput)
//
//     // addPost(addedMovieObject)
// });
// function handleAddMovie(newMovie) {
//     let addedMovieObject = {title: userInput, rating: userInput}
//     const url = 'https://golden-woozy-frog.glitch.me/movies';
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(addedMovieObject),
//     };
//     fetch(url, options)
//     fetch(url, options)
//         .then(response => console.log(response)) /* review was created successfully */
//         .catch(error => console.error(error)); /* handle errors */
//
// }
