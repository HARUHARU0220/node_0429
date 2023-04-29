import express, {} from "express";
const routing = express.Router()

routing.get("/",(req,res)=>{
    res.json({
        msg:"get"
    })
})

routing.post("/",(req,res)=>{
    
    const newOrder= { 
        id: req.body.orderId,
        pw: req.body.orderPassword
    }
    
    res.json({
        msg:"create Order" , 
        result: newOrder

    })
})

routing.put("/",(req,res)=>{
    res.json({
        msg:"update product"
    })
})

routing.delete("/",(req,res)=>{
    res.json({
       msg:"delete product"
    })
})


export default routing
