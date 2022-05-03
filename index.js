const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/", (req, res, next) => {
  res.send("Node JS backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is listing on PORT : ${PORT}`);
});
