const db = require("../config/db");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const User = db.define(
  "user",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
(async () => {
  await db.sync();
})();
