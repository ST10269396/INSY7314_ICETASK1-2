import express from "express";
import db from "./db/conn.mjs";
import posts from "./routes/post.mjs";

const app = express();
const urlprefix = "/api";

app.use(express.json());

app.get(`${urlprefix}/`, (req, res) => {
  res.send("I am finally figuring this out,no more crying");
});

app.get(`${urlprefix}/orders`, (req, res) => {
  const orders = [
    {
      id: "1",
      name: "Orange"
    },
    {
      id: "2", 
      name: "Apple"
    },
    {
      id: "3",
      name: "Pear"
    }
  ];
  res.json({
    message: "Fruits",
    orders: orders
  });
});

export default app;