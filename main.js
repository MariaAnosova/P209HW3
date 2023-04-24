let origArray = [2,3,4];
document.getElementById("textbox1").value = origArray[0];
document.getElementById("textbox2").value = origArray[1];
document.getElementById("textbox3").value = origArray[2];

function squareFunction() {
    let squareResult = origArray.map(x => x ** 2);
    document.getElementById("textbox1").value = squareResult[0];
    document.getElementById("textbox2").value = squareResult[1];
    document.getElementById("textbox3").value = squareResult[2];
}

document.querySelector("#button2").addEventListener("click", function(){
    let cubeResult = origArray.map(x => x ** 3);
    document.getElementById("textbox1").value = cubeResult[0];
    document.getElementById("textbox2").value = cubeResult[1];
    document.getElementById("textbox3").value = cubeResult[2];
});

document.querySelector("#button3").addEventListener("click", getToFourth);
function getToFourth() {
    let toTheFourthResult = origArray.map(x => x ** 4);
    document.getElementById("textbox1").value = toTheFourthResult[0];
    document.getElementById("textbox2").value = toTheFourthResult[1];
    document.getElementById("textbox3").value = toTheFourthResult[2];
}


