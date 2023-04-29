import express, {} from "express";
const routing = express.Router()

routing.get("/",(req, res)=> {
    res.json({
        msg:"get"
    })
})

routing.post("/",(req,res)=>{

    const newProduct = {
    name: req.body.productName,
    age: req.body.productAge
    }

    res.json({
        msg: "create product" ,
        result: newProduct

    })
})

routing.put("/",(req, res)=>{
    res.json({
        msg:"update product"
    })
})

routing.delete("/", (req, res) =>{
    res.json({
        msg:"delete product"
    })
})


export default routing