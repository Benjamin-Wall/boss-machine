const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const value = numWeeks * weeklyRevenue;
  const isMillionDollarIdea = value >= 1000000 ? true : false;
  if (isMillionDollarIdea) {
    next();
  } else {
    res.status(400).send('Idea is not profitable!');
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
