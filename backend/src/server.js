const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
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
const messageRoutes = require("./routes/message.route.js");

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);