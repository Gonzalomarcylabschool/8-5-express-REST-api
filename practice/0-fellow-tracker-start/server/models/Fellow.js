const getId = require('../utils/getId');
const fellowId = getId();
const fellows = [
  { name: 'Zae', id: fellowId() },
  { name: 'Luis', id: fellowId() },
  { name: 'Yoda', id: fellowId() },
];

class Fellow {
  
  static create(name) {
    const newFellow = {
      name,
      id: getId()
    }
    fellows.push(newFellow);
    return newFellow;
  }
  static list() {
    return [...fellows];
  }
  static find(id) {
    return fellows.find((fellow) => fellow.id === id);
  }
  static editName(id, newName) {
    const fellow = Fellow.find(id);
    if (!fellow) return null;
    fellow.name = newName;
    return fellow;
  }
  static delete(id) {
    const fellowIndex = fellows.findIndex((fellow) => fellow.id === id);
    if (fellowIndex < 0) return false;

    fellows.splice(fellowIndex, 1);
    return true;
  }
}
module.exports = Fellow;