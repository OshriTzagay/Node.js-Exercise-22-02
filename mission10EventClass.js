const EventEmitter = require("events");
const fs = require("fs");

class Mission10Event extends EventEmitter {
  constructor() {
    super();
    this.onHandler10();
    
  }
  onHandler10 = () => {
    this.on("mission10", (fileName,data ) => {
      fs.writeFile(`${fileName}.txt`,`${data}`,()=>{});
    });
  };
  onEmitHandler10 = (fileName,data) => {
    this.emit("mission10",fileName,data);
  };
}

module.exports = new Mission10Event();