const express = require("express")
const app = express()

const { newConnection } = require("./bd")
app.use(express.json()) //middleware entre el servidor y el puerto.

app.get("/books", async (request, response) => {
    const connection = await newConnection();
    const results = await connection.query("SELECT * FROM books")
    response.json(results[0])
    connection.end()
})

app.post("/books", async (request, response) => {
    const connection = await newConnection();
    const { titulo, autor } = request.body
    const results = await connection.query("INSERT INTO books (titulo,autor) VALUES(?,?)", [titulo, autor])
    response.json(results)
    connection.end()
})

app.get("/books/:id", async (request, response) => {
    const connection = await newConnection();
    const id = request.params.id
    const results = await connection.query("SELECT * FROM books WHERE id=?", id)
    response.json(results[0])
    connection.end()
})

//app.put()

app.put("/books/:id", async (request, response) => {
    const connection = await newConnection();
    const id = request.params.id;
    const { titulo, autor } = request.body;
    const results = await connection.query("UPDATE books SET titulo=?, autor=? WHERE id=?",
        [titulo, autor, id]);
        response.json(results[0]);
        connection.end();
});

//app.delete()

app.delete("/books/:id", async (request, response) => {
    const connection = await newConnection();
    const id = request.params.id
    const results = await connection.query("DELETE FROM books WHERE id=?", id)
    response.json(results[0])
    connection.end()
})

app.listen(4000)
console.log("Servidor Iniciado!")