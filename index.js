require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.API_PORT;
const path = require("path");
const bodyParser = require("body-parser");

const userRouter = require("./src/routers/users");
const productsRouter = require("./src/routers/products");
const cartRouter = require("./src/routers/carts");
const categoriesRouter = require("./src/routers/categories");
const transactionsRouter = require("./src/routers/transactions");

app.use(cors("*"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/transactions", transactionsRouter);
app.use("/carts", cartRouter);

app.get("/", (req, res) => {
  res.status(200).send("API 1-Pharmacy");
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
  console.log(`Api is running at port ${port}`);
});
