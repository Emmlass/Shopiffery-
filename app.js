const express = require("express");
const app = express();
//logger middleware
const morgan = require("morgan");

//parser middleware
const bodyParser = require("body-parser");

// adding the mongodb database using mongoose
const mongoose = require("mongoose");
 

// adding the product routes to make it easy to just parse "/" at the product.js file
const productRoutes = require("./api/routes/products");

// adding the order routes to make it easy to just parse "/" at the order.js file
const orderRoutes = require("./api/routes/orders");

// using morgan in dev mode to log the requests made to the server
app.use(morgan("dev"));
app.use(bodyParser.json()); 

mongoose.connect("")

// Add CORS error handling
 app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
 })



// ROutes that handles requests
app.use('/products', productRoutes);
app.use('/orders',orderRoutes);
 
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message: "it works"
//     });

// })

// to handle requests that are not handled by the above routes
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);// gives the error name and passes it to the next middleware which is the error handler below
 })

//  handles the error passed from the above middleware and sends a response to the client
 app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
 })
module.exports= app;