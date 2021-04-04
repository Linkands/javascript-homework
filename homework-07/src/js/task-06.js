const inputRef = document.getElementById("validation-input");
const inputLength = inputRef.getAttribute("data-length");

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (inputRef.value.length.toString() === inputLength) {
        inputRef.classList.add("valid")
        inputRef.classList.remove("invalid")
    }
    else if (inputRef.value.length === 0) {
        inputRef.classList.remove("valid");
        inputRef.classList.remove("invalid")
    }
    else if (inputRef.value.length.toString() !== inputLength && inputRef.value.length.toString() !== 0) {
        inputRef.classList.add("invalid")
        inputRef.classList.remove("valid")
    }
}
