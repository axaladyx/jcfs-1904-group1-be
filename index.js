require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.API_PORT;

const userRouter = require("./src/routers/users");
const productsRouter = require("./src/routers/products");

app.use(cors("*"));
app.use(express.json());
app.use(express.static("public"));

app.use("/users", userRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.status(200).send("API 1-Pharmacy 😎");
});

app.use((error, req, res, next) => {
  res.status(500).send({
    status: "ERROR",
    message: error.message,
    data: error,
  });
});

app.listen(port, (err) => {
  if (err) return cosole.log({ err });
  console.log(`API 1-Pharmacy : ${port}`);
});
