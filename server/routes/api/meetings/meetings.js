const express = require('express');
const meetingsRouter = express.Router();
const db = require('../../../db');

meetingsRouter.get('/', (req, res, next) => {
  res.status(200).send(db.getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
  res.status(201).send(db.addToDatabase('meetings', db.createMeeting()));
});

meetingsRouter.delete('/', (req, res, next) => {
  res.status(204).send(db.deleteAllFromDatabase('meetings'));
});

module.exports = meetingsRouter;
