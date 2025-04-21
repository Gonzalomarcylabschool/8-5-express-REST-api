const Staff = require("../models/Staff");

// Get All (Read)
const serveStaffs = (req, res) => {
  const staffsList = Staff.list();
  res.send(staffsList);
}

// Get One (Read)
const serveStaff = (req, res) => {
  const { id } = req.params;
  const staff = Staff.find(Number(id));

  if (!staff) {
    return res.status(404).send({
      message: `No staff with the id ${id}`
    });
  }
  res.send(staff);
};

// Create
const createStaff = (req, res) => {
  const { staffName } = req.body;
  if (!staffName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const newStaff = Staff.create(staffName);
  res.send(newStaff);
};

// Update
const updateStaff = (req, res) => {
  const { updatedStaffName } = req.body;

  if (!updatedStaffName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const { id } = req.params;
  const updatedStaff = Staff.editName(Number(id), updatedStaffName);

  if (!updatedStaff) {
    return res.status(404).send({
      message: `No staff with the id ${id}`
    });
  }

  res.send(updatedStaff);
}

// Delete
const deleteStaff = (req, res) => {
  const { id } = req.params;
  const didDelete = Staff.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No staff with the id ${id}`
    });
  }

  res.sendStatus(204);
}

module.exports = {
  serveStaffs,
  serveStaff,
  createStaff,
  updateStaff,
  deleteStaff
};