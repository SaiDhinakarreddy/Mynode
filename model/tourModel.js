const mongoose = require('mongoose')
const dotenv = require('dotenv')

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A tour must have the name'],
        unique:true,
        trim:true
    },  
    duration:{
        type:Number,
        required:[true,'A tour must have a duration']
    },
    maxGroupSize:{
        type:Number,
        required:[true,'A tour must have the max number of people']
    },
    difficulty:{
        type:String,
        required:[true,'A tour must have the difficulty']
    },
    ratingsAverage: {
        type:Number,
        default:0
        },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price: {
        type:Number,
        required:[true,'A tour must have the price']
    },
    priceDiscount:Number,
    summary: {
        type:String,
        trim:true,
        required:[true,'A tour must have a description']
        },
    description:{
        type:String,
        trim:true
    },
    imageCover: {
        type:String,
        required:[true,'A tour must have a cover image']
        },
    // images: [{
    //     type:String,
    //     required:[true,'A tour must have an image']
    //         }],
    images:[String],
    createdAt: {
        type:Date,
        default:Date.now
        },
    startDates:[Date]

})
// const Tour = mongoose.model('Tour',tourSchema);
// module.exports = Tour;
module.exports = mongoose.model('Tour',tourSchema);