var Twitter = require('twitter');
var command = process.argv[2];

function myTweets(){
console.log(command);
}

if(command==="my-tweets"){
    myTweets();
}

function spotify() {
    console.log("song playing");
}

if (command === "spotify-this-song") {
    spotify();
}

function movie() {
    console.log("movie playing");
}

if (command === "movie-this") {
    movie();
}

