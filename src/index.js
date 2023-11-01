import express from "express";
const app = express();
import userRouter  from "./routes/userRoutes.js";
import noteRouter  from "./routes/noteRoutes.js";

import  mongoose from 'mongoose';
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());   // add headers from response by api

app.use(express.json())

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=>{
    res.send("Notes API from Cheezy Code")
});

// app.use((req, res, next)=>{
//     console.log("HTTP Method -" + req.method + " , URL - " + req.url );
//     next();
// })

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is started on port:" + PORT);
    })
}).catch((error)=>{
    console.log(error)
})

//  app.get("/qaotes", (req, res)=>{
//     res.json(qaotes);
// });

// app.get("/random", (req, res)=>{
//     let index = Math.floor(Math.random()*qaotes.length);
//     let qaote = qaotes[index]
//     res.status(200).json(qaote);
// })

// password sG8LE5XTTmFPwqdj

