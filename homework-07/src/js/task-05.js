const nameInputRef = document.getElementById("name-input")
const nameOutputRef = document.getElementById("name-output")

nameInputRef.addEventListener('input', updateNameValue);

function updateNameValue(e) {
    if (e.target.value === "") {
        nameOutputRef.textContent = "незнакомец";
    } else {
        nameOutputRef.textContent = e.target.value;
    }
};