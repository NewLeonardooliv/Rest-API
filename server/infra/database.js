const pgp = require('pg-promise')();

const db = pgp({
    user: 'postgres',
    password: '@postgres',
    host: 'localhost',
    post: 5432,
    database: 'blog'
});

module.exports = db;