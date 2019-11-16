const express = require("express");
const router = express.Router();

const db = require("../data/db.config");

router.post("/", async (req, res) => {
  const newCar = req.body;

  try {
    const car = await db("cars").insert(newCar);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: "Error posting car to the db" });
  }
});

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "Error retreiving cars from db" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(400).json({ message: "ID required to retrieve car from db" });
    }
    const car = await db("cars").where({ id });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "Error getting car by ID from db" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const carData = req.body;

  try {
    const car = await db("cars")
      .where({ id })
      .update(carData);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "Error updating car data to db" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const car = await db("cars")
      .where({ id })
      .del();
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "Error deleting car from db" });
  }
});

module.exports = router;
