const express = require("express");
const app = express();
// adding the product routes to make it easy to just parse "/" at the product.js file
const productRoutes = require("./api/routes/products");

app.use('/products', productRoutes);
 
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message: "it works"
//     });

// })

module.exports= app;