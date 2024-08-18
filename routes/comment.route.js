var express = require('express');
var router = express.Router();
var controller = require('../controllers/comment.controller');

router.get('/get-all/:id', controller.getComments);

router.get('/get-user-comment/:comicId/:userId', controller.getUserComments);

router.post('/add-comment', controller.addComment);

router.put('/update-comment/:id', controller.updateComment);

router.delete('/delete-comment/:id', controller.deleteComment);

module.exports = router;
