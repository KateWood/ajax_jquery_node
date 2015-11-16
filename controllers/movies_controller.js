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

module.exports = {
	index: index
}