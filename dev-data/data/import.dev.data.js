const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');  // Ensure fs module is imported
dotenv.config({ path: './config.env' });
const Tour = require('./../../model/tourModel');
const express = require('express');
const app = express();

// const port = process.env.PORT || 3500;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con => {
    console.log('DB connection successful');
}).catch(err => {
    console.error('DB connection error:', err);
});

// app.listen(4000, () => {
//     console.log(`App is running on port ${port}`);
// });

// Reading the file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// Import data into DB
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully loaded');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// Delete all data from the collection
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully deleted');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

console.log(process.argv);

// if (process.argv[2] === '--import') {
//     importData();
// } else if (process.argv[2] === '--delete') {
//     deleteData();
// }
