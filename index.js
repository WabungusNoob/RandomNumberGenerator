


const EnterButton = document.getElementById("EnterButton");
const ResetButton = document.getElementById("ResetButton");

const RandomNumberLabel = document.getElementById("RandomNumber")

const Min = document.getElementById("MinInput")
const Max = document.getElementById("MaxInput")
let RandomNum = 0;


EnterButton.onclick = function Enter()
{
        RandomNum = Math.floor(Math.random() * (parseInt(Max.value) + 1 - parseInt(Min.value))) + parseInt(Min.value);
        RandomNumberLabel.textContent = RandomNum
        console.log(Min.value)
        console.log(Max.value)
}

ResetButton.onclick = function Reset()
{
    RandomNumberLabel.textContent = 0
    Min.value = ""
    Max.value = ""
}
