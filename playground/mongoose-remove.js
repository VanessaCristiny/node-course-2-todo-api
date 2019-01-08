const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

 Todo.findOneAndRemove({_id: '5c3509c09a26c2eb105137cf'}).then((todo) => {
   console.log(todo._doc);
 });

// Todo.findByIdAndRemove('5c34c1d9f7a5b30e9524c663').then((todo) => {
//   console.log(todo);
// });
