const { User } = require('../models');

async function changeBalance({ userId, amount }, transaction) {
  const user = await User.findByPk(userId);
  if (!user) {
    return;
  }

  const newAmount = user.getDataValue('balance') + amount;
  user.setDataValue('balance', newAmount);
  await user.save({ transaction: transaction });
}

module.exports.incrementBalance = async function (
  { userId, amount },
  transaction
) {
  return changeBalance(
    {
      userId: userId,
      amount: amount,
    },
    transaction
  );
};

module.exports.decrementBalance = async function (
  { userId, amount },
  transaction
) {
  return changeBalance(
    {
      userId: userId,
      amount: -1 * amount,
    },
    transaction
  );
};
