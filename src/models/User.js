const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const User = sequelize.define(
  'users',
  {
    balance: DataTypes.DOUBLE,
  },
  {
    schema: process.env.DB_SCHEMA,
    hooks: {
      beforeSave: function (instance) {
        if (instance.getDataValue('balance') < 0) {
          throw new Error('Balance in negative.');
        }
      },
    },
  }
);

module.exports = User;
