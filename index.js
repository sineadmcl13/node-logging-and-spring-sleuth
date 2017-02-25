/**
 * Created by sineadmclaughlin on 25/02/2017.
 */
var express = require('express');
var morgan = require('morgan');

var server = express();
var port = 8080;


server.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        '[TRACE-ID:' +req.header('X-B3-Traceid')+']',
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
}));

server.get('/', function (req, res) {
    res.send('System up and running');
});

server.listen(port, function () {
    console.log("Running server on port " + port);
});
