const API_KEY = "a9437d26869817948234e9003006b947";
const movieContainer = document.getElementById("movie");
const image_url = "https://image.tmdb.org/t/p/w500";

// const url = () =>
//     `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

const fetMovie = async () => {
    // This will fetch the data
    const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    );
    // convert to json
    const data = await res.json();

    // extract the movies from the data
    const movies = data.results;

    console.log(movies);

    // Use a loop to interate through the movies
    movies.forEach((movie) => {
        // Create a div for each movie to display the movie data
        const movieCard = document.createElement("a");

        movieCard.href = `./movie-detail.html?id=${movie.id}`;

        // Give some tailwindclasses to style each movie card
        movieCard.className =
            "w-[350px] h-[400px] rounded-[15px] border-5 border-white  px-4 relative overflow-hidden";

        // insert the data
        movieCard.innerHTML = `
            <img src="${
                image_url + movie.backdrop_path
            }" class="w-full h-full absolute left-0 top-0"/>
            <p class="text-white font-semibold">${movie.title} </p>

        `;

        movieContainer.append(movieCard);
    });
};

fetMovie();
