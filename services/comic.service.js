var db = require('../config/db');

function getComicsService() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM comics', (error, result) => {
      if (!!error) reject(error);
      resolve(result);
    });
  });
}

function getRecentComicsService() {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM comics ORDER BY created_at DESC LIMIT 5',
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function getTopComicsService() {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM comics ORDER BY rating DESC LIMIT 5',
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function getComicByIdService(id) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM comics WHERE id = ?', [id], (error, result) => {
      if (!!error) reject(error);
      resolve(result[0]);
    });
  });
}

function addComicService(
  title,
  author,
  synopsis,
  genre,
  rating,
  views,
  image,
  banner
) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO comics (title, author, synopsis, genre, rating, views, image, banner) VALUE (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, author, synopsis, genre, rating, views, image, banner],
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function updateComicService(
  id,
  title,
  author,
  synopsis,
  genre,
  rating,
  views,
  image,
  banner
) {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE comics SET title = ?, author = ?, synopsis = ?, genre = ?, rating = ?, views = ?, image = ?, banner = ? WHERE id = ?',
      [title, author, synopsis, genre, rating, views, image, banner, id],
      (error, result) => {
        if (!!error) reject(error);
        resolve(result);
      }
    );
  });
}

function deleteComicService(id) {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM comics WHERE id = ?', [id], (error, result) => {
      if (!!error) reject(error);
      resolve(result);
    });
  });
}

module.exports = {
  getComicsService,
  getRecentComicsService,
  getTopComicsService,
  getComicByIdService,
  addComicService,
  updateComicService,
  deleteComicService,
};
