const express = require('express');
const cors = require('cors');


class Post {

    constructor () {
        this.app = express();
        this.postPath = '/posts';
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    };

    middlewares () {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cors());
    };

    routes () {
        this.app.use(this.postPath, require('../routes/postroutes'))
    };

    listen () {
        this.app.listen(this.port, () => {
            console.log(`Servidor encendido en el puerto: ${this.port}`);
        });
    };
};
// 
module.exports = Post;