var Input = require("./liri");
var inquirer = require("inquirer");
var input = new Input();

//import constructor and information from other file


//function starts the beginning of the app
// they can select either a movie, song or band/artist to search, they can also choose do what it says
var run = function () {

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to search a movie, a song or a band/artist? or click on 'do-what-it-says' to get a generated search from a text file' ",
            choices: ["movie", "song", "band/artist", "do-what-it-says"],
            name: "question"
        },
    ]).then(function (answer) {
        if (answer.question === "movie") {
            movie();
        }

        if (answer.question === "song") {
            song();
        }

        if (answer.question === "band/artist") {
            band();
        }

        if (answer.question === "do-what-it-says") {
            doIt();
        }
    })
};

//function for finding information about a band
var band = function () {

    inquirer.prompt([
        {
            type: "input",
            name: "answer",
            message: "Please type in 'concert-this' ",
        }
    ]).then(function (answer) {
        if (answer.answer === "concert-this") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "answer",
                    message: "Please type in the band you would like to search for the next upcoming live show.",
                }
            ]).then(function (answer) {
                var specifics = answer.answer;
                input.concertThis(specifics)
            })
        }
        else {
            console.log("I'm sorry you did not type 'concert-this' ")
        }
    })
};

//function for finding information about a song
var song = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "answer",
            message: "Please type in 'spotify-this-song' ",
        }
    ]).then(function (answer) {

        if (answer.answer === "spotify-this-song") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "answer",
                    message: "Please type in a song you would like to search.",
                }
            ]).then(function (answer) {

                var specifics = answer.answer;
                if (specifics) {
                    input.spotifySong(specifics)
                }

                else if (!specifics) {
                    specifics = "The Sign";
                    input.spotifySong(specifics)
                }
            })
        }
        else {
            console.log("I'm sorry you did not type 'spotify-this-song'")
        }
    })
};

//function for finding information about a movie
var movie = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "answer",
            message: "Please type in 'movie-this' "
        }
    ]).then(function (answer) {

        if (answer.answer === "movie-this") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "answer",
                    message: "Please type in the movie you would like to search"
                }
            ]).then(function (answer) {
                var specifics = answer.answer;
                if (specifics) {
                    input.movieThis(specifics)
                }
                else if (!specifics) {
                    specifics = "Mr. Nobody"
                    input.movieThis(specifics)
                }
            })
        }
        else {
            console.log("I'm sorry you did not type movie-this")
        }
    })
};


//function for do what it says 
var doIt = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "answer",
            message: "Please type in 'do-what-it-says' "
        }
    ]).then(function (answer) {
        if (answer.answer === "do-what-it-says") {
            var specifics = answer.answer
            input.doThis(specifics)
        }

        else {
            console.log("I'm sorry you did not type 'do-what-it-says' ")
        }
    })
};


//calls the beginning function
run();

