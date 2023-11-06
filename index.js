import express from "express";
import userRouter from "./src/routes/userRoutes.js";
import noteRouter from "./src/routes/noteRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();


app.use(cors());   // add headers from response by api

app.use(express.json())

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=>{
    res.send("Notes API from Rohit Singh")
});


const PORT = process.env.PORT || 5000;
console.log(process.env.SECRET_KEY)
mongoose.connect("mongodb+srv://admin:sG8LE5XTTmFPwqdj@cluster0.lpxz3h2.mongodb.net/notes_db?retryWrites=true&w=majority"
)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is started on port:" + PORT);
    })
}).catch((error)=>{
    console.log(error)
})



// password sG8LE5XTTmFPwqdj

