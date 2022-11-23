const userService = require('./userService');
const { genSaltSync, hashSync } = require('bcrypt');

const createUser = (req, res) => {
  const body = req.body;

  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  userService.create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: `An error occured`,
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const getUsers = (req, res) => {
  userService.getAll((err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: `An error occured`,
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const getById = (req, res) => {
  userService.getById(req.query.id, (err, user) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `An error occured`,
      });
    }
    return res.status(200).json({
      success: true,
      data: user,
    });
  });
};

module.exports = {
  createUser,
  getUsers,
  getById,
};
