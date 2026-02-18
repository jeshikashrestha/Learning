const express = require("express");
const app  = express();
 
const  PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Jeshika .. Backend is running")

});

console.log("Hello World")

