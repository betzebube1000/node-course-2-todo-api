const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findByIdAndRemove("5afd29b5fbb05f51cc2e1aaf").then((todo) => {
  console.log(todo);
})
