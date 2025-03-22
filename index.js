// index.js - Simple Express Server

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.post("/data", (req, res) => {
    console.log(req.body); // Logging request body
    res.json({ message: "Data received" });
});

app.listen(port, () => {
    console.log("Server running on port:", port);
});
