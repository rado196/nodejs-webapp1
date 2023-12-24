const UserService = require('../services/UserService');

// PATCH: /users/:id/balance/increment
module.exports.increment = async function (req, res) {
  try {
    await UserService.incrementBalance({
      userId: req.params.id,
      amount: req.body.amount,
    });
    res.json({ status: 'OK' });
  } catch (e) {
    res.status(400).json({ status: 'failure' });
  }
};

// PATCH: /users/:id/balance/decrement
module.exports.decrement = async function (req, res) {
  try {
    await UserService.decrementBalance({
      userId: req.params.id,
      amount: req.body.amount,
    });
    res.json({ status: 'OK' });
  } catch (e) {
    res.status(400).json({ status: 'failure' });
  }
};
