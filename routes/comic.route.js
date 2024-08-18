var express = require('express');
var router = express.Router();
var controller = require('../controllers/comic.controller');
const uploadMultiple = require('../middlewares/upload.middleware');

router.get('/get-all', controller.getComics);

router.get('/get-recent', controller.getRecentComics);

router.get('/get-top', controller.getTopComics);

router.get('/get/:id', controller.getComicId);

router.post('/add-comic', uploadMultiple, controller.addComic);

router.put('/update-comic/:id', uploadMultiple, controller.updateComic);

router.delete('/delete-comic/:id', controller.deleteComic);

module.exports = router;
