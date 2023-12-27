import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongodb')
}).catch(err => {
    console.log('failed to connect to db')
})
app.listen(3000,() => {
    console.log('server is running on port 3000 -----')
})