const EventEmitter = require("events");
const fs = require("fs");

class Mission9Event extends EventEmitter {
  constructor() {
    super();
    this.onHandler();
    
  }
  onHandler = () => {
    this.on("writeToFile", (fileName,msg ) => {
      fs.writeFile(`${fileName}.txt`,`${msg}`,()=>{});
    });
  };
  onEmitHandler = (fileName,msg) => {
    this.emit("writeToFile",fileName,msg);
  };
}

module.exports = new Mission9Event();