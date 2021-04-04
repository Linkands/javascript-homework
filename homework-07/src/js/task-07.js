const fontSizeRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text")

fontSizeRef.addEventListener("input", changeTextSize)

function changeTextSize() {
    textRef.style["font-size"] = fontSizeRef.value + "px";
}