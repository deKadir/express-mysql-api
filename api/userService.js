const pool = require('../config/database');

const create = (data, callBack) => {
  pool.query(
    `insert into registration(firstName,lastName,gender,email,password,number)
  values(?,?,?,?,?,?)
  `,
    [data.firstName, data.lastName, data.gender, data.email, data.password, data.number],
    (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    }
  );
};

const getAll = (callBack) => {
  pool.query(`select id, firstName,lastName,gender from registration`, [], (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  });
};

const getById = (id, callBack) => {
  pool.query(`select id, firstName,lastName,gender from registration where id=?`, [id], (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results[0]);
  });
};

module.exports = {
  create,
  getAll,
  getById,
};
