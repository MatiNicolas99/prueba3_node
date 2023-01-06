
const { consultarPosts, modificarLike, eliminarPost, agregarPost } = require("../models/posts.model");



const postsGetFile = async (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
    console.log(req.body);
};

const postsGet = async (req, res) => {
    try {
        const posts = await consultarPosts();
        res.json(posts); 
    } catch (error) {
        res.send(error)
    };
};

const postsPost = async(req, res) => {
       
        try {
        
            const { titulo, url, descripcion} = req.body;
            await agregarPost(titulo, url, descripcion);
            res.send("Post agregado con éxito");

    
        } catch (error) {
            const { code } = error;
            if (code == "22001") {
            res.status(400)
            .send("Se ha superado el límite de caracteres que permite uno de los campos");
        } else {
            res.status(500).send(error)
        }
}};

const postsPut = async(req, res) => {
    try {
        const { id } = req.params;
        await modificarLike(id)
        res.send("Actualización del like")
        
    } catch (error) {
        res.send(error)
    }
};

const postsDelete = async(req, res) => {
        try {
            
            const { id } = req.params
            await eliminarPost(id)
            res.send(`Eliminando post de id: ${id}`)
        } catch (error) {
            res.send(error)    
        }

};

module.exports = {
    postsGet,
    postsGetFile,
    postsPost,
    postsPut,
    postsDelete,
}

