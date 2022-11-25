import express from 'express';
import multer from 'multer';
import { posts,upload } from '@/controllers';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, `${Date.now()}-${(file.originalname)}`)
  }
})
const fileUpload = multer({ storage });

router.get('/posts', posts);
router.post('/upload', fileUpload.single('file'), upload);

export { router }
