// const express = require("express");
import express from "express";

const app = express();
const port: number = 3000;

interface Nombres<T, U> {
  name: T,
  numero: U
}

const a: Nombres<string, number> = {
  name: "fran",
  numero: 123
}

console.log(a)


app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "hola",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
