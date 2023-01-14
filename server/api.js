const express = require("express");
const apiRouter = express.Router();

const minionsRouter = require("./routes/api/minions");
apiRouter.use("/minions", minionsRouter);

const ideasRouter = require("./routes/api/ideas");
apiRouter.use("/ideas", ideasRouter);

const meetingsRouter = require("./routes/api/meetings");
apiRouter.use("/meetings", meetingsRouter);

module.exports = apiRouter;
