var Movie = require('../models/movie.js')

//index action
function index(req, res) {
	Movie.find({}, function(err, movies) {
		if (err) throw err
		res.json(movies)
	})
}

module.exports = {
	index: index
}