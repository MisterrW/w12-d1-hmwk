var express = require('express');
var apiRouter = express.Router();

var Films = require('../client/src/models/films');
var films = Films();

//INDEX
apiRouter.get('/films', function(req, res) {
  res.json({ data: films});
});

//FILM BY INDEX
apiRouter.get('/films/:id', function(req, res) {
  res.json({ data: films[req.params.id]});
});

//CREATE
apiRouter.post('/films', function(req, res){
  films.push(req.body.film);
  res.json({ data: films });
})

//UPDATE
apiRouter.put('/films/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({ data: films });
})

//DELETE
apiRouter.delete('/films/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({ data: films });
})

module.exports = apiRouter;