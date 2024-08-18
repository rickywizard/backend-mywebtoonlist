const service = require('../services/user.service');

function registerUser(req, res, next) {
  const body = req.body;
  service
    .registerService(body.lineId, body.password)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function loginUser(req, res, next) {
  const body = req.body;

  service
    .loginService(body.lineId, body.password)
    .then((result) => {
      res.status(200).json({ id: result.id, lineId: result.line_id });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

module.exports = {
  registerUser,
  loginUser,
};
