import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
// const express = require("express");

const app = express();
const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: { "http://localhost:5173/": true },
    }),
  );
}
app.use(express.json());
app.use(rateLimiter);
const __dirname = path.resolve();

// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req Url is ${req.url}`);
//   next();
// });

app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// mongodb+srv://jacentartur_db_user:TPDX3fn6hH1tkUPj@cluster0.jiukefm.mongodb.net/?appName=Cluster0
