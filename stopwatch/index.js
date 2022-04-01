function Stopwatch() {
  let startTime,
    endTime,
    running,
    durationTime = 0;
  this.start = function () {
    if (running) {
      alert("you have started the stopwatch");
      throw new Error("Already started....");
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) {
      alert("you have not yet started the stopwatch");
      throw new Error("Not yet started....");
    }
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    durationTime += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    durationTime = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return durationTime;
    },
  });
}
const st = document.getElementById("time");
