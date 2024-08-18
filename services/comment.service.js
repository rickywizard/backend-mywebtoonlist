var db = require('../config/db');
const { updateComicService } = require('./comic.service');

function getCommentsService(comicId) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT comments.id, line_id, created_at, content FROM comments JOIN users ON comments.user_id = users.id WHERE comic_id = ? ORDER BY created_at DESC',
      [comicId],
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function getUserCommentsService(comicId, userId) {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT comments.id, line_id, created_at, content FROM comments JOIN users ON comments.user_id = users.id WHERE comic_id = ? AND comments.user_id = ? ORDER BY created_at DESC',
      [comicId, userId],
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function addCommentService(content, userId, comicId) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO comments (content, user_id, comic_id) VALUE (?, ?, ?)',
      [content, userId, comicId],
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function updateCommentService(id, content) {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE comments SET content = ? WHERE id = ?',
      [content, id],
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function deleteCommentService(id) {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM comments WHERE id = ?', [id], (error, result) => {
      if (!!error) reject(error);
      resolve(result);
    });
  });
}

module.exports = {
  getCommentsService,
  getUserCommentsService,
  addCommentService,
  updateCommentService,
  deleteCommentService,
};
