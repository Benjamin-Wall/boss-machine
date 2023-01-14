const express = require("express");
const meetingsRouter = express.Router();
const db = require("../../db");

/**
 * TODO: GET /api/meetings
 * TODO: POST /api/meetings
 * TODO: DELETE /api/meetings
 */

meetingsRouter.get("/", (req, res, next) => {
  res.status(200).send(db.getAllFromDatabase("meetings"));
});

meetingsRouter.post("/", (req, res, next) => {
  const newMeeting = db.createMeeting();
  res.status(201).send(db.addToDatabase("meetings", newMeeting));
});

meetingsRouter.delete("/", (req, res, next) => {
  res.status(204).send(db.deleteAllFromDatabase("meetings"));
});

module.exports = meetingsRouter;
