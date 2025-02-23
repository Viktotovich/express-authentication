const pool = require("./pool");

module.exports.addNewUser = async function (username, password) {
  try {
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      password,
    ]);
  } catch (err) {
    console.error(err);
  }
};

module.exports.getAllUsers = async function () {
  try {
    const { rows } = await pool.query("SELECT * FROM users;");
    return rows;
  } catch (err) {
    console.error(err);
  }
};
