const button = {
    incr: document.querySelector("[data-action='increment']"),
    decr: document.querySelector("[data-action='decrement']"),
    total: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    button.total.textContent = counterValue;
}

button.incr.addEventListener('click', increment);

const decrement = () => {
    counterValue -= 1
    button.total.textContent = counterValue;
}

button.decr.addEventListener('click', decrement);