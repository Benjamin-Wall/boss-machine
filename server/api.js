const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./routes/api/minions/minions');
apiRouter.use('/minions', minionsRouter);

const ideasRouter = require('./routes/api/ideas/ideas');
apiRouter.use('/ideas', ideasRouter);

const meetingsRouter = require('./routes/api/meetings/meetings');
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
