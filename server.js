//Import Express to craete the server
const express = require('express');

//Create an Express application
const app = express()

//Set the port number the server will run on
const port = 3000


//GET route for the homepage
app.get('/', (req, res) => {
  //Send a welcome message to the browser
  res.send('Welcome to Data Respresentation & Querying')
})

//Get route that returns a list of movies
app.get('/api/movies', (req, res) => {

  //Create an array containing three movie objects
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];

  //SEnd the movies as JSON with HTTP status code 201 (created)
    res.status(201).json({ myMovies });
});

// Import body-parser to read data sent in POST requests
const bodyParser = require('body-parser');

//Middleware that allows the server to read form data from req.body
app.use(bodyParser.urlencoded({ extended: true }));


//Get route that reads firstname and last name from Url querey parameters
//Example: /name?firstname=John&lastnaame=Smith
app.get('/name', (req, res) => {

  //Get firstname and lastname from url
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;

  //Send a greeting using the values from the Url
    res.send(`Hello ${firstname} ${lastname}`);
});

//POST route that receives firstname and lastname from data
app.post('/name', (req, res) => {

  //Get firstname and lastname from the request body
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

  //send a greeting using the submitted data
    res.send(`Hello ${firstname} ${lastname}`);
});

// Start the server a listen for requests on port 3000
app.listen(port, () => {
  //Display a message in the terminal when the server starts
  console.log(`Example app listening on port ${port}`)
});


//Get route that uses URL parameters
// Example: //hello/John/Smith
app.get('/hello/:name/:surname', (req, res) => {

  //Read the name and surname directly from the URL path
    const name = req.params.name;
    const surname = req.params.surname;

  // send a greeting sing the url parameters
    res.send(`Hello ${name}  ${surname}`);
});


//import the built-in path module to work with file paths
const path = require('path');

//GET route that sends a html file to the browser
app.get('/index', (req, res) => {

  // __dirname is the folder containing server.js
    // path.join creates the full path to index.html
    // sendFile sends that HTML file to the browser
    res.sendFile(path.join(__dirname, 'index.html'));
});

