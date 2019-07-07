# liri-node-app

1. This App is designed to search for three different options that will help give info to the user depending on if they want to search a band, a song or a movie
    * upcoming concert
        -The user inputs a band name and the "Bands in Town" api is called that shows:
            A. The name of the Venue 
            B. The location of the venue
            C. The date of the event

    * song information
        -The user inputs a song title and the "Spotify" api is called that shows: 
            A. The Artist name
            B. The Song Title
            C. A preview link
            D. The album name that the song is on

    * movie information
        -The user inputs a movie title and the OMDB api is called that shows: 
            A. The title of the movie   
            B. The year the movie came out
            C. The IMDB Rating
            D. The Rotten Tomatoes Rating
            E. The Country is made includes
            F. The language of the movie
            G. The plot of the movie
            H. The actors in the movie

2. The app is designed by first asking the user a question that will narrow doing the options of the app.
Depending on the answer to the question the app is run through specific functions
The app uses api calls to gather information and store it in the log.txt file
Once the user has input all the data, the app stops.

3. The user inputs movie band or song
    -specific functions are ran for each parameter
    -the user inputs the title of band, song or movie
    -the app runs through the data in the api's
    -the information is printed in the console and log.txt file

4.Link to screenshots: 

![concert-this](/Users/griffincriste/Desktop/liri-node-app/images/Screenshot1.png)

![movie-this](/Users/griffincriste/Desktop/liri-node-app/images/Screenshot2.png)

![spotify-this-song](/Users/griffincriste/Desktop/liri-node-app/images/Screenshot3.png)

![do-what-it-says](/Users/griffincriste/Desktop/liri-node-app/images/screenshot4.png)

![random txt](/Users/griffincriste/Desktop/liri-node-app/images/screenshot5.png)

![log txt](/Users/griffincriste/Desktop/liri-node-app/images/screenshot6.png)




5. link : https://gcriste.github.io/liri-node-app/



6. technologies
    Javascript, node, spotify-api, axios, omdb api, bands in town api, moment, dotenv


7. I am  the sole creator and developer of this app