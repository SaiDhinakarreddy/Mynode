const express = require('express');
const app = express();
const morgan = require('morgan')
const tourRouter = require('./router/tourRoutes')




//middleware    
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())
// app.use(morgan('dev'))
// app.use(express.static(`${__dirname}/public`)) 
// --- if there is any html files then it will work byusing this

////////////////////////////////////////////////////

// app.get('/',(req,res)=>{
//     res.json({message:'Welcome to my API' , app:'natours '});
// })
// app.post('/',(req,res)=>{
//     res.send("it is the post method in the nodejs")
// })
////////////////////////////////////////////////////////////

app.use((res,req,next)=>{
    console.log("hello the form the middleware");
    next();
})


app.use((req,res,next)=>{
    req.requestTime= new Date().toISOString();
    next();
})

//////////////////////////////////////////////////////


// app.use((req, res, next) => { 
//     console.log('Request Type:', req.method)
//     next()
//   })

//   app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
//   })


//////////////////////////////////////////////////////



//all the apis

// app.get('/api/v1/tours',getAlltours)
// app.get('/api/v1/tours/:id', getTour)
// app.post('/api/v1/tours',createTour)
// app.patch('/api/v1/tours/:id',updateTour)
// app.delete('/api/v1/tours/:id',deleteTour)



///////////////////////////////////////// we can write the method in this way also....

// const tourRouter = express.Router();
app.use('/api/v1/user',tourRouter);

// tourRouter.route('/').get(getAlltours).post(createTour);
// tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);


////////////////////////////////////////////////////////////////////////////

// app.route('/api/v1/users').get(getAlltours).post(createTour);
// app.route('/api/v1/users/:id').get(getTour).patch(updateTour).delete(deleteTour)



// the other way for writing the apis
// app.route('/api/v1/tours').get(getAlltours).post(createTour);
// app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)




module.exports = app;


