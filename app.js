// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const userRoutes = require("./routes/userRoutes");
// require('dotenv').config();

// const app = express();
// // ✅ Allowed frontend origins
// const allowedOrigins = [
//   process.env.FRONTEND_URL || 'http://localhost:5175',
//   'http://localhost:5175',
//   'http://amexcardindia.in',  // ✅ add this to allow frontend access
// ];
// app.use(
//   cors({
//     origin: allowedOrigins,
//     credentials: true,
//   })
// );



// app.use(express.json());

// connectDB();

// app.use("/api", userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Optional: Connect to MongoDB
connectDB();

// ✅ Allowed frontend origins
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5175',
  'http://localhost:5175',
  'http://amexcardindia.in',  // ✅ add this to allow frontend access
];

// ✅ CORS setup
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Mount API routes
app.use("/api", userRoutes);  // <-- This is the route prefix

// ✅ Optional: root test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// ✅ Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
