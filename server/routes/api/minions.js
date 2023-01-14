const express = require("express");
const minionsRouter = express.Router();
const db = require("../../db");

/**
 * TODO: GET /api/minions - DONE
 * TODO: POST /api/minions - DONE
 * TODO: GET /api/minions/:minionId - DONE
 * TODO: PUT /api/minions/:minionId - DONE
 * TODO: DELETE /api/minions/:minionId - DONE
 */

minionsRouter.param("minionId", (req, res, next, minionId) => {
  const foundMinion = db.getFromDatabaseById("minions", minionId);
  try {
    if (foundMinion) {
      req.minionId = minionId;
      next();
    } else {
      res.status(404).send("Minion not found!");
    }
  } catch (err) {
    next(err);
  }
});

minionsRouter.get("/", (req, res, next) => {
  res.status(200).send(db.getAllFromDatabase("minions"));
});

minionsRouter.post("/", (req, res, next) => {
  res.status(201).send(db.addToDatabase("minions", req.body));
});

minionsRouter.get("/:minionId", (req, res, next) => {
  res.status(200).send(db.getFromDatabaseById("minions", req.minionId));
});

minionsRouter.put("/:minionId", (req, res, next) => {
  res.status(200).send(db.updateInstanceInDatabase("minions", req.body));
});

minionsRouter.delete("/:minionId", (req, res, next) => {
  res.status(204).send(db.deleteFromDatabasebyId("minions", req.minionId));
});

module.exports = minionsRouter;
