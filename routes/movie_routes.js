var moviesController 	= require('../controllers/movies_controller.js'),
	express				= require('express'),
	movieRoutes			= express.Router()

//set routes for /players
movieRoutes.route('/')
	.get(moviesController.index)

movieRoutes.route('/:id')
	.get(moviesController.show)

module.exports = movieRoutes