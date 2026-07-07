const express = require('express');
const router = express.Router();

// Handles incoming GET requests to /orders
router.get("/", (req,res,next)=>{
    res.status(200).json({
        message: "Orders were fetched"
    });
}); 

// Handles POST requests to /orders
router.post("/", (req,res,next)=>{
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity

    };
    res.status(201).json({
        message: "Order was created",
        order: order
    });
});

// Handles GET requests to /orders/:orderId
router.get("/:orderId",(req,res,next)=>{
    res.status(200).json({
        message: "Order details",
        orderId: req.params.orderId
    })
})

// Handles DELETE requests to /orders/:orderId
router.delete("/:orderId",(req,res,next)=>{
    res.status(200).json({
        message: "Deleted order",
        orderId: req.params.orderId
    });
});
module.exports= router;