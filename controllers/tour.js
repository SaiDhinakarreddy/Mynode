// const fs = require('fs');
const Tour = require('./../model/tourModel')


//////////////////////////////////////////////////////////

 // reading the json format form the tour-simple.json
// const tours = JSON.parse(
//     // fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)

// )
//////////////////////////////////////////////////////////



// exports.getAlltours = (req,res)=>{
//     console.log(req.requestTime)
//     res.status(200).json({
//         status:'success',
//         time:req.requestTime,
//         results: tours.length,
//         data: {
//             tours 
//         }
//     });
// }




exports.getAlltours = async (req,res)=>{
    try{
        console.log(req.query);
        const tours =  await Tour.find(req.query)

    // 1.Method  
        //    const tours =  await Tour.find({
        //     difficulty: "easy",
        //     ratingsAverage: 4.5
        //    })

    //2.Method
    // const tours = await Tour.find().where('difficulty').equals('easy').where('ratingsAverage').equals(4.5)

       res.status(200).json({
        status:'success',
        data:{
            list : tours
        }
       })
    } catch(err){
        res.status(404).json({
            status:'fail',
            message:'no tours found',
            bug:err
        })
    }
}
////////////////////////////////////////

// exports.getTour = (req,res)=>{
//     // console.log(req.params)
    
//     const id = req.params.id * 1;
//     if(id>tours.length){
//         return res.status(404).json({
//            status:'success',
//             message:'invalid user'
//         })
//     }
//     const tour = tours.find(el => el.id === id)

//     if(!tour){
//         return res.status(404).json({
//            status:'success',
//             message:'invalid user'
//         })
//     }


//     res.status(200).json({
//         status:'success',
//         data :{
//             tour
//         }
//     });
// };

exports.getTour = async (req,res)=>{
    try{
        const tour = await Tour.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data :{
                tour
            }
        })

    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:'no tours found',
            the :err
        })
    }
}


//////////////////////////////////////////////////////////




// exports.createTour = (req,res)=>{
//     // console.log(req.body);
//     // res.send('done')
//     console.log(tours.length, 'in 73');
//     const newId = tours[tours.length-1].id +1;
//     const newtour = Object.assign({ id: newId },req.body);
//     tours.push(newtour);
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours)  , err=>{
//         res.status(201).json({
//             status:'success',
//             data:{
//                 tour: newtour
//             }
//         })
//     });

// }

exports.createTour = async (req,res)=>{
    try{
    const newTour = await Tour.create(req.body)
    res.status(200).json({
        status:'success',
        the :'data is added successfully',
        data:{
            tour:newTour
        }
        })
    }catch(err){
        console.log(err)
        res.status(401).json({
            status:'fail',
            message:err
        })
    }
}

///////////////////////////////////////////////////////////

// exports.updateTour= (req,res)=>{
//     if(req.params.id*1 > tours.length){
//         return res.status(404).json({
//             status:'fail',
//             message:'invalid id'
//             })
//     }
//     res.status(200).json({
//         status:'success',
//         data:{
//             tour: 'updated'
//         }
//     });
// }

exports.updateTour = async(req,res)=>{
    try{
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        }) 
           
            res.status(200).json({
                status:'success',
                data:{
                    tour : tour
                }
                })
            }
    catch(err){
        // console.log(err,'int he line of of the 173')
        res.status(401).json({
            status:'fail',
            meassage:err
        })
    }
}

//////////////////////////////////////////////////////


// exports.deleteTour= (res,req)=>{
//     if(req.params.id*1 > tours.length){
//         return res.status(404).json({
//             status:'fail',
//             message:'invalid id for the deleting the data'
//             })
//     }
//     res.status(200).json({
//         status:'success',
//         data:{
//             tour: 'deleting the data done'
//         }
//     });
// }

exports.deleteTour = async (req,res)=>{
    try{
        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) {
            return res.status(404).json({
                status: 'fail',
                message: 'Tour not found'
            });
        }

        res.status(200).json({
            status:'success',
            data:null

    })
    }  catch(err){
        console.log(err,'in the delete method')
        res.status(404).json({
            status:'fail',
            message:'invaild'
        })
    }
}





