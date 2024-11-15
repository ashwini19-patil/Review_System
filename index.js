// index.js
import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import router from "./routes/feedbackRoutes.js";


const app = express();

const PORT = 3000;

app.use(express.json()); // Middleware to parse incoming JSON requests

//mounting api routes
app.use("/api/v1",router)

dotenv.config(); // Load environment variables from .env file

dbConnect(); // Connect to MongoDB





app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
