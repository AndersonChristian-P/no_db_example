const express = require("express")
const app = express()
const port = 4000
const todoCtrl = require("./todoCtrl")

app.use(express.json())

// let todos = []

app.get("/api/start", todoCtrl.todos)

app.post("/api/new-todo", todoCtrl.newTodo)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})