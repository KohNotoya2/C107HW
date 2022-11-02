function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3Ps23gExP/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(result,error) {
    if() {}

    else {
        console.log(error)
    }
}
