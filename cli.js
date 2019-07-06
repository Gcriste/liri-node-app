var Input = require("./liri");

var input = new Input();


var command = process.argv[2];
var specifics = process.argv[3];




if (command === "concert-this"){
   input.concertThis(specifics)
   console.log("concert functional")
}

if (command === "spotify-this-song"){
    input.spotifySong(specifics)
    console.log("spotify functional")
}

if (command === "move-this"){
    input.movieThis(specifics)
    console.log("movie functional")
}

if (command === "do-what-it-says"){
    input.doThis(specifics)
    console.log("this is functional")
}
