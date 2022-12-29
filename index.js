const express = require('express');
const cors = require('cors');
const { consultarPosts, agregarPost } = require('./consultas');

const app = express();

app.use(cors());
app.use(express.json());
app.use( express.static('public') );

app.listen(3000, () => {
    console.log("Servidor encendido");
});

app.get('/',  (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
    console.log(req.body);
});

app.get('/posts',  async(req, res) => {
    
    const posts = await consultarPosts();
    res.json(posts); 
})

app.post('/posts',  async(req, res) => {
    const { titulo, url, descripcion, likes } = req.body
    await agregarPost(titulo, url, descripcion, likes )
    res.send("Post agregado con éxito")
})

