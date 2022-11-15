const express = require("express");
const userRoute = require("./routers/userRoute");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use(userRoute);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
