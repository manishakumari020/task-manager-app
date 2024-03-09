require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const PORT = process.env.PORT  ;
//const MONGODB_URI = process.env.MONGODB_URI;
//console.log(MONGODB_URI);

app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));

//app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Backend server is running");
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})