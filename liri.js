var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Axios = require('axios');
var fs = require('fs');
var keys = require("./keys.js");
var command = process.argv[2];

var sob = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

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

