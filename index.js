const express = require('express');
const app = express();
const request = require('request');
const async = require('async');
////////////////////////////////////////////////////////////


app.get('/', function(req, res) {
    console.log('Path: '+__dirname);
    res.sendFile(__dirname + '/index.html');
});


app.get('/api/football', function(req, res, next) {
    request({
      //uri: 'https://allsportsapi.com/api/football/?&met=Teams&teamId=2616&APIkey=3181aba25e0ededb5fa60883bd351da54315e3395abfbee8ab8cf6f768c63751',
      uri: 'https://allsportsapi.com/api/football/?met=Fixtures&APIkey=3181aba25e0ededb5fa60883bd351da54315e3395abfbee8ab8cf6f768c63751&from=2018-05-23&to=2019-03-01',
      /*qs: {
        api_key: '123456',
        query: 'World of Warcraft: Legion'
      }*/
    }).pipe(res);

    /*request(options, (error, response, body) => {
        var result = JSON.parse(body)
        var data = result.results;
        callback(null, data);
    });
    }, (err, results) => {
        
        res.status(200).json(results);
    }).done(function(response) {
        // do something with the response, e.g. isolate the id of a linked resource   
        console.log(response);
      }); 

app.get('api/football/?&met=Teams', (req, res) => {
    console.log('api');
    //res.setHeader('', '*');
    /*async.times(1, (i, callback) => {
    var options = {
       url:'https://allsportsapi.com/api/football/?&met=Teams&teamId=2616&APIkey=3181aba25e0ededb5fa60883bd351da54315e3395abfbee8ab8cf6f768c63751',
        //url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=ee6206f4b5d4aa4e800d0117d6724efb',
        
    }
    request(options, (error, response, body) => {
        var result = JSON.parse(body)
        var data = result.results;
        callback(null, data);
    });
    }, (err, results) => {
        
        res.status(200).json(results);
    }).done(function(response) {
        // do something with the response, e.g. isolate the id of a linked resource   
        console.log(response);
    });*/
});


//servidor
app.listen('8010', () => {
    console.log('Listening on port 8010');
})

//HTTP : POST

app.post('/api/football', (req, res) => {
   
        res.send("Ok post!");
    }
    );