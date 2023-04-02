const express = require("express");
const ListTasks = require("../models/ListTasks");
const router = express.Router();

router.get("/list-item", async (req, res) => {
  try {
    const { username } = req.headers;
    if (!username) {
      return res.status(401).json({ error: "Username is required" });
    }
    const tasks = await ListTasks.find({
      username,
    });
    return res.json(tasks);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/list-item", async (req, res) => {
  try {
    const { username } = req.headers;
    if (!username) {
      return res.status(400).json({
        error: "Username is require",
      });
    }
    const { title, description, checked } = req.body;
    if (!title || title.length < 3) {
      return res.status(400).json({
        error: "Title is mandatory and needs to have more than 3 characters",
      });
    }
    const newTask = await ListTasks.create({
      title,
      description: description || "",
      checked: checked || false,
      username,
    });
    return res.json(newTask);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/list-item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "ID is mandatory" });
    }

    const taskDeleted = await ListTasks.findByIdAndDelete(id);
    return res.json(taskDeleted);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.put("/list-item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "ID is mandatory" });
    }

    const { title, description, checked } = req.body;
    if (!title || title.length < 3) {
      return res.status(400).json({
        error: "Title is mandatory and needs to have more than 3 characters ",
      });
    }

    const taskUptaded = await ListTasks.findByIdAndUpdate(
      id,
      {
        title,
        description: description || "",
        checked: checked || false,
      },
      {
        new: true,
      }
    );
    return res.json(taskUptaded);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
