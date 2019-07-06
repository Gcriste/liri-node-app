require("dotenv").config();

// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var fs = require("fs");




var Input = function () {

    this.concertThis = function (band) {
        var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
        axios.get(URL).then(function (response) {
            var results = response.data[0];

            var showData = [
                "Name of Venue: " + results.venue.name,
                "Venue Location: " + results.venue.city + results.venue.country,
                "Date of Event: " + results.datetime
              ].join("\n\n");
              console.log(showData)
        });
      
    };

    this.spotifySong = function () {
        console.log("spotify functional")
    }

    this.movieThis = function () {
        console.log("movie functional")
    }

    this.doThis = function () {
        console.log("this is functional")
    }

}

module.exports = Input;