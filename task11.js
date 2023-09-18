let welcomeEl = document.getElementById("welcome-el")

const name1 = "Dinobi"
const greetings = "Hi welcome back"
welcomeEl.innerText = greetings + name1

welcomeEl.innerText += welcomeEl.innerText + "👋"