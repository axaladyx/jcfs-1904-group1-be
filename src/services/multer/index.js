const multer = require("multer");
const path = require("path");

const avatarDirectory = path.join(__dirname, "../../../public/avatar");
const storageAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, avatarDirectory);
  },

  filename: function (req, file, cb) {
    cb(null, `${req.user.username}-avatar.png`);
  },
});
