import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import colors from 'colors'
import productRoutes from "./routes/productRoutes.js";

dotenv.config({path:'../.env'});
connectDB();


const app = express();

app.use((err, req,res, next) => {
    const error = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
})

app.get('/',(req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)



const PORT = process.env.PORT || 3400;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold))