const service = require('../services/comic.service');

function getComics(req, res, next) {
  service
    .getComicsService()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function getRecentComics(req, res, next) {
  service
    .getRecentComicsService()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function getTopComics(req, res, next) {
  service
    .getTopComicsService()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function getComicId(req, res, next) {
  service
    .getComicByIdService(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function addComic(req, res, next) {
  const body = req.body;
  const file = req.files;
  service
    .addComicService(
      body.title,
      body.author,
      body.synopsis,
      body.genre,
      body.rating,
      body.views,
      file.image[0].path.replace('public\\', ''),
      file.banner[0].path.replace('public\\', '')
    )
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function updateComic(req, res, next) {
  const body = req.body;
  const file = req.files;
  service
    .updateComicService(
      req.params.id,
      body.title,
      body.author,
      body.synopsis,
      body.genre,
      body.rating,
      body.views,
      file.image[0].path.replace('public\\', ''),
      file.banner[0].path.replace('public\\', '')
    )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

function deleteComic(req, res, next) {
  service
    .deleteComicService(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

module.exports = {
  getComics,
  getRecentComics,
  getTopComics,
  getComicId,
  addComic,
  updateComic,
  deleteComic,
};
