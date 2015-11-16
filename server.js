var express		= require('express'),
	app			= express(),
	mongoose	= require('mongoose'),
	logger		= require('morgan'),
	bodyParser 	= require('body-parser'),
	port 		= process.env.PORT || 3000,
	movieRoutes = require('./routes/movie_routes.js')

//connect to mongo database
mongoose.connect('mongodb://localhost/top_movies')

//logs requests made to the app
app.use(logger('dev'))

//set the public folder as the static assets server folder
app.use(express.static('public'))

//route to display movies as json
app.use('/movies', movieRoutes)

//starts server
app.listen(port, function() {
	console.log('Listening on port', port)
})