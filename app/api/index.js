import  express  from "express";
import { PORT, mongoDBUrl } from "./config.js"
import mongoose from "mongoose";
import {router} from "./routes/bookRoutes.js";
import { error } from "console";

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("mongoDBUrl")
})

mongoose.connect(mongoDBUrl)
.then(() => {
    console.log('app connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening to port:${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})