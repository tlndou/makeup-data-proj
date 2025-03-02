const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origiin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"product": ['blush', 'foundation', 'lipstick'] });
});

app.listen(8080, () => {
    console.log("server started on port 8080");
});