import  express from  "express";
import morgan from "morgan";
import cors from "cors";
const app = express()
const PORT= process.env.PORT || 8000

// midllewares
app.use(morgan("dev"));  // logs all the incoming req information
//app.use(helmet()) // setting default security headers to protect some attacks
// app.use(cors()) // allow cors origin resources
app.use(express.json()); //convert income data in the req.body

// MongoDB connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();


app.use("*", (req, res) => {
    res.json({
        message: " you are in the wrong place, go back!,"

    });
});



app.listen(PORT, (error)=>{
    error
    ? console.log(error) 
    : console.log('your server is ready at http://localhost:${PORT} ');

});
