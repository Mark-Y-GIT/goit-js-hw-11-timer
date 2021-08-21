const refs = {
  daysRef: document.querySelector('[data-value="days"]'),
  hoursRef: document.querySelector('[data-value="days"]'),
  minutesRef: document.querySelector('[data-value="days"]'),
  secondsRef: document.querySelector('[data-value="days"]'),
};

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
