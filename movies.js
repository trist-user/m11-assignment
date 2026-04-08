// Define the Movie class

  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information

 
// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie

class Movie{
  constructor(title, cast, description, rating){
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating
    }
    updateRating(newRating){
      this.rating = newRating;
    }
    displayInfo(){
      let display = document.getElementById("movie-info");
      display.insertAdjacentHTML("beforeend", "Title:" + this.title + "<br>" + "Cast:" + this.cast + "<br>" + "Description:" + this.description + "<br> " + "rating:" + this.rating + "<br> ")
    }
  }

  let favMovie = new Movie ("Scream 2",["Neve Campbell", "David Arquette", "Courtney Cox", "Kevin Williamson", "Jamie Kennedy"], "horror movie about people with knives", 4.8);
  favMovie.displayInfo();
  
  let movies = [];
  movies.push(favMovie);
  console.log(movies);

  function updateMovieRating(title, newRating){
    let display = document.getElementById("movie-info");
    display.insertAdjacentHTML("beforeend", "<br>"+ "<strong> updated rating: </strong>" + "<br>")
    movies[0].updateRating(newRating);
  }
  updateMovieRating("Scream 2", 4.6)
  favMovie.displayInfo();
