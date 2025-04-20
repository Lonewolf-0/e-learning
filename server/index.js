import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Database/db.js";

dotenv.config();
const app = express();

//using middlewares
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("server is working");
});


// importing routes
import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';



//using routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);


app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
  connectDb();
});
