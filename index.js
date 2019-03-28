const express = require('express');
const app = express();
const request = require('request');
const async = require('async');

app.get('/', function(req, res) {
    console.log('Path: '+__dirname);
    res.sendFile(__dirname + '/index.html');
});


app.get('/upcoming', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    async.times(2, (i, callback) => {
    var options = {
        url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=ee6206f4b5d4aa4e800d0117d6724efb',
        
        qs: {
            'language': 'en-US',
            'page': i+1,
            'region': 'us'
        },
    } 
    request(options, (error, response, body) => {
        var result = JSON.parse(body)
        var data = result.results;
        callback(null, data);
    });
    }, (err, results) => {
console.log("**********************************");
console.dir(results);

        res.json(results);
    });
})

app.listen('8010', () => {
    console.log('Listening on port 8010');
})


