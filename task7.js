let count = 0;

function increment() {
    count += 1;
    document.getElementById("count").innerText = count;
    console.log(count);
}

increment()