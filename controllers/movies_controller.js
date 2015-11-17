var Movie = require('../models/movie.js')

//index action
function index(req, res) {
	Movie.find({})
		.limit(10)
		.sort({year: -1})
		.exec(function(err, movies) {
			if (err) throw err
			res.json(movies)
	})
}

//show action
function show(req, res) {
	Movie.find({_id: req.params.id}, function(err, movie) {
		if (err) throw err
		res.json(movie)
	})
}

module.exports = {
	index: index,
	show: show
}