import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const API_KEY = process.env.API_KEY;
const MODEL = process.env.MODEL;

app.post("/chat", async (req, res) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("✅ Backend running on http://localhost:3000"));
