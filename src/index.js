const express = require("express");
const userRouter = require("./routes/userRoutes.js");
const noteRouter = require("./routes/noteRoutes.js");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Notes API from Cheezy Code");
});

const PORT = process.env.PORT || 5000;
console.log(process.env.SECRET_KEY);

mongoose
    .connect("mongodb+srv://admin:sG8LE5XTTmFPwqdj@cluster0.lpxz3h2.mongodb.net/notes_db?retryWrites=true&w=majority")
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is started on port:" + PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });