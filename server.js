const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')


// console.log(process.env.PORT)
const port = process.env.PORT || 3500;
// console.log(process.argv);



 //console.log(app.get('env'))  -  -- it will show in which branch you are
// console.log(process.env)



//connecting the moongoose server
// const DB = process.env.MONGO_URL;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(con=>{
    // console.log(con.connections)
    console.log('DB connection successfully')
}).catch(err => {
    console.error('DB connection error:', err);
});


// const testTour = new Tour({
//     name:"the1 ram",
//     // rating:4.9,
//     price:786

// })

// testTour.save().then(doc=>{
//     // console.log(doc)
// }).catch(err=>{
//     console.log(err)
// })



app.listen(port ,()=>{
    console.log(`app is running in the post ${port}`);
});