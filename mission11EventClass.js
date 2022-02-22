const EventEmitter = require("events");
const fs = require("fs");

class Mission11Event extends EventEmitter {
  constructor() {
    super();
    this.onHandler11();
  }
  onHandler11 = () => {
    this.on("mission10", (arrOfNames) => {
      fs.writeFile("./mission11.json", `${JSON.stringify(arrOfNames)}`, () => {});
    });
  };
  onEmitHandler11 = (arrOfNames) => {
    this.emit("mission10", arrOfNames);
  };
}

module.exports = new Mission11Event();
