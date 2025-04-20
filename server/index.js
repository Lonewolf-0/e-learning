import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Database/db.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("server is working");
});


// importing routes
import userRoutes from './routes/user.js';


//using routes
app.use("/api", userRoutes);


app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
  connectDb();
});
