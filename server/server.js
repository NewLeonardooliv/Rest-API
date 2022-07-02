const express = require('express');
const app = express();

app.use('/', require('./route/PostsRouter'));

app.listen(3000);