const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async function (request, response) {
    const posts = await postsService.getPosts();
    response.json(posts);
});

router.get('/posts/:id', async function (request, response) {

});

router.post('/posts', async function (request, response) {

});

router.put('/posts/:id', async function (request, response) {

});

router.delete('/posts/:id', async function (request, response) {

});

module.exports = router;