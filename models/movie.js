const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genres')

const Movies = mongoose.model('Movies', new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5, 
      maxlength: 255
    },
    genre: {
        type: genreSchema, 
        required: true
    }, 
    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    }
}));

function validateMovie(movie){
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number().min(0).required()
  };
  return Joi.validate(movie, schema);
}

async function createMovie(name, authors) {
    const movie = new Movie({
      name, 
      authors
    }); 
    
    const result = await movie.save();
    console.log(result);
  }
  
  async function listMovies() { 
    const movies = await Movies.find();
    console.log(movies);
  }
  
  async function updateMovie(movieId){
    const movie = await Movie.update({_id: movieId}, {
      $unset: {
        'author': ''
      }
    });
  }
  
  async function addAuthor(courseId, author){
    const movie = await Movie.findById(movieId);
    movie.authors.push(author);
    movie.save();
  }
  
  async function removeAuthor(movieId, authorId){
    const movie = await Movie.findById(movieId);
    const author = movie.authors.id(movieId);
    author.remove();
    movie.save();
  }