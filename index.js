const express = require('express');
const app = express();
const request = require('request');
const async = require('async');
const { Client } = require('pg');//importa el cliente de la BD


const connectionData = { //abre la conexion con postgressql
    user: 'cristian',
    host: 'localhost',
    database: 'API',
    password: '123',
    port: 5432,
  }
  const client = new Client(connectionData)


       ///consulta////
  client.connect()
client.query('SELECT * FROM table')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })

////////////////////////////////////////////////////////////


app.get('/', function(req, res) {
    console.log('Path: '+__dirname);
    res.sendFile(__dirname + '/index.html');
});

app.get('/upcoming', (req, res) => {
    //res.setHeader('', '*');
    async.times(2, (i, callback) => {
    var options = {
        url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=ee6206f4b5d4aa4e800d0117d6724efb',
        
    } 
    request(options, (error, response, body) => {
        var result = JSON.parse(body)
        var data = result.results;
        callback(null, data);
    });
    }, (err, results) => {
        
        res.json(results);
    });
});

app.get('/auth/login', (req, res) => {
    return {};
    });//prueba login


//servidor
app.listen('8010', () => {
    console.log('Listening on port 8010');
})

//HTTP : POST

app.post('/upcoming', (req, res) => {
    /*const id = movies.length + 1;
    const { Id, original_language, original_title } = req.body;
    const newMovie = { ...req.body, id };
    if (id && Id && original_language && original_title) {
        movies.push(newMovie);
        console.log(movies);
        res.json(movies);*/
        res.send("Ok post!");
    }
    });

