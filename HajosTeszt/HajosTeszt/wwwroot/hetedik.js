var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
   );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}

function kérdésMegjelenítés(kérdés) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdés].questionText

    if (kérdések[kérdés].image != "") {
        kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
    }
    else {
        kép.src = "";
    }

    válasz1.innerText = kérdések[kérdés].answer1
    válasz2.innerText = kérdések[kérdés].answer2
    válasz3.innerText = kérdések[kérdés].answer3
}

window.onload = () => {

    letöltés();

    document.getElementById("vissza").onclick = () => {


        if (kérdésSorszám == 0) {
            kérdésSorszám = kérdések.length - 1
            kérdésMegjelenítés(kérdésSorszám);
        }
        else {
            kérdésMegjelenítés(--kérdésSorszám);
        }
        document.getElementById("válasz1").style.background = "yellow";
        document.getElementById("válasz2").style.background = "yellow";
        document.getElementById("válasz3").style.background = "yellow";
    }

    document.getElementById("előre").onclick = () => {


        if (kérdésSorszám == kérdések.length - 1) {
            kérdésSorszám = 0;
            kérdésMegjelenítés(kérdésSorszám);
        }
        else {
            kérdésMegjelenítés(++kérdésSorszám);
        }
        document.getElementById("válasz1").style.background = "yellow";
        document.getElementById("válasz2").style.background = "yellow";
        document.getElementById("válasz3").style.background = "yellow";
    }


    document.getElementById("válasz1").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 1) {
            document.getElementById("válasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz1").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

    }

    document.getElementById("válasz2").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz2").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

    }

    document.getElementById("válasz3").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz3").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

    }
}