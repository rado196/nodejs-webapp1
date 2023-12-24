const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('users', [
    {
      balance: 10_000,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
  ]);
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('users');
}

module.exports = { up, down };
