let count = 0;

function increment() {
    count += 1;
    document.getElementById("counter").innerText = count;
    // console.log(count);
}

increment()