const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'm4t1as94',
    database: 'likeme',
    allowExitOnIdle: true
});

const consultarPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
}
const agregarPost = async(titulo, url, descripcion, likes ) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, url, descripcion, likes]
    const result = await pool.query(consulta, values)
    console.log("Post agregado")   
}

module.exports = {consultarPosts, agregarPost};
