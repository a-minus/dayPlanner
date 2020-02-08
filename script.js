const schedule = document.querySelector('#schedule')

const times = [9,10,11,12,13,14,15,16,17]

let stored = localStorage.getItem("dayPlanner")

if (!stored) {
  stored = {}
  times.forEach((item) => {
    stored[item] = ""
  })

}
stored = JSON.parse(stored)

times.forEach(displayTime)

function displayTime(time) {
  const timeSlot = document.createElement('div')
  const slotValue = stored[time]
  timeSlot.innerHTML = `
    <span>${time}</span>
    <input placeholder="enter note" id="note-${time}" value="${slotValue}"/>
    <input type='button' value='save' onclick="saveNote(${time})"/>
  `
  schedule.appendChild(timeSlot)
}

function saveNote(time) {
  const noteInput = document.querySelector(`#note-${time}`)
  console.log(noteInput.value);
  stored[time] = noteInput.value
  localStorage.setItem("dayPlanner", JSON.stringify(stored))
}
