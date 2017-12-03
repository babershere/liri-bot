var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Axios = require('axios');
var fs = require('fs');
var keys = require("./keys.js");
var command = process.argv[2];

var userSearch = "";
for (var i = 3; i < process.argv.length; i++) {
    userSearch += (" "+process.argv[i]);
}

var twitter = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

var spotify = new Spotify({
    id: keys.spotifyKeys.id,
    secret: keys.spotifyKeys.secret
});

function myTweets(){
    twitter.get('statuses/user_timeline/', {count: 20}, function (error, tweets, response) {
        if (error) throw error;
        for (var i = 0 ; i < tweets.length; i++) {
        console.log(tweets[i].text);
        console.log(tweets[i].created_at);
        // console.log(tweets.created_at);
        // console.log(response);  // Raw response object. 
        }
    });
// console.log(command);
}

function spotty() {
    spotify
        .search({ type: 'track', query: userSearch, limit: 1 })
        .then(function (response) {
            console.log(response.tracks.items[0].artists[0].name);
            console.log(response.tracks.items[0].name);
            console.log(response.tracks.items[0].artists[0].href);
            console.log(response.tracks.items[0].album.name);
        })
        .catch(function (err) {
            console.log(err);
        });

}

if(command==="my-tweets"){
    myTweets();
}


else if (command === "spotify-this-song") {
    spotty();
}

function movie() {
    console.log("movie playing");
}

if (command === "movie-this") {
    movie();
}

