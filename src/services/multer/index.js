const multer = require("multer");
const path = require("path");

<<<<<<< HEAD
const avatarDirectory = path.join(__dirname, "../../../public/avatar");
const storageAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, avatarDirectory);
  },

  filename: function (req, file, cb) {
    cb(null, `${req.user.username}-avatar.png`);
  },
});
=======
const imageDirectory = path.join(__dirname, "../../../public/images/products/");
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageDirectory);
  },

  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const uploadImage = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000,
  },
  fileFilter(req, file, cb) {
    const allowedExtension = [".png", ".jpg", ".jpeg"];
    const extname = path.extname(file.originalname);

    if (!allowedExtension.includes(extname))
      return cb(new Error("Please upload image with ext (jpg, jpeg, png)"));
    cb(null, true);
  },
});

module.exports = { uploadImage };
>>>>>>> 2cc3f571b4b62c8eaf94e01c040152a2771fbf45
