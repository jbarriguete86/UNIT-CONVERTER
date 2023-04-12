/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const overallResults = document.getElementById("overall-result")
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
const modeBtn = document.getElementById("mode-btn")
const header3 = document.querySelectorAll("h3")
const paragraphs = document.querySelectorAll(".p-result")
const resultContainer = document.querySelectorAll(".convert-txt")



convertBtn.addEventListener("click", function () {
    let mynumber = inputEl.value;
    let darkMode = modeBtn.textContent;
    render(mynumber, darkMode);
})


function render(number, modes) {
    const operations = [
        number * 3.281, 
        number / 3.281, 
        number * 0.264, 
        number / 0.264, 
        number * 2.204, 
        number / 2.204
    ]
    let results = []
    for (let i = 0; i < operations.length; i++) {
        results.push(operations[i]) // this part of the code is filling the array to avoid changing the DOM many times
    }
    overallResults.innerHTML = `
        <div class="convert-txt ${modes === "LIGHT MODE" ? 'dark-subcontainer' : ''}">
            <h3 class ="${modes === "LIGHT MODE" ? 'dark-h3' : ''}">Length(Meter/feet)</h3>
            <p id="length-result" class="${modes === "LIGHT MODE" ? 'dark-p' : ''}">${number} meters = ${results[0].toFixed(3)} feet | ${number} feet = ${results[1].toFixed(3)} meters<p>
        </div>
        <div class="convert-txt ${modes === "LIGHT MODE" ? 'dark-subcontainer' : ''}">
            <h3 class ="${modes === "LIGHT MODE" ? 'dark-h3' : ''}">Volume(Liters/Gallons)</h3>
            <p id="volume-result" class="${modes === "LIGHT MODE" ? 'dark-p' : ''}">${number} liters = ${results[2].toFixed(3)} gallons | ${number} gallons = ${results[3].toFixed(3)} liters<p>
        </div>
        <div class="convert-txt ${modes === "LIGHT MODE" ? 'dark-subcontainer' : ''}">
            <h3 class ="${modes === "LIGHT MODE" ? 'dark-h3' : ''}">Mass(Kilogram/Pounds)</h3> 
            <p id="mass-result" class="${modes === "LIGHT MODE" ? 'dark-p' : ''}">${number} kilos = ${results[4].toFixed(3)} pounds | ${number} pounds =${results[5].toFixed(3)} kilos<p>
        </div>
        <div class="last-btn">
            <button id="mode-btn" class="mde-btn ${modes === "LIGHT MODE" ? 'dark-btn' : ''}">${modes}</button>
            </div> `
}

//LIGHT/DARK MODE BUTTON --- I couldn't manage to get this work properly. It works if nothings is input, but once I have convert the button will not work. I know that it's because of the DOM manipulation, but couldn't manage to figure it out

modeBtn.addEventListener("dblclick", toggleMode)


function toggleMode() {
    overallResults.classList.toggle("dark-container")
    modeBtn.classList.toggle("dark-btn")
    for (let i = 0; i < paragraphs.length; i++) {
        resultContainer[i].classList.toggle("dark-subcontainer")
        header3[i].classList.toggle("dark-h3")
        paragraphs[i].classList.toggle("dark-p")
    }
    if (modeBtn.textContent === "DARK MODE") {
        modeBtn.textContent = "LIGHT MODE"
    } else {
        modeBtn.textContent = "DARK MODE"
    }
}