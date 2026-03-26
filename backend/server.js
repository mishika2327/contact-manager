const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/contacts", require("./routes/contactRoutes"));

// Serve frontend static files
const frontendBuildPath = path.join(__dirname, "../frontend/build");
app.use(express.static(frontendBuildPath));

// Serve index.html for all non-API routes (SPA routing)
app.get("*", (req, res) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(frontendBuildPath, "index.html"));
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Using in-memory database`);
  console.log(`✓ API: GET/POST http://localhost:${PORT}/api/contacts`);
});