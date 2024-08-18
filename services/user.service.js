const db = require('../config/db');
const bcrypt = require('bcrypt');

function registerService(lineId, password) {
  return new Promise((resolve, reject) => {
    const hashPassword = bcrypt.hashSync(password, 10);
    db.query(
      'INSERT INTO users (line_id, password) VALUE (?, ?)',
      [lineId, hashPassword],
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function loginService(lineId, password) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT id, line_id, password FROM users WHERE line_id = ?',
      [lineId],
      (error, result) => {
        if (!!error) reject(error);
        if (result.length == 0) reject(error);

        const userExists = bcrypt.compareSync(password, result[0].password);
        if (userExists) resolve(result[0]);
        else reject(error);
      }
    );
  });
}

module.exports = {
  registerService,
  loginService,
};
