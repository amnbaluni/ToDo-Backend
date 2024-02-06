const ToDoModel = require("../models/ToDoModel");

//CRUD Operations
//get request
module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};

//post request
module.exports.saveToDo = (req, res) => {
  const { toDo } = req.body;
  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully !");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong in Saving !" });
    });
};

//put request
module.exports.updateToDo = (req, res) => {
  //we require ID to update
  const { id } = req.params;
  const { toDo } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Updated Successfully !");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong in Update!" });
    });
};

//delete operation
module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully !");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong in Delete!" });
    });
};
