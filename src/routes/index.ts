import express from 'express';
import multer from 'multer';
import { login, register, logout, upload } from '../controllers'
import {
  catchAsync
} from '../middleware/error';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${(file.originalname)}`)
  }
})
const fileUpload = multer({ storage });

router.post('/login', catchAsync(login));
router.post('/register', catchAsync(register));
router.post('/logout', catchAsync(logout));
router.post('/upload', fileUpload.single('file'), upload);

export { router }
