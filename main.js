function setup() {
    canvas = createCanvas(280, 280)
    canvas.center()
    background("white")
    canvas.mouseReleased(ClassifyUwU)
    classifier = ml5.imageClassifier("DoodleNet")
    synth = window.speechSynthesis
}


function clearCanvas() {
    background("white")
}

function draw() {
    strokeWeight(7)
    stroke(255, 193, 010)
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function ClassifyUwU() {
    classifier.classify(canvas, gotresult)
}

function gotresult(error, results) {
    if (error) {
        console.error(error)
    }
    console.log(results)
    document.getElementById('labal').innerHTML = 'lebael     =     ' + results[0].label
    document.getElementById('conigiden').innerHTML = 'confidande  =    ' + Math.round(results[0].confidence * 100) + '%'
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis)
    
}