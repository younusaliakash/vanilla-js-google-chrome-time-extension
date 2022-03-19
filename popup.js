const timeElement = document.getElementById("time");
const userName = document.getElementById("name");
const timerElement = document.getElementById("timer");

const updateTime = () => {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `The Timer is at : ${time}`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `Time is : ${currentTime}`;
};

updateTime();
setInterval(updateTime, 1000);

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  function () {
    console.log("it's working");
  }
);

chrome.storage.sync.get(["name"], (result) => {
  if (result.name !== undefined) {
    userName.textContent = `Welcome back ${result.name}`;
  } else {
    userName.textContent = `Welcome Back Dear`;
  }
});

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", () => {
    console.log("start")
    chrome.storage.local.set({
        isRunning: true
    })
})

stopBtn.addEventListener("click", () => {
    console.log("stop")
    chrome.storage.local.set({
        isRunning: false
    })
})

resetBtn.addEventListener("click", () => {
    console.log("reset")
    chrome.storage.local.set({
        timer : 0,
        isRunning: false
    })
})
