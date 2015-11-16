var moviesController 	= require('../controllers/movies_controller.js'),
	express				= require('express'),
	movieRoutes			= express.Router()

//set routes for /players
movieRoutes.route('/')
	.get(moviesController.index)

module.exports = movieRoutes