import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import checkauth from "../check-auth.mjs";

const router = express.Router();

//get all the records.
router.get("/", async (req, res) => {
    let collection = db.collection("posts");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
});

// Create a new record.
router.post("/upload", checkauth, async (req, res) => {
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({ error: "Body missing or invalid. Send JSON or x-www-form-urlencoded." });
    }
    const { user, content, image } = req.body;
    if (!user || !content) {
      return res.status(400).json({ error: "Required fields: user, content" });
    }
    let newDocument = { user, content, image };
    let collection = db.collection("posts");
    let result = await collection.insertOne(newDocument);
    res.status(201).json(result);
});

// Update a record by id
router.patch("/:id", checkauth, async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      user: req.body.user,
      content: req.body.content,
      image: req.body.image
    }
  };
  const collection = db.collection("posts");
  const result = await collection.updateOne(query, updates);
  res.status(200).send(result);
});

// Get a single record by id
router.get("/:id", async (req, res) => {
  const collection = db.collection("posts");
  const query = { _id: new ObjectId(req.params.id) };
  const result = await collection.findOne(query);
  if (!result) return res.status(404).send("Not found");
  res.status(200).send(result);
});

// Delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const collection = db.collection("posts");
  const result = await collection.deleteOne(query);
  res.status(200).send(result);
});

export default router;
