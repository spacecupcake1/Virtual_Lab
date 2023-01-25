var farbe = "leer";
var blauStatus = 3;
var gelbStatus = 3;
var rotStatus = 3;

var blauCount = 0;
var gelbCount = 0;
var rotCount = 0;

const kolben = document.getElementById("kolben");


document.getElementById("reablau").addEventListener("click", function(event) {
    if(blauStatus != 0) {
        if(farbe == "gelb") {
            kolben.src = "images/kolben/kolbengrün.png";
            farbe = "grün";
        } else if (farbe == "rot") {
            kolben.src = "images/kolben/kolbenviolett.png";
            farbe = "violett";
        } else if (farbe == "grün" || farbe == "violett" || farbe == "orange") {
            kolben.src = "images/kolben/kolbenschwarz.png";
            farbe = "schwarz";
        } else if (farbe == "leer") {
            kolben.src = "images/kolben/kolbenblau.png";
            farbe = "blau";
        }
        blauCount++;
        refreshStatus("blau");
        addHistory("Wasser hinzugefügt");
    }
});

document.getElementById("reagelb").addEventListener("click", function(event) {
    if(gelbStatus != 0) {
        if(farbe == "blau") {
            kolben.src = "images/kolben/kolbengrün.png";
            farbe = "grün";
        } else if(farbe == "rot") {
            kolben.src = "images/kolben/kolbenorange.png";
            farbe = "orange";
        } else if(farbe == "grün" || farbe == "orange" || farbe == "violett") {
            kolben.src = "images/kolben/kolbenschwarz.png";
            farbe = "schwarz";
        } else if (farbe == "leer") {
            kolben.src = "images/kolben/kolbengelb.png";
            farbe = "gelb";
        }
        gelbCount++;
        refreshStatus("gelb");
        addHistory("Aceton hinzugefügt");
    }
})

document.getElementById("rearot").addEventListener("click", function(event) {
    if(rotStatus != 0) {
        if(farbe == "blau") {
            kolben.src = "images/kolben/kolbenviolett.png";
            farbe = "violett";
        } else if (farbe == "gelb") {
            kolben.src = "images/kolben/kolbenorange.png";
            farbe = "orange";
        } else if (farbe == "violett" || farbe == "orange" || farbe == "grün") {
            kolben.src = "images/kolben/kolbenschwarz.png";
            farbe = "schwarz";
        } else if (farbe == "leer") {
            kolben.src = "images/kolben/kolbenrot.png";
            farbe = "rot";
        }
        rotCount++;
        refreshStatus("rot");
        addHistory("Ethanol hinzugefügt");
    }
})


const reablau = document.getElementById("reablau");
const reagelb = document.getElementById("reagelb");
const rearot = document.getElementById("rearot");
function refreshStatus(farbe) {
    if(farbe == "blau") {
        blauStatus--;
        switch(blauStatus) {
            case 2:
                reablau.src = "images/reagenzien/reablau23.png";
                break;
            case 1:
                reablau.src = "images/reagenzien/reablau13.png";
                break;
            case 0:
                reablau.src = "images/reagenzien/realeer.png";
                break; 
        }
    } else if(farbe == "gelb") {
        gelbStatus--;
        switch(gelbStatus) {
            case 2:
                reagelb.src = "images/reagenzien/reagelb23.png";
                break;
            case 1:
                reagelb.src = "images/reagenzien/reagelb13.png";
                break;
            case 0:
                reagelb.src = "images/reagenzien/realeer.png";
                break;
        }
    } else if(farbe == "rot") {
        rotStatus--;
        switch(rotStatus) {
            case 2:
                rearot.src = "images/reagenzien/rearot23.png";
                break;
            case 1:
                rearot.src = "images/reagenzien/rearot13.png";
                break;
            case 0:
                rearot.src = "images/reagenzien/realeer.png";
                break;
        }
    }
}


//Funktion der To-Do-Liste
var todoList = document.getElementById("todoList");
//Wenn ein Item der Liste angeklickt wird, dann wird eine Funktion ausgeführt
todoList.addEventListener("click", function(event) {
    //Dem Item wird die Klasse "fertig" hinzugefügt.
    //In style.css wurde festgelegt, dass Text mit der Klasse "fertig" durchgestrichen ist
    event.target.classList.toggle("fertig");
    checkFinished();
});

//Prüft, ob alle Punkte der To-Do-Liste abgearbeitet wurden
function checkFinished() {
    var liste = document.getElementById("todoList").getElementsByTagName("li");
    var finished = true;
    for(var i = 0; i < liste.length; i++) {
        if(!liste[i].classList.contains("fertig")) {
            finished = false;
        }
    }
    if(finished) {
        alert("Du hast alle Aufgaben abgearbeitet! Super!")
    }
}



const historyList = document.getElementById("history")
var textnode;
function addHistory(text) {
    var eintrag = document.createElement("li");
    textnode = document.createTextNode(text);
    eintrag.appendChild(textnode);
    if(text.startsWith("Analyse")) {
        eintrag.classList.add("bold");
    }
    historyList.insertBefore(eintrag, historyList.firstChild)
}


document.getElementById("analyse").addEventListener("click", function(event) {
    var gemisch = "";
    
    var allCount = blauCount + gelbCount + rotCount;
    if(allCount == 0) {
        gemisch = "Der Kolben ist leer"
    }
    if(blauCount != 0) {
        var blauPerc = blauCount/allCount*100;
        gemisch = gemisch + blauPerc.toFixed(1) + "% Wasser  ";
    }
    if(gelbCount != 0) {
        var gelbPerc = gelbCount/allCount*100;
        gemisch = gemisch + gelbPerc.toFixed(1) + "% Aceton  ";
    }
    if(rotCount != 0) {
        var rotPerc = rotCount/allCount*100;
        gemisch = gemisch + rotPerc.toFixed(1) + "% Ethanol";
    }

    addHistory("Analyse durchgeführt: " + gemisch);
});


document.getElementById("neuerKolben").addEventListener("click", function(event) {
    document.getElementById("kolben").src = "images/kolben/kolben_leer.png";
    document.getElementById("reablau").src = "images/reagenzien/reablau33.png";
    document.getElementById("reagelb").src = "images/reagenzien/reagelb33.png";
    document.getElementById("rearot").src = "images/reagenzien/rearot33.png";
    blauStatus = 3;
    gelbStatus = 3;
    rotStatus = 3;
    farbe="leer";
    addHistory("Neuer Kolben geholt");
    addHistory("Chemikalien wieder aufgefüllt");
});

var delay = 150;
var temp = 20;
var regler = 0;
document.getElementById("regler").addEventListener("mousewheel", function(event) {
    if(regler == 0) {
        document.getElementById("regler").src = "images/regler/regler0.png";
        document.getElementById("brenner").src = "images/brenner_staender/brenner1.png";
        document.getElementById("thermometer").src = "images/thermometer/thermoleer.png";
        document.getElementById("temperatur").innerHTML = "21" ;
        temp = 21;
        regler++;
        addHistory("Brenner ausgeschaltet");
        addHistory("Es ist 21°C");
    } else if(regler == 1) {
            document.getElementById("regler").src = "images/regler/regler1.png";
            document.getElementById("brenner").src = "images/brenner_staender/brenner2.png";
            document.getElementById("thermometer").src = "images/thermometer/thermoblau.png";
            document.getElementById("temperatur").innerHTML = "50";
            temp = 50;
            regler++;
            addHistory("Brenner auf Stufe 1 geschaltet");
            addHistory("Es ist 50°C"); 
    } else if(regler == 2) {
        document.getElementById("regler").src = "images/regler/regler2.png";
        document.getElementById("brenner").src = "images/brenner_staender/brenner2.png";
        document.getElementById("thermometer").src = "images/thermometer/thermoorange.png";
        document.getElementById("temperatur").innerHTML = "70";
        regler++ ;
        temp = 70;
        addHistory("Brenner auf Stufe 2 geschaltet");
        addHistory("Es ist 70°C");
    } else if(regler == 3) {
        document.getElementById("regler").src = "images/regler/regler3.png";
        document.getElementById("brenner").src = "images/brenner_staender/brenner3.png";
        document.getElementById("thermometer").src = "images/thermometer/thermorot.png";
        document.getElementById("temperatur").innerHTML = "100";
        regler++ ;
        temp = 100;
        addHistory("Brenner auf Stufe 3 geschaltet");
        addHistory("Es ist 100°C");
    } else if(regler == 4) {
        regler = 0;
        document.getElementById("regler").src = "images/regler/regler0.png";
        document.getElementById("brenner").src = "images/brenner_staender/brenner0.png";
        document.getElementById("thermometer").src = "images/thermometer/thermoleer.png";
        document.getElementById("temperatur").innerHTML = "20";
        temp = 20;
        addHistory("Brenner ausgeschaltet")
        addHistory("Es ist 20°C");
    }
    checkBoiling(farbe, temp)
});


var reagenzTitel = document.getElementById("reagenzTitel");
var reagenzInfos = document.getElementById("reagenzInfos");

reablau.addEventListener("mouseenter", function(event) {
    reagenzTitel.classList.toggle("invisible");
    reagenzInfos.innerHTML=
    "In diesem Reagenzglas befindet sich <b>Wasser</b> - H2O <br>" +
    "Wasser ist eine farblose und geruchlose Flüssigkeit.<br>" +
    "Es ist der Hauptbestandteil von Lebewesen,  wird als Lösemittel für Nährstoffe oder auch zum Duschen und Kochen verwendet. " +
    "Wasser wird im Alltag so gut wie überall benötigt<br><br>" +
    'Strukturformel:<br> <img src="images/strukturformel_wasser.png" style="width: 108px; height: 75px;">';
    reagenzInfos.classList.toggle("invisible");
});
reablau.addEventListener("mouseleave", function(event) {
    reagenzTitel.classList.toggle("invisible");
    reagenzInfos.classList.toggle("invisible");
    reagenzInfos.innerHTML="";
});

reagelb.addEventListener("mouseenter", function(event) {
    reagenzTitel.classList.toggle("invisible");
    reagenzInfos.innerHTML=
    "In diesem Reagenzglas befindet sich <b>Aceton</b> - (CH3)2CO <br>" +
    "Aceton ist eine farblose Flüssigkeit und riecht süsslich.<br>" +
    "Es wird unter anderem für Nagellackentferner, Lösungsmittel oder auch als Kraftstoff-Zusatz verwendet.<br><br><br>" +
    'Strukturformel:<br> <img src="images/strukturformel_aceton.png">';
    reagenzInfos.classList.toggle("invisible");
});
reagelb.addEventListener("mouseleave", function(event) {
    reagenzTitel.classList.toggle("invisible");
    reagenzInfos.innerHTML="";
    reagenzInfos.classList.toggle("invisible");
});

rearot.addEventListener("mouseenter", function(event) {
    reagenzTitel.classList.toggle("invisible");
    reagenzInfos.innerHTML="In diesem Reagenzglas befindet sich <b>Ethanol</b> - C2H6O <br>" +
    "Ethanol ist eine farblose Flüssigkeit und riecht würzig.<br>" +
    "Es wird unter anderem für Reinigungsmittel, Parfüms, Bio-Ethanol als Kraftstoff oder auch gemischt mit Wasser als Frostschutzmittel für Autos verwendet.<br><br>" +
    'Strukturformel:<br> <img src="images/strukturformel_ethanol.png" style="width: 118px; height: 75px;">';
    reagenzInfos.classList.toggle("invisible");
});
rearot.addEventListener("mouseleave", function(event) {
    reagenzTitel.classList.toggle("invisible");
    reagenzInfos.classList.toggle("invisible");
    reagenzInfos.innerHTML="";
});


function checkBoiling(farbe, temp) {
    if(farbe == "blau" && temp >= 100) {
            kolben.src = "images/kolben/kolben_leer.png";
        reset();
    } else if(farbe == "gelb" && temp >= 50) {
            kolben.src = "images/kolben/kolben_leer.png";
        reset();
    } else if(farbe == "rot" && temp >= 78) {
            kolben.src = "images/kolben/kolben_leer.png";
        reset();
    } else if(farbe == "grün" && temp >= 64) {
            kolben.src = "images/kolben/kolben_leer.png";
        reset();
    } else if(farbe == "orange" && temp >= 20) {
            kolben.src = "images/kolben/kolben_leer.png";
        reset();
    } else if(farbe == "violett" && temp >= 92) {
            kolben.src = "images/kolben/kolben_leer.png";
        reset();
    } else if(farbe == "schwarz" && temp >= 70) {
        kolben.src = "images/kolben/kolben_leer.png";
    reset();
    }
}
function reset() {
    blauCount = 0;
    gelbCount = 0;
    rotCount = 0;
    farbe = "leer";
    addHistory("Siedepunkt erreicht");
}



function change() {
    document.getElementById("temperatur").innerHTML = [temp] + "°C";

  if (temp == 100) {
    temp = 100;
    document.getElementById("thermometer").src = "images/thermometer/thermorot.png";
    document.getElementById("regler").src = "images/regler/regler3.png";
    document.getElementById("brenner").src = "images/brenner_staender/brenner3.png";

  } 
  else if (temp == 20) {
    temp = 20;
    document.getElementById("thermometer").src = "images/thermometer/thermoleer.png";
    document.getElementById("regler").src = "images/regler/regler0.png";
    document.getElementById("brenner").src = "images/brenner_staender/brenner0.png";
  }
  else {
    temp++;
  }
  if (temp == 70) {
    document.getElementById("thermometer").src = "images/thermometer/thermoorange.png";
    document.getElementById("regler").src = "images/regler/regler2.png";
    document.getElementById("brenner").src = "images/brenner_staender/brenner2.png";
  } 
  if (temp == 50) {
    document.getElementById("thermometer").src = "images/thermometer/thermoblau.png";
    document.getElementById("regler").src = "images/regler/regler1.png";
    document.getElementById("brenner").src = "images/brenner_staender/brenner2.png";

  } 
  setTimeout(change, 1000);
}

window.onload = change();

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    var fiveMinutes = 60 * 30 ,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  };