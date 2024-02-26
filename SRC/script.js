document.addEventListener("DOMContentLoaded", function () {
  const timeDisplay = document.getElementById("time");
  const setAlarmBtn = document.getElementById("setAlarmBtn");
  const stopAlarmBtn = document.getElementById("stopAlarmBtn");
  const saveAlarmBtn = document.getElementById("saveAlarmBtn");
  const alarmSound = document.getElementById("alarmSound");

  let alarmTime = null;
  let alarmInterval = null;

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    if (
      alarmTime &&
      now.getHours() === alarmTime.getHours() &&
      now.getMinutes() === alarmTime.getMinutes() &&
      now.getSeconds() === 0
    ) {
      playAlarm();
    }
  }

  function playAlarm() {
    stopAlarmBtn.disabled = false;
    setAlarmBtn.disabled = true;
    alarmSound.play();
  }

  function stopAlarm() {
    stopAlarmBtn.disabled = true;
    setAlarmBtn.disabled = false;
    clearInterval(alarmInterval);
    alarmSound.onpause();
    alarmSound.currentTime = 0;
  }

  setAlarmBtn.addEventListener('click', function() {
alarmTimeInput.value = null;
alarmTimeInput.focus();
  }  )


  saveAlarmBtn.addEventListener('click', function() {
    const [hours, minutes] = alarmTimeInput.value.split(':');
    alarmTime.setHours(parseInt(hours));
    alarmTime.setMinutes(parseInt(minutes));
    alarmTime.setSeconds(0);
    alarmTime.setMilliseconds(0);
stopAlarm();
  });

  stopAlarmBtn.addEventListener('click', stopAlarm);

  updateTime();
  setInterval(updateTime, 1000);

});
