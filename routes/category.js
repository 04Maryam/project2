// Load express module
const express = require('express');
// Initialize router functionality from express framework.
const router = express.Router();
// Require category controller
const categoryCtrl = require('../controllers/category');
const isLoggedInAdmin = require('../config/isLoggedInAdmin');

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix  + '-' + file.originalname )
    }
})
const upload = multer({ storage: storage })

router.use(express.urlencoded({extended: true}));

// router.get('/add', isLoggedInAdmin, categoryCtrl.category_add_get);

// router.post('/add', isLoggedInAdmin, categoryCtrl.category_add_post);
router.get('/add', categoryCtrl.category_add_get);

router.post('/add', upload.single('image') ,categoryCtrl.category_add_post);

router.get('/index', categoryCtrl.category_index_get);

router.get('/detail', categoryCtrl.category_show_get);

router.get('/delete', isLoggedInAdmin, categoryCtrl.category_delete_get);

router.get('/edit', isLoggedInAdmin, categoryCtrl.category_edit_get);

router.post('/update', isLoggedInAdmin, upload.single('image'), categoryCtrl.category_update_post);

module.exports = router;