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
const lastBtnContainer = document.querySelector(".last-btn")



convertBtn.addEventListener("click", function () {
    if (inputEl.value === "" || isNaN(inputEl.value)){
        alert("You need to enter a number, before pressing 'Convert'")
    }
    let mynumber = inputEl.value;
    let darkMode = modeBtn.textContent;
    render(mynumber, darkMode);
})


function render(number, modes) {
    const obj = {
        metersToFeet: number * 3.281,
        feetToMeeters: number / 3.281,
        
        litersToGallon: number * .264,
        gallonsToLiters: number / .264,
        
        kilosToPounds: number  * 2.204,
        poundsToKilos: number / 2.204
    }
    modes = modes === "LIGHT MODE" ? true : false
    overallResults.innerHTML = `
        <div class="convert-txt ${modes && 'dark-subcontainer'}">
            <h3 class ="${modes &&  'dark-h3'}">Length(Meter/feet)</h3>
            <p id="length-result" class="p-result ${modes &&  'dark-p'}">${number} meters = ${obj.metersToFeet.toFixed(3)} feet | ${number} feet = ${obj.feetToMeeters.toFixed(3)} meters<p>
        </div>
        <div class="convert-txt ${modes &&  'dark-subcontainer'}">
            <h3 class ="${modes &&  'dark-h3'}">Volume(Liters/Gallons)</h3>
            <p id="volume-result" class="p-result ${modes &&  'dark-p'}">${number} liters = ${obj.litersToGallon.toFixed(3)} gallons | ${number} gallons = ${obj.gallonsToLiters.toFixed(3)} liters<p>
        </div>
        <div class="convert-txt ${modes ? 'dark-subcontainer' : ''}">
            <h3 class ="${modes &&  'dark-h3'}">Mass(Kilogram/Pounds)</h3> 
            <p id="mass-result" class="p-result  ${modes &&  'dark-p'}">${number} kilos = ${obj.kilosToPounds.toFixed(3)} pounds | ${number} pounds =${obj.poundsToKilos.toFixed(3)} kilos<p>
        </div>
 `
}

/*LIGHT/DARK MODE BUTTON --- 
I couldn't manage to get this work properly. It works if nothings is input, but once I have convert the button will not work. I know that it's because of the DOM manipulation, but couldn't manage to figure it out*/

modeBtn.addEventListener("dblclick", toggleMode)

/* const containerEl = document.querySelector(".container");

containerEl.addEventListener("dblclick", (event) => {
  if (event.target === modeBtn) {
    toggleMode();
  }
}); // this was an attempt to make the toggle button work*/

function toggleMode() {
    overallResults.classList.toggle("dark-container")
    modeBtn.classList.toggle("dark-btn")
    lastBtnContainer.classList.toggle("dark-container")

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