var Input = require("./liri");

var input = new Input();


var command = process.argv[2];
var specifics = process.argv.slice(3).join(" ")





if (command === "concert-this") {
    input.concertThis(specifics)
    console.log("concert functional")
};

if (command === "spotify-this-song") {
    if (specifics) {
        input.spotifySong(specifics)
    }

    else if (!specifics) {
        specifics = "The Sign";
        input.spotifySong(specifics)
    }
    console.log("spotify functional")
};

if (command === "movie-this") {

    if (specifics) {
        input.movieThis(specifics)
    }

    else if (!specifics) {
        specifics = "Mr. Nobody"
        input.movieThis(specifics)
        console.log("movie functional")
    }
};

if (command === "do-what-it-says") {
    input.doThis(specifics)
    console.log("this is functional")
};