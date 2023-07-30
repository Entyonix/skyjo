const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Requête reçue sur '/");
});

app.get("/room", (req, res) => {
    res.send("Requête reçue sur '/room");
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:"+PORT);
});