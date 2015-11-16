var mongoose = require('mongoose')

//create our schema
var movieSchema = new mongoose.Schema({
	title: String,
	name: String,
	year: Number,
	rating: String,
	views: Number,
	running_time: String,
	genres: String
})

var Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie