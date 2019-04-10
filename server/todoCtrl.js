let saveTodos = []

module.exports = {
  newTodo: (req, res) => {
    let { todos } = req.body
    saveTodos = [...todos]
    res.send(saveTodos)
  },
  todos: (req, res) => {
    res.send(saveTodos)
  }
}