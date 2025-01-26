const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./lib/db.js");

const app = express();
const port = process.env.PORT;

app.listen(port, (err)=>{
err ? console.log("err", err.message) : console.log(`Server is running on port ${port}`);
connectDB().then(()=>console.log("Connected to DB"))
.catch((err)=>console.log("DB Connection Error", err.message));
})


const authRoutes = require("./routes/auth.route.js");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use("/api/auth", authRoutes);