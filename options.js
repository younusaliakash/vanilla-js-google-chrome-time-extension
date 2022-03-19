const nameInput  = document.getElementById("name-input");
const timeInput  = document.getElementById("time-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click" , () => {
    const name = nameInput.value;
    const notificationTime = timeInput.value;

    chrome.storage.sync.set({
        name,
        notificationTime
    }, () => {
        console.log(`Congratulation!! ${name} has been set as Name.
        Notification Time ${notificationTime}`)
    })
})

chrome.storage.sync.get(["name", "notificationTime"], (result) => {

    if(result.name !== undefined){
        nameInput.value = result.name
    } else{
        nameInput.value = "Set your Name here"
    }

    timeInput.value = result.notificationTime ?? 1000

} ) 