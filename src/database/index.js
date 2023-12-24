const path = require('node:path');

const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

const umzug = new Umzug({
  logger: console,
  migrations: {
    glob: path.join(__dirname, 'migrations', '*.js'),
  },
  storage: new SequelizeStorage({
    sequelize: sequelize,
    tableName: '__migrations',
  }),
  context: sequelize.getQueryInterface(),
});

module.exports.sequelize = sequelize;
module.exports.umzug = umzug;

module.exports.connect = function () {
  return sequelize.sync().then(function () {
    return umzug
      .up()
      .then(function () {
        console.log('Successfully connected to database.');
      })
      .catch(function (e) {
        console.error('Migrations failed:', e);
        throw e;
      });
  });
};
