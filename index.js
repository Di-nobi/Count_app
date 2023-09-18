

let count = 0;
function increment() {
    // let count = 0;
    count += 1;
    let incre = document.getElementById("counter")
    incre.textContent = count;
    // console.log(count);
}

function save() {
    let data = count + " - "
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += data
    incre = count;
    count = 0;
    // console.log(count)
}