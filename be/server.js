const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json())

// Kết nối MongoDB với username là MSSV, password là MSSV, dbname là it4409
mongoose
 .connect("mongodb+srv://20205002:20205002@cluster.mongodb.net/it4409")
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.error("MongoDB Error:", err));
// TODO: Tạo Schema
const UserSchema = new mongoose.Schema({ ... });
const User = mongoose.model("User", UserSchema);
10
// TODO: Implement API endpoints
app.get("/api/users", async (req, res) => { ... });
app.post("/api/users", async (req, res) => { ... });
app.put("/api/users/:id", async (req, res) => { ... });
app.delete("/api/users/:id", async (req, res) => { ... });
// Start server
app.listen(3001, () => {
 console.log("Server running on http://localhost:3001");
});