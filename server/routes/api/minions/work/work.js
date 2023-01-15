const express = require('express');
const workRouter = express.Router();
const db = require('../../../../db');

workRouter.param('workId', (req, res, next, workId) => {
  const foundWork = db.getFromDatabaseById('work', workId);
  try {
    if (foundWork) {
      if (foundWork.minionId === req.minionId) {
        req.workId = workId;
        next();
      } else {
        res.status(400).send('Work does not belong to this minion!');
      }
    } else {
      res.status(404).send('Work not found!');
    }
  } catch (err) {
    next(err);
  }
});

workRouter.get('/', (req, res, next) => {
  const work = db.getAllFromDatabase('work');
  res.status(200).send(work.filter((obj) => obj.minionId === req.minionId));
});

workRouter.post('/', (req, res, next) => {
  res.status(201).send(db.addToDatabase('work', req.body));
});

workRouter.put('/:workId', (req, res, next) => {
  res.status(200).send(db.updateInstanceInDatabase('work', req.body));
});

workRouter.delete('/:workId', (req, res, next) => {
  res.status(204).send(db.deleteFromDatabasebyId('work', req.workId));
});

module.exports = workRouter;
