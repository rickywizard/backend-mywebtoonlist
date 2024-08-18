const service = require('../services/comment.service');

function getComments(req, res, next) {
  service
    .getCommentsService(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function getUserComments(req, res, next) {
  service
    .getUserCommentsService(req.params.comicId, req.params.userId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function addComment(req, res, next) {
  const body = req.body;
  service
    .addCommentService(body.content, body.userId, body.comicId)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function updateComment(req, res, next) {
  service
    .updateCommentService(req.params.id, req.body.content)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function deleteComment(req, res, next) {
  service
    .deleteCommentService(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

module.exports = {
  getComments,
  getUserComments,
  addComment,
  updateComment,
  deleteComment,
};
