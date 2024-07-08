
const express = require('express')
const tourRouter = express.Router();
const tourController = require('./../controllers/tour')


// tourRouter.param('id',(req,res,next,val)=>{
//     console.log(`the id  from the get method is ${val}`);
//     next();
// })

// Middleware function 1
const middlewareOne = (req, res, next) => {
    console.log('Middleware one');
    next();
};

// Middleware function 2
const middlewareTwo = (req, res, next) => {
    console.log('Middleware two');
    next();
};



tourRouter.route('/').get([middlewareTwo,middlewareOne,tourController.getAlltours]).post(tourController.createTour);
tourRouter.route('/:id').get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour);


module.exports = tourRouter;