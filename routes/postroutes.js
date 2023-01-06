
const { Router } = require('express');
const router = Router();

const { 
    postsGet, 
    postsPost, 
    postsPut,
    postsDelete
} = require('../controllers/post.controller');



router.get("/", postsGet);

router.post("/", postsPost);

router.put("/like/:id", postsPut);

router.delete("/:id", postsDelete);

module.exports = router;