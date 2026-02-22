const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./db/db");
dotenv.config();


const app  = express();

connectToDatabase();
 
const  PORT = process.env.PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Jeshika .. Backend is running")

});



