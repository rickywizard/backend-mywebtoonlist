const multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images are allowed.'), false);
  }
};

var upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

var uploadMultiple = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'banner', maxCount: 1 },
]);

module.exports = uploadMultiple;
