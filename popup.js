const timeElement = document.getElementById("time");
const userName = document.getElementById("name");
const timerElement = document.getElementById("timer");

const updateTime = () => {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `${time} Sec`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `${currentTime}`;
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
    userName.innerHTML = `<h2 class="welcome_title">Welcome Back</h2>
                            <h2 class="username">${result.name}</h2>
     `;
  } else {
    userName.innerHTML = `<h2 class="welcome_title">Welcome Back</h2>
     `;
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
