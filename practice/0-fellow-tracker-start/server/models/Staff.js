const getId = require('../utils/getId');
const staffId= getId();
const staffs = [
  { name: 'Gonzalo', id: staffId() },
  { name: 'Ben', id: staffId() },
  { name: 'Carmen', id: staffId() },
  { name: 'Reuben', id: staffId() },
  { name: 'Maya', id: staffId() },
];

class Staff {
  
  static create(name) {
    const newStaff = {
      name,
      id: getId()
    }
    staffs.push(newStaff);
    return newStaff;
  }
  static list() {
    return [...staffs];
  }
  static find(id) {
    return staffs.find((staff) => staff.id === id);
  }
  static editName(id, newName) {
    const staff = Staff.find(id);
    if (!staff) return null;
    staff.name = newName;
    return staff;
  }
  static delete(id) {
    const staffIndex = staffs.findIndex((staff) => staff.id === id);
    if (staffIndex < 0) return false;

    staffs.splice(staffIndex, 1);
    return true;
  }
}
module.exports = Staff;