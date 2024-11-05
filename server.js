import express from "express";

const app = express();

app.get("/Produc", (req, res) => {
    res.send("Hello");
});

app.get("/users", (req, res) => {
    res.send("bye");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
