const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

//set some defaults (required if your JSON file is empty)

db.defaults({ todos: [] }).write();
const Todo = db.get("todos");
module.exports = {
  db,
  Todo
};
