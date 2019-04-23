//installed spotify, axios, moment, dotenv
var Spotify = require('node-spotify-api');
var Axios = require('axios');
var Moment = require('moment');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//user inputs
const command = process.argv[2];
const input = process.argv[3];


//add switch commands
switch (command){
  case "concert_this":
  concert_this();
  break;
  case "spotify_this":
  spotify_this();
  break;
  case "movie_this":
  movie_this();
  break;
  case "do_what_it_says":
  do_what_it_says();
}


//function for searching bandsInTown
function concert_this(){
  console.log("concert_this works")
  Axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`)
  .then(function(response){
    console.log(response.data.name)
  });
}

//function for searching spotify

function spotify_this(){
  console.log("spotify_this works")
  //make sure keys are accessible
  // console.log(spotify)

  //spotify search track
  spotify.search({ type: 'track', query: `${input}` }, function(err, data) {
    
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
}

//function for searching omdb

function movie_this(){
  console.log("movie_this works")
  Axios.get(`http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`)
  .then(function(response){
    console.log(response.data.Title)
  })
}

//function for do what it says
function do_what_it_says(){
  console.log("do_what_it_says works")
}