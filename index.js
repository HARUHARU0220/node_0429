import express from "express"
import bodyParser from "body-parser";
import productRouter from "./routing/product.js"
import orderRouter from "./routing/order.js"

const app = express()


//middleware 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//routing
app.use("/product",productRouter)
app.use("/order",orderRouter)



const port = 8080
app.listen(port, console.log(`server started at ${port}`))
