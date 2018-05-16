// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp")

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5afbe69631d4900954c3f5ca")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5afbe05a0610864f7cb4f8c6")
  }, {
    $set: {
      name: "Mathias"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  //client.close()
});
