const express = require('express');
const minionsRouter = express.Router();
const db = require('../../../db');

const workRouter = require('./work/work');
minionsRouter.use('/:minionId/work', workRouter);

minionsRouter.param('minionId', (req, res, next, minionId) => {
  const foundMinion = db.getFromDatabaseById('minions', minionId);
  try {
    if (foundMinion) {
      req.minionId = minionId;
      next();
    } else {
      res.status(404).send('Minion not found!');
    }
  } catch (err) {
    next(err);
  }
});

minionsRouter.get('/', (req, res, next) => {
  res.status(200).send(db.getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
  res.status(201).send(db.addToDatabase('minions', req.body));
});

minionsRouter.get('/:minionId', (req, res, next) => {
  res.status(200).send(db.getFromDatabaseById('minions', req.minionId));
});

minionsRouter.put('/:minionId', (req, res, next) => {
  res.status(200).send(db.updateInstanceInDatabase('minions', req.body));
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  res.status(204).send(db.deleteFromDatabasebyId('minions', req.minionId));
});

module.exports = minionsRouter;
