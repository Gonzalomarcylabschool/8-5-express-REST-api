const Fellow = require("../models/Fellow");

// Get All (Read)
const serveFellows = (req, res) => {
  const fellowsList = Fellow.list();
  res.send(fellowsList);
}

// Get One (Read)
const serveFellow = (req, res) => {
  const { id } = req.params;
  const fellow = Fellow.find(Number(id));

  if (!fellow) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }
  res.send(fellow);
};

// Create
const createFellow = (req, res) => {
  const { fellowName } = req.body;
  if (!fellowName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const newFellow = Fellow.create(fellowName);
  res.send(newFellow);
};

// Update
const updateFellow = (req, res) => {
  const { updatedFellowName } = req.body;

  if (!updatedFellowName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const { id } = req.params;
  const updatedFellow = Fellow.editName(Number(id), updatedFellowName);

  if (!updatedFellow) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }

  res.send(updatedFellow);
}

// Delete
const deleteFellow = (req, res) => {
  const { id } = req.params;
  const didDelete = Fellow.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }

  res.sendStatus(204);
}

module.exports = {
  serveFellows,
  serveFellow,
  createFellow,
  updateFellow,
  deleteFellow
};