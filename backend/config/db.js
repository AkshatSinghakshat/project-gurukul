const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "gurukul_db", // Database Name
  "root",       // MySQL Username
  "",           // MySQL Password
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
  }
};

module.exports = { sequelize, connectDB };