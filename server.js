import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const mongoDb = process.env.MONGODB_DB || "portfolio";

const client = new MongoClient(mongoUri);
let database;

async function connectDatabase() {
  await client.connect();
  database = client.db(mongoDb);
  console.log(`Connected to MongoDB: ${mongoUri}/${mongoDb}`);
}

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ success: true, status: "API is running" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, location, budget, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, subject, and message are required.",
      });
    }

    const contactMessage = {
      name,
      email,
      location: location || "",
      budget: budget || "",
      subject,
      message,
      createdAt: new Date(),
    };

    const result = await database
      .collection("contact_messages")
      .insertOne(contactMessage);

    return res.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return res.status(500).json({
      success: false,
      error: "Unable to save contact form data.",
    });
  }
});

connectDatabase().catch((error) => {
  console.error("MongoDB connection error:", error);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
