const pool = require("../config/posts.config");


const consultarPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
};

const agregarPost = async (titulo, url, descripcion ) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Post agregado")   
};

const encontrarPostById = async (id) => {
    const select = `SELECT posts.likes FROM posts where id=$1`;
    const values = [id];
    const { rows } = await pool.query(select, values);
    return rows;
};

const modificarLike = async (id) => {
    const foundPost = await encontrarPostById(id);
    const modifiedPost = foundPost[0].likes
    const select = 'UPDATE posts SET likes=$2 WHERE id=$1';
    const values = [id, modifiedPost + 1]
    const resultadoUpdate = await pool.query(select, values);
    console.log(`Se ha agregado un like al id: ${id} satisfactoriamente`)   
};

const eliminarPost = async ( id ) => {
    const consulta = "delete from posts where id=$1";
    const values = [id];
    const result = await pool.query(consulta, values);
    console.log(`Post de id ${id} eliminado`)   
};

module.exports = {
    consultarPosts, 
    agregarPost,
    modificarLike,
    eliminarPost,
};