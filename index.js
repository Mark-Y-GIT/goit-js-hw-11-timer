const refs = {
  daysRef: document.querySelector('[data-value="days"]'),
  hoursRef: document.querySelector('[data-value="hours"]'),
  minutesRef: document.querySelector('[data-value="mins"]'),
  secondsRef: document.querySelector('[data-value="secs"]'),
};

class Timer {
  constructor({ targetDate, onEvent }) {
    this.targetDate = targetDate;
    this.onEvent = onEvent;
    this.iId = null;
  }

  start() {
    const startTime = this.targetDate;

    this.iId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      let time = this.getTimeComp(deltaTime);

      this.onEvent(time);

      if (time.days < 0) {
        clearInterval(this.iId);

        time = this.getTimeComp(0);
        this.onEvent(time);
      }
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComp(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

function updateWatch({ days, hours, mins, secs }) {
  refs.daysRef.textContent = days;
  refs.hoursRef.textContent = hours;
  refs.minutesRef.textContent = mins;
  refs.secondsRef.textContent = secs;
}

const countDown = new Timer({
  targetDate: new Date("Jan 1, 2022"),
  onEvent: updateWatch,
});

countDown.start();
