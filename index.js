import express from "express"
import bodyParser from "body-parser";
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
import productRouter from "./routing/product.js"

app.use("/product",productRouter)

const port = 8080
app.listen(port, console.log("server start"))
