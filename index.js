import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan"
import dotenv from "dotenv"
import productRouter from "./routing/product.js"
import orderRouter from "./routing/order.js"
import connectDB from "./config/database.js"


const app = express()

dotenv.config()


connectDB()

//middleware 설정
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//routing
app.use("/product",productRouter)
app.use("/order",orderRouter)



const port = process.env.PORT
app.listen(port, console.log(`server started at ${port}`))
