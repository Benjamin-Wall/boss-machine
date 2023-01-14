const express = require("express");
const ideasRouter = express.Router();
const db = require("../../db");

/**
 * TODO: GET /api/ideas - DONE
 * TODO: POST /api/ideas - DONE
 * TODO: GET /api/ideas/:ideaId - DONE
 * TODO: PUT /api/ideas/:ideaId - DONE
 * TODO: DELETE /api/ideas/:ideaId - DONE
 */

ideasRouter.param("ideaId", (req, res, next, ideaId) => {
  const foundIdea = db.getFromDatabaseById("ideas", ideaId);
  try {
    if (foundIdea) {
      req.ideaId = ideaId;
      next();
    }
  } catch (err) {
    next(err);
  }
});

ideasRouter.get("/", (req, res, next) => {
  res.status(200).send(db.getAllFromDatabase("ideas"));
});

ideasRouter.post("/", (req, res, next) => {
  res.status(201).send(db.addToDatabase("ideas", req.body));
});

ideasRouter.get("/:ideaId", (req, res, next) => {
  res.status(200).send(db.getFromDatabaseById("ideas", req.ideaId));
});

ideasRouter.put("/:ideaId", (req, res, next) => {
  res.status(200).send(db.updateInstanceInDatabase("ideas", req.body));
});

ideasRouter.delete("/:ideaId", (req, res, next) => {
  res.status(204).send(db.deleteFromDatabasebyId("ideas", req.ideaId));
});

module.exports = ideasRouter;
