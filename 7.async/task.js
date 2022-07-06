class AlarmClock  {
  constructor (alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock (time, callback, id) {
    if (id == null) {
      throw new Error('error text')
    } else if (this.alarmCollection.find(clock => clock.id === id) != undefined) {
      return console.error('Будильник с таким id уже существует');
    } else {
      return this.alarmCollection.push({time, callback, id});
    }
  }

  removeClock (id) {
    let startAlarmLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.id != id);
    let endAlarmLength = this.alarmCollection.length;
    return endAlarmLength < startAlarmLength;
  }

  getCurrentFormattedTime () {
    let localTime = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
    return localTime;
  }

  start() {
    let checkClock = (clock) => {
      let alarmTime = this.getCurrentFormattedTime()
      if (alarmTime === clock.time) {
        return clock.callback();
      }
    }
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(clock => checkClock(clock));
      }, 1000);
    }
  }

  stop () {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarm () {
    this.alarmCollection.forEach(clock => console.log(clock.id + "-" + clock.time));
  }

  clearAlarms () {
    this.stop();
    this.alarmCollection = [];
  }
}


let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("04:34", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("04:35", () => {console.log("Тебе лучше поторопиться"); phoneAlarm.removeClock(2)}, 2);
phoneAlarm.addClock("04:36", () => {console.log("Ну вот ты все проспал"); phoneAlarm.stop(); phoneAlarm.clearAlarms(); phoneAlarm.printAlarm() }, 3);
phoneAlarm.printAlarm();
phoneAlarm.start();