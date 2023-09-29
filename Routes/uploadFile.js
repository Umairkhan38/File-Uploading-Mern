const express=require('express')
const router = express.Router();
const {imageUpload,videoUpload,imageReducerUpload,localFileUpload} =require('../controllers/uploadFile')

//api/v1/upload/imageUpload
// router.post('/imageUpload',imageUpload)


// api/v1/upload/videoUpload
// router.post('/videoUpload',videoUpload);

// //api/v1/upload/imageReducerUpload
// router.post('/imageReducerUpload',imageReducerUpload);

//api/v1/upload/localFileUpload
router.post('/localFileUpload',localFileUpload);

module.exports = router;
