const {Pool} = require('pg');

const pool = new Pool({
    host: 'postgresql-projectdbdl.alwaysdata.net',
    user: 'projectdbdl',
    password: 'm4t1as94',
    database: 'projectdbdl_likeme',
    port: 5432,
    allowExitOnIdle: true,
});

module.exports = pool;