//installed spotify, axios, moment, dotenv
var Spotify = require('node-spotify-api');
var Axios = require('axios');
var Moment = require('moment');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs")

//user inputs
let command = process.argv[2];
let input = process.argv[3];




//add switch commands
switch (command){
  case "help":
  instructions();
  case "concert-this":
  concert_this();
  break;
  case "spotify-this":
  spotify_this();
  break;
  case "movie-this":
  movie_this();
  break;
  case "do-what-it-says":
  do_what_it_says();
  break;
  default:
  return "try concert-this, spotify-this, movie-this, or do-what-it-says"
}

function instructions(){
  console.log("enter the name of the file, then concert-this, spotify-this, movie-this, or do-what-it-says, followed by your search term.")
}

//function for searching bandsInTown
function concert_this(){
  // console.log("concert_this works")
  Axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`)
  .then(function(response){
    
    // console.log(response.data[1]);
    console.log("__________________________")
    console.log(`Venue name: ${response.data[1].venue.name}`);
    console.log(`Venue city: ${response.data[1].venue.city}`);
    console.log(`Venue Region: ${response.data[1].venue.region}`);
    // console.log(`Show description: ${response.data[1].description}`);
    //use moment.js to format the date
    console.log(`Show date: ${Moment(response.data[1].datetime).format("MM-DD-YYYY")}`);
    console.log("__________________________")
  });
}

//function for searching spotify

function spotify_this(){
  // console.log("spotify_this works")
  //make sure keys are accessible
  // console.log(spotify)

  //spotify search track
  spotify.search({ 
    type: 'track', 
    query: `${input}` }, 
    function(err, data) {
    
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // console.log(data.tracks.items[0]); 
  console.log("__________________________")
  console.log(`Artist Name: ${data.tracks.items[0].artists[0].name}`);
  console.log(`Track Name: ${data.tracks.items[0].name}`);
  console.log(`Preview URL: ${data.tracks.items[0].preview_url}`);
  console.log(`Album Title: ${data.tracks.items[0].album.name}`)
  console.log("__________________________")
  });
}

//function for searching omdb

function movie_this(){
  

  // console.log("movie_this works")
  Axios.get(`http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`)
  .then(function(response){
    // console.log(response.data);

    //console.log required data
    console.log("__________________________")
    console.log(`Title: ${response.data.Title}`);
    console.log(`Year ${response.data.Year}`);
    console.log(`IMDB Rating: ${response.data.Ratings[0].Value}`);
    console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
    console.log(`Country: ${response.data.Country}`);
    console.log(`Language: ${response.data.Language}`);
    console.log(`Plot: ${response.data.Plot}`);
    console.log(`Actors: ${response.data.Actors}`)
    console.log("__________________________")
  })
  //set blank input to mr. nobody
  // if(input = ""){
  //   input === "mr nobody"
  // }
}

//function for do what it says
function do_what_it_says(){
  // console.log("do_what_it_says works");

  //have fs read the file
  fs.readFile("random.txt", "utf8", function(err, data){
    //throw error first if there is one
    if(err){
      return console.log(err)
    }
    else{
      //check that it read
      // console.log(data)
      //add it to an array like in unit-10-12
      var dataArr = data.split(", ")
      //check the array
      console.log(dataArr)
      //set variables to command and input and bring back functions from earlier
      let command = dataArr[0];
      let input = dataArr[1];
      console.log(input)
      spotify_this(input)
      //bringing back the func
      switch(command){
        case "spotify-this":
        spotify_this();
        // console.log('something works')
        break;
        case "movie-this":
        movie_this(input);
        break;
        case "concert-this":
        concert_this(input);
        break;
      }
    }
  })
}