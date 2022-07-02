const postData = require('../data/postsData');

exports.getPosts = function () {
    let arPosts = postData.getPosts();
    arPosts ['total'] = arPosts.length;

    return arPosts;
};

// exports.deletePosts = function () {
//     return postData.deletePosts();
// }