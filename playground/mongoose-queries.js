const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");
// var id = "5afc718ba0da5d9c5b32e44611";
//
// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log("Todo by Id", todo);
// }).catch((e) => console.log(e));

var idUser = "5afc139e899d39145117b849";
User.findById(idUser).then((user) => {
  if (!user) {
    return console.log("Id not found");
  }
  console.log("User by Id", user);
}).catch((e) => console.log(e))
