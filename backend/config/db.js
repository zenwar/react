const Sequelize = require("sequelize");
const db = new Sequelize("express_github", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  // logging: false,

  pool: {
    max: 100,
    min: 4,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
