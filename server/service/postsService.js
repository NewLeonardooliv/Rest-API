const postData = require('../data/postsData');

exports.getPosts = function () {
    return postData.getPosts();
};

exports.getIdPosts = function (id) {
    return postData.getIdPosts(id);
};

// exports.deletePosts = function () {
//     return postData.deletePosts();
// }