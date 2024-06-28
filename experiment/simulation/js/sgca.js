//on click of next button
var mpointer = 0;
var repeat = 0;
var a,
  p,
  lastp,
  n,
  b,
  q,
  flag = 0,
  avg,
  average;

let reactTemp = 0,
  rateConst = 0,
  freqFact = 0,
  actEng = 0,
  restartBtnClicked = false;

document.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("nextButton").style.visibility = "hidden";
  setTimeout(() => {
    var start = document.getElementById("start");
    start.innerText = "REACTION KINETIC STUDIES IN A BATCH REACTOR";
    start.style.fontSize = "x-large";
    start.classList.add("content-shine");
    start.style.whiteSpace = "normal"; // Allow text to wrap automatically
    // start.style.left = "300px";
    // start.style.top = "170px";
    document.getElementById("landingPageButton").style.visibility = "visible";
    document.getElementById("landingPageButton").style.cursor = "pointer";
    document.getElementById("landingPageButton").onclick = function () {
      gotoPage1();
    };
  }, 3000);
});

//erin
function goToStart(id) {
  var s = document.getElementById(id);
  s.innerText = "Click to choose Experiment or Evaluation";
  s.onclick = function () {
    document.getElementById("canvas1").style.visibility = "visible";
    document.getElementById("canvas0").style.visibility = "hidden";
    document.getElementById("landingPageButton").style.visibility = "hidden";
    document.getElementById("canvas5").style.visibility = "hidden";
    document.getElementById("canvas4").style.visibility = "hidden";
    document.getElementById("canvas3").style.visibility = "hidden";
    document.getElementById("canvas6").style.visibility = "hidden";
    document.getElementById("canvas2").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("demoOne").style.visibility = "hidden";
    document.getElementById("configExp").style.visibility = "hidden";
    document.getElementById("evaluatePart").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("goBackButton").style.visibility = "hidden";

    document.getElementById("msg1").style.visibility = "hidden";
    document.getElementById("volA").style.visibility = "hidden";
    document.getElementById("volB").style.visibility = "hidden";
    document.getElementById("tubeA").style.visibility = "hidden";
    document.getElementById("tubeB").style.visibility = "hidden";
    document.getElementById("ml1").style.visibility = "hidden";
    document.getElementById("ml2").style.visibility = "hidden";
    document.getElementById("addNaOH").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    document.getElementById("myClose").style.visibility = "hidden";
    document.getElementById("myClose1").style.visibility = "hidden";
    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("min").style.visibility = "hidden";
    document.getElementById("sec").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("addReading").style.visibility = "hidden";
    document.getElementById("conduct").style.visibility = "hidden";
    //eriii
    document.getElementById("buttonsList").style.display = "none";
    document.getElementById("buttonsList1").style.display = "none";
    document.getElementById("buttonsList2").style.display = "none";
    document.getElementById("buttonsList3").style.display = "none";
    document.getElementById("buttonsListEval").style.display = "none";
    document.getElementById("buttonsListEval1").style.display = "none";
    document.getElementById("buttonsListEval2").style.display = "none";
    // document.getElementById("addReading").style.display ="none";
    // document.getElementById("obserButton").style.display ="none";

    hideAllExperimentParts();
    document.getElementById("okBtn").style.visibility = "hidden";
    document.getElementById("addEthyl").style.visibility = "hidden";

    
    // console.log("hideworked");
  };
  // s.style.paddingTop="2px";
  s.style.fontSize = "12px";
}

function changeOriginal(id) {
  var r = document.getElementById(id);
  r.innerText = "Reaction Kinetic Studies in a Batch Reactor";

  document.getElementById("clearEvaluationReadings").style.visibility =
    "hidden";
}
// erin end

function gotoPage1() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
    document.getElementById("landingPageButton").style.visibility = "hidden";
  }
  simsubscreennum = 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";

  magic();
}

function navNext() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }

  simsubscreennum += 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  // document.getElementById('nextButton').style.visibility = "hidden";
  magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

var dataOn = 0,
  observeDataOn = 0;

function magic() {
  if (simsubscreennum == 1) {
    document.getElementById("observeTable").style.visibility = "hidden";
    document.getElementById("experimentID").style.visibility = "hidden";
    // hide();
  } else if (simsubscreennum == 2) {
    document.getElementById("observeTable").style.visibility = "hidden";

    if (chosenActivity == 1) {
      // console.log("One has chosen!");
      document.getElementById("experimentSetup").style.visibility = "hidden";
      document.getElementById("labelImage").style.visibility = "visible";
      document.getElementById("demoOne").style.display = "none";
      // document.getElementById('nextButton').style.visibility = "hidden";
      document.getElementById("configExp").style.visibility = "hidden";
    } else {
      console.log("2 has chosen");
      // document.getElementById("step2Heading").innerText = "Choose"
      document.getElementById("configExp").style.visibility = "visible";
      document.getElementById("landingPageButton").style.visibility = "hidden";
      // document.getElementById('nextButton').style.visibility = "hidden";
    }
    document.getElementById("evaluateButtonFromData").onclick = function () {
      reactTemp = document.getElementById("reactionTempEval").value;
      rateConst = document.getElementById("rateConstEval").value;
      freqFact = document.getElementById("freqFactor").value;
      actEng = document.getElementById("activationEnergy").value;
      if (
        !reactTemp ||
        reactTemp == null ||
        !rateConst ||
        rateConst == null ||
        !freqFact ||
        freqFact == null ||
        actEng == null ||
        !actEng
      ) {
        alert(" Enter appropriate values in the input field to proceed....");
      } else {
        document.getElementById("highlightEvaluation").style.visibility =
          "visible";
        addEvaluationFormReadingsToTable(
          reactTemp,
          rateConst,
          freqFact,
          actEng
        );
        document
          .getElementById("setupButtonEval")
          .classList.add("blinking-border");
      }
      setTimeout(function () {
        document
          .getElementById("setupButtonEval")
          .classList.remove("blinking-border");
        console.log("blink");
      }, 6000); // Remove the blinking border after 10 seconds
    };
    document.getElementById("clearEvaluationReadings").onclick = function () {
      console.log("hi clear all read button is clicked");
      clearTableRows("configInputTable");
      clearTableRows("configSimulatedTable");
    };
  } else if (simsubscreennum == 3) {
    document.getElementById("observeTable").style.visibility = "hidden";

    if (chosenActivity == 1) {
      document.getElementById("labelImage").style.visibility = "hidden";
      document.getElementById("experimentSetup").style.visibility = "visible";
      document.getElementById("demoOne").style.display = "none";

      document.getElementById("canvas0").style.visibility = "hidden";
      document.getElementById("landingPageButton").style.visibility = "hidden";
      // document.getElementById('nextButton').style.visibility = "hidden";
      document.getElementById("evaluatePart").style.visibility = "hidden";
    } else {
      // console.log("2 has chosen");
      // document.getElementById("step3Heading").innerText = "Evaluation!"
      document.getElementById("configExp").style.visibility = "hidden";
      // document.getElementById('nextButton').style.visibility = "hidden";

      document.getElementById("evaluatePart").style.visibility = "visible";
      document.getElementById("landingPageButton").style.visibility = "hidden";
    }
  } else if (simsubscreennum == 4) {
    document.getElementById("observeTable").style.visibility = "hidden";
    if (chosenActivity == 1) {
      // document.getElementById("waterSteady").style.visibility = "visible";

      // document.getElementById("infoAboutWhatToDo").innerText = "Click on Green button to start the motor.";
      document.getElementById("obserButton").onclick = "";
      document.getElementById("goBackButton").onclick = function () {
        document.getElementById("acetConc").innerHTML =
          document.getElementById("acConc").value + " M";
        document.getElementById("ohConce").innerHTML =
          document.getElementById("ohConc").value + " M";
        document.getElementById("reactTemp").innerHTML =
          document.getElementById("reactionTemp").value + "&deg; Celsius";
        document.getElementById("emailSend").style.visibility = "hidden";
        document.getElementById("noteremsel").style.visibility = "hidden";

        // erin
        if (dataOn == 0) {
          document.getElementById("displayExpValues").style.visibility =
            "visible";
          document.getElementById("myClose").style.visibility = "visible";
          document.getElementById("observations").style.visibility = "hidden";
          dataOn = 1;
          console.log(dataOn);
        } else if (dataOn == 1) {
          document.getElementById("displayExpValues").style.visibility =
            "hidden";
          document.getElementById("observations").style.visibility = "hidden";
          dataOn = 0;
          console.log(dataOn);
        }
      };
      // document.getElementById("infoAboutWhatToDo").style.color = "black";
      document.getElementById("obserButton").onclick = function () {
        // erin
        document.getElementById("restart").style.visibility = "hidden";
        document.getElementById("noteremsel").style.visibility = "hidden";

        if (observeDataOn == 0) {
          // document.getElementById("").onclick
          document.getElementById("observations").style.visibility = "visible";
          document.getElementById("myClose1").style.visibility = "visible";
          document.getElementById("myClose").style.visibility = "hidden";
          document.getElementById("displayExpValues").style.visibility =
            "hidden";

          observeDataOn = 1;
        } else if (observeDataOn == 1) {
          document.getElementById("observations").style.visibility = "hidden";
          // document.getElementById("goBackButton").style.visibility = "visible";
          observeDataOn = 0;
        }
      };
      document.getElementById("experimentSetup").style.visibility = "hidden";
      // document.getElementById("nextButton").style.visibility = "hidden";

      document.getElementById("experimentID").style.visibility = "visible";
      document.getElementById("obserButton").style.visibility = "visible";

      document.getElementById("restart").onclick = function () {
        clearInterval(incTimer);
        incTimer = 0;
        min = 0;
        sec = 0;
        document.getElementById("setupButton").disabled = false;
        document.getElementById("highlight").style.visibility = "hidden";
        document.getElementById("experimentID").style.visibility = "hidden";
        document.getElementById("goBackButton").style.visibility = "hidden";
        document.getElementById("obserButton").style.visibility = "hidden";
        document.getElementById("stopwatch").style.visibility = "hidden";
        document.getElementById("min").style.visibility = "hidden";
        document.getElementById("sec").style.visibility = "hidden";
        document.getElementById("time").style.visibility = "hidden";
        document.getElementById("conduct").style.visibility = "hidden";
        document.getElementById("setTemp").innerHTML = "";
        document.getElementById("curTemp").innerHTML = "";
        document.getElementById("conduct").innerHTML = "";
        document.getElementById("volA").value = "1";
        document.getElementById("volB").value = "1";
        document.getElementById("addReading").style.visibility = "hidden";
        document.getElementById("rodHori").style.animation = "";
        document.getElementById("liquidLid").style.height = "0px";
        document.getElementById("tubeA").style.animation = "";
        document.getElementById("tubeB").style.animation = "";
        document.getElementById("heater").style.backgroundColor = "#800000";
        document.getElementById("restart").style.visibility = "hidden";
        document.getElementById("demoButton").disabled = false;
        document.getElementById("labelButton").disabled = false;
        restartBtnClicked = true;
        clearTableRows("observTable");
        gotoSetup();
      };

      document.getElementById("clearTable").onclick = function () {
        // erin
        document.getElementById("emailSend").style.visibility = "hidden";
        document.getElementById("noteremsel").style.visibility = "hidden";

        clearTableRows("observTable");
      };

      document.getElementById("step4Heading").innerText = "Experiment";
      // document.getElementById("ratoReadings").innerText = "0.00";
      if (manoFluid == "Carbon tetrachloride") {
      } else if (manoFluid == "Mercury") {
      }

      numberOfClicks = 0;
      h1Val = 35.0;
      h2Val = 35.0;
      valOfRato = 0.0;

      document.getElementById("experimentSetup").style.visibility = "hidden";
      // document.getElementById("nextButton").style.visibility = "hidden";

      document.getElementById("experimentID").style.visibility = "visible";
      document.getElementById("landingPageButton").style.visibility = "hidden";
      // document.getElementById("obserButton").style.visibility = "visible";
      document.getElementById("overflow").style.visibility = "hidden";

      document.getElementById("overflow").style.visibility = "hidden";

      // document.getElementById("greenColor").style.cursor = "pointer";
      // document.getElementById("greenColor").style.visibility = "visible";

      // document.getElementById("greenColor").onclick = function() {
      //     document.getElementById("greenColor").style.visibility = "hidden";
      //     document.getElementById("redColor").style.visibility = "visible";
      //     document.getElementById('overflow').style.visibility = "hidden";

      //     numberOfVisit = 0;
      //     document.getElementById("gatewayRotate").onclick = "";
      //     // Change the NOTE content.
      //     document.getElementById("infoAboutWhatToDo").innerText = "Click on Gatewall to rotate it."
    } else {
      // console.log("2 has chosen");
    }
  } else if (simsubscreennum == 6) {
    if (chosenActivity == 1) {
      document.getElementById("observeTable").style.visibility = "hidden";
      document.getElementById("experimentSetup").style.visibility = "hidden";
      document.getElementById("labelImage").style.visibility = "hidden";
      document.getElementById("demoOne").style.display = "block";
      document.getElementById("canvas0").style.visibility = "hidden";
      document.getElementById("landingPageButton").style.visibility = "hidden";
      // document.getElementById('nextButton').style.visibility = "hidden";
    }
  }
}

function clearTableRows(tableId) {
  var rows = document.getElementById(tableId).rows;
  var i = rows.length;
  while (--i) {
    rows[i].parentNode.removeChild(rows[i]);
  }
}

let simRateConst = 0,
  simFreqFact = 0,
  simActEng = 0;
function addEvaluationFormReadingsToTable(
  reactTemp,
  rateConst,
  freqFact,
  actEng
) {
  $("#configInputTable")
    .delay(900)
    .queue(function (generate_table) {
      $(this).append(
        "<tr style='text-align:center; background-color:#269494;;'><td>" +
          reactTemp +
          "</td><td>" +
          rateConst +
          "</td><td>" +
          freqFact +
          "</td><td>" +
          actEng +
          "</td></tr>"
      );
      generate_table();
    });
  let temp = Number(document.getElementById("reactionTempEval").value);
  simRateConst = Number(
    648868942 *
      2.7182818284590452353602874713527 ** (-45574 / (8.314 * (temp + 273)))
  ); //same as k
  simFreqFact = 6.49;
  simActEng = 45574;
  $("#configSimulatedTable")
    .delay(900)
    .queue(function (generate_table) {
      $(this).append(
        "<tr style='text-align:center; background-color:#269494;;'><td>" +
          reactTemp +
          "</td><td>" +
          simRateConst.toFixed(2) +
          "</td><td>" +
          simFreqFact +
          "</td><td>" +
          simActEng +
          "</td></tr>"
      );
      generate_table();
    });
}

function dragAndRotate() {}

let liquidPos = { top: 235, height: 10 };
let imgIndex = 0;
let waveIndex = 0;

let totVol = 1,
  eaConc = 0.02,
  shConc = 0.02,
  setTemp = 30;
// k = 0;
let eaLPH = 0,
  shLPH = 0;

// slider
function rangeSlideEthyl(value) {
  eaConc = document.getElementById("acConc").value;
  document.getElementById("rangeValueEthyl").innerHTML = eaConc + " M";
  document.getElementById("acetConc").innerHTML = eaConc + " M";
}

function rangeSlideNaOH(value) {
  shConc = document.getElementById("ohConc").value;
  document.getElementById("rangeValueNaOH").innerHTML = shConc + " M";
  document.getElementById("ohConce").innerHTML = shConc + " M";
}

function addNaOHToReactor() {
  document.getElementById("setupButton").disabled = true;
  calcVaVb();

  console.log(
    Math.round(Va),
    Math.round(Vb),
    Number(Math.round(document.getElementById("volA").value)),
    Number(Math.round(document.getElementById("volB").value))
  );
  if (
    Math.round(Va) ==
      Number(Math.round(document.getElementById("volA").value)) &&
    Math.round(Vb) == Number(Math.round(document.getElementById("volB").value))
  ) {
    document.getElementById("msg2").style.visibility = "hidden";
    displayTubeA(document.getElementById("volA").value, tubeImagesA, "tubeA");
    displayTubeB(document.getElementById("volB").value, tubeImagesB, "tubeB");
    pourNaOH();
    //console.log("correct");
  } else {
    document.getElementById("msg2").style.visibility = "visible";
    setTimeout(function () {
      displayTubeA(document.getElementById("volA").value, tubeImagesA, "tubeA");
      displayTubeB(document.getElementById("volB").value, tubeImagesB, "tubeB");
      document.getElementById("msg2").style.visibility = "hidden";
    }, 2500);
  }
}

let time = 0,
  min = 0,
  sec = 0,
  incTimer = 0;
function addEthylToReactor() {
  console.log("addEthyl");
  document.getElementById("addEthyl").style.visibility = "hidden";
  document.getElementById("conduct").style.visibility = "visible";
  document.getElementById("tubeA").style.left = "265px";
  document.getElementById("tubeA").style.top = "280px";
  document.getElementById("tubeA").style.animation = "moveTubeA2 1s forwards";
  setTimeout(function () {
    document.getElementById("tubeA").style.left = "260px";
    document.getElementById("tubeA").style.top = "5px";
    document.getElementById("tubeA").style.animation =
      "rotateTubeB 0.5s forwards";
    setTimeout(function () {
      document.getElementById("tubeA").style.visibility = "hidden";
      document.getElementById("liquidLid").style.top = "200px";
      document.getElementById("liquidLid").style.height = "60px";
      setInterval(function () {
        waveAnimation();
      }, 500);
      setTimeout(function () {
        document.getElementById("restart").style.visibility = "visible";
        document.getElementById("stopwatch").style.visibility = "visible";
        document.getElementById("conduct").style.visibility = "visibile";
        console.log("conduct is visible");
        document.getElementById("min").style.visibility = "visible";
        document.getElementById("sec").style.visibility = "visible";
        document.getElementById("addReading").style.visibility = "visible";
        document.getElementById("time").style.visibility = "visible";
        time = 0;
        min = 0;
        sec = 0;
        // calcConductivity(time);
        document.getElementById("conduct").style.visibility = "visibile";
        if (document.getElementById("conduct").style.visibility === "visible") {
          document.getElementById("stopwatch").style.visibility = "visible";
          document.getElementById("min").style.visibility = "visible";
          document.getElementById("sec").style.visibility = "visible";
          document.getElementById("addReading").style.visibility = "visible";
        }
        console.log("stopwatch is visible");
        document.getElementById("conduct").innerHTML = actCond.toFixed(2);
        incTimer = setInterval(function () {
          incrementTimer();
        }, 1000);
      }, 100);
    }, 500);
  }, 1000);
}

let minToSec = 0;
function incrementTimer() {
  if (min <= 900) {
    sec = sec + 15;
    if (sec % 60 == 0) {
      sec = 0;
      document.getElementById("sec").innerHTML = sec;
      min = min + 1;
      document.getElementById("min").innerHTML = min;
    } else document.getElementById("sec").innerHTML = sec;
    minToSec = min * 60 + sec;
    calcConductivity(minToSec);
    document.getElementById("conduct").innerHTML = actCond.toFixed(2);
    console.log(min, sec, minToSec, actCond.toFixed(2));
  } else {
    clearInterval(incTimer);
    incTimer = 0;
  }
}

function setCurrentTemperature(newTemp, rTemp) {
  interval = setInterval(function () {
    if (newTemp <= rTemp) {
      document.getElementById("curTemp").innerHTML = newTemp;
      newTemp++;
      // console.log(newTemp);
    } else clearInterval(interval);
  }, 1000);
  // console.log(newTemp);
}

let interval = 0;
function pourNaOH() {
  document.getElementById("addNaOH").style.visibility = "hidden";
  document.getElementById("ml1").style.visibility = "hidden";
  document.getElementById("ml2").style.visibility = "hidden";
  document.getElementById("volA").style.visibility = "hidden";
  document.getElementById("volB").style.visibility = "hidden";
  document.getElementById("msg1").style.visibility = "hidden";
  document.getElementById("tubeA").style.animation = "moveTubeA1 1.2s forwards";
  setTimeout(function () {
    document.getElementById("tubeB").style.animation =
      "moveTubeB 1.2s forwards";
    setTimeout(function () {
      document.getElementById("tubeB").style.left = "250px";
      document.getElementById("tubeB").style.top = "5px";
      document.getElementById("tubeB").style.animation =
        "rotateTubeB 0.5s forwards";
      setTimeout(function () {
        document.getElementById("liquidLid").style.top = "225px";
        document.getElementById("liquidLid").style.height = "40px";
        setInterval(function () {
          waveAnimation();
        }, 500);
        setTimeout(function () {
          document.getElementById("rodHori").style.animation =
            "rotateRodHori 0.5s infinite linear";
          setTimeout(function () {
            document.getElementById("tubeB").style.visibility = "hidden";
            document.getElementById("heater").style.backgroundColor = "red";
            rTemp = document.getElementById("reactionTemp").value;
            document.getElementById("setTemp").innerHTML = rTemp;
            setCurrentTemperature(rTemp - 4, rTemp);
            setTimeout(function () {
              document.getElementById("addEthyl").style.visibility = "visible";
              // document.getElementById("min").style.visibility = "visible";
              // document.getElementById("sec").style.visibility = "visible";
            }, 5500);
          }, 500);
        }, 200);
      }, 500);
    }, 1200);
  }, 300);
}

let waveImages = ["images/191.svg", "images/192.svg"];
const waveAnimation = function () {
  //console.log(waveIndex);
  if (waveIndex == 1) {
    waveIndex = 0;
  } else waveIndex = 1;
  document.getElementById("liquidLid").src = waveImages[waveIndex];
};

let tubeImagesA = [
  "images/A.png",
  "images/A100.png",
  "images/A300.png",
  "images/A600.png",
  "images/A800.png",
  "images/A1000.png",
];
let tubeImagesB = [
  "images/B.png",
  "images/B100.png",
  "images/B300.png",
  "images/B600.png",
  "images/B800.png",
  "images/B1000.png",
];

const displayTubeA = function (Va, tubeImages, imgId) {
  if (Va <= 300) imgIndex = 1;
  else if (Va > 300 && Va <= 900) imgIndex = 2;
  else if (Va > 900 && Va <= 1500) imgIndex = 3;
  else if (Va > 1500 && Va <= 2500) imgIndex = 4;
  else if (Va > 2500) imgIndex = 5;
  document.getElementById(imgId).src = tubeImages[imgIndex];
};

const displayTubeB = function (Va, tubeImages, imgId) {
  if (Va <= 300) imgIndex = 1;
  else if (Va > 300 && Va <= 900) imgIndex = 2;
  else if (Va > 900 && Va <= 1500) imgIndex = 3;
  else if (Va > 1500 && Va <= 2500) imgIndex = 4;
  else if (Va > 2500) imgIndex = 5;
  document.getElementById(imgId).src = tubeImages[imgIndex];
};

function gotoPage5() {
  for (temp = 0; temp <= 4; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 5;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  // document.getElementById("titleLarge").style.visibility = "hidden";
  document.getElementById("titleSmall").style.visibility = "visible";
  if (chosenActivity == 1) {
    document.getElementById("buttonsList").style.display = "block";
    document.getElementById("buttonsList1").style.display = "block";
    document.getElementById("buttonsList2").style.display = "block";
    document.getElementById("buttonsList3").style.display = "block";
    document.getElementById("demoButton").style.cursor = "pointer";
    document.getElementById("buttonsList1").style.opacity = "0.3";
    document.getElementById("buttonsList2").style.opacity = "0.3";
    document.getElementById("buttonsList3").style.opacity = "0.3";
    document.getElementById("buttonsListEval").style.display = "none";
    document.getElementById("buttonsListEval1").style.display = "none";
    document.getElementById("buttonsListEval2").style.display = "none";
    // document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("demoButton").onclick = function () {
      console.log("demo button");
      document.getElementById("stopwatch").style.visibility = "hidden";
      document.getElementById("highlight").style.visibility = "hidden";
      document.getElementById("min").style.visibility = "hidden";
      document.getElementById("sec").style.visibility = "hidden";
      document.getElementById("addReading").style.visibility = "hidden";
      document.getElementById("restart").style.visibility = "hidden";
      goto6th();
    };
  } else if (chosenActivity == 2) {
    document.getElementById("buttonsListEval").style.display = "block";
    document.getElementById("buttonsListEval1").style.display = "block";
    document.getElementById("buttonsListEval2").style.display = "block";
    document.getElementById("buttonsListEval1").style.opacity = "0.3";
    document.getElementById("buttonsListEval2").style.opacity = "0.3";
    console.log("evaluation");
    document.getElementById("buttonsList").style.display = "none";
    document.getElementById("buttonsList1").style.display = "none";
    document.getElementById("buttonsList3").style.display = "none";
    document.getElementById("buttonsList2").style.display = "none";
    document.getElementById("demoButtonEval").style.cursor = "pointer";
    // document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("demoButtonEval").onclick = function () {
      goto6th();
      document.getElementById("buttonsListEval1").style.opacity = "1";
    };
  }
  // document.getElementById("labelButton").onclick = function(){
  // 	gotoLabel();
  // }
}

function goto6th() {
  // console.log("At 6th canvas");
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 6;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  if (chosenActivity == 1) {
    document.getElementById("demoOne").style.visibility = "visible";
    document.getElementById("experimentID").style.visibility = "hidden";
    document.getElementById("canvas0").style.visibility = "hidden";
    document.getElementById("landingPageButton").style.visibility = "hidden";
    document.getElementById("buttonsList1").style.opacity = "1";
    document.getElementById("labelButton").style.cursor = "pointer";
    document.getElementById("labelButton").onclick = function () {
      console.log("label clicked");

      document.getElementById("msg1").style.visibility = "hidden";
      document.getElementById("volA").style.visibility = "hidden";
      document.getElementById("volB").style.visibility = "hidden";
      document.getElementById("tubeA").style.visibility = "hidden";
      document.getElementById("tubeB").style.visibility = "hidden";
      document.getElementById("ml1").style.visibility = "hidden";
      document.getElementById("ml2").style.visibility = "hidden";
      document.getElementById("addNaOH").style.visibility = "hidden";
      document.getElementById("observations").style.visibility = "hidden";
      document.getElementById("displayExpValues").style.visibility = "hidden";
      document.getElementById("myClose").style.visibility = "hidden";
      document.getElementById("myClose1").style.visibility = "hidden";
      document.getElementById("goBackButton").style.visibility = "hidden";
       document.getElementById("landingPageButton").style.visibility = "hidden";
       document.getElementById("addEthyl").style.visibility = "hidden";

      document.getElementById("obserButton").style.visibility = "hidden";
      document.getElementById("stopwatch").style.visibility = "hidden";
      document.getElementById("highlight").style.visibility = "hidden";
      document.getElementById("min").style.visibility = "hidden";
      document.getElementById("sec").style.visibility = "hidden";
      document.getElementById("addReading").style.visibility = "hidden";
      document.getElementById("restart").style.visibility = "hidden";
      gotoLabel();
    };
  } else if (chosenActivity == 2) {
    document.getElementById("demoTwo").style.visibility = "visible";
    document.getElementById("canvas0").style.visibility = "hidden";
    document.getElementById("landingPageButton").style.visibility = "hidden";

    //eriii
    document.getElementById("buttonsListEval").style.visibility = "visible";

    document.getElementById("labelButtonEval").style.cursor = "pointer";
    document.getElementById("labelButtonEval").onclick = function () {
    
      document.getElementById("demoTwo").style.visibility = "hidden";
      document.getElementById("clearEvaluationReadings").style.visibility =
        "hidden";
      document.getElementById("buttonsListEval2").style.opacity = "1";
      document.getElementById("evalBtn").style.display = "block";
      gotoLabel();
    };
  }
}

function gotoLabel() {
  // erinn

  document.getElementById("displayExpValues").style.visibility = "hidden";
  document.getElementById("obserButton").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 2;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  if (chosenActivity == 1) {
    //eriii
    // document.getElementById("buttonsListEval").style.visibility = "hidden";
    document.getElementById("buttonsList2").style.opacity = "1";

    document.getElementById("demoButton").onclick = function () {
      goto6th();
    };
    document.getElementById("setupButton").style.cursor = "pointer";
    document.getElementById("setupButton").onclick = function () {
      console.log("setup");

      document.getElementById("experimentSetup").style.visibility = "hidden";
      document.getElementById("canvas4").style.visibility = "hidden";
      document.getElementById("obserButton").style.visibility = "hidden";
      document.getElementById("stopwatch").style.visibility = "hidden";

      // erii
      document.getElementById("noteremsel").style.visibility = "hidden";
      document.getElementById("obcanvas").style.visibility = "hidden";
      document.getElementById("evalBtn").style.display = "none";
      gotoSetup();
    };
  } else if (chosenActivity == 2) {
    document.getElementById("demoButtonEval").onclick = function () {
      // console.log("Pressed demo");
      document.getElementById("demoTwo").style.visibility = "visible";
      document.getElementById("canvas0").style.visibility = "hidden";
      document.getElementById("landingPageButton").style.visibility = "hidden";
      //erii
      document.getElementById("configExp").style.visibility = "hidden";
      document.getElementById("canvas2").style.visibility = "hidden";
      document.getElementById("clearEvaluationReadings").style.visibility =
        "hidden";
      goto6th();
    };
    document.getElementById("setupButtonEval").style.cursor = "pointer";
    document.getElementById("setupButtonEval").onclick = function () {
      document.getElementById("demoTwo").style.visibility = "hidden";
      document.getElementById("clearEvaluationReadings").style.visibility =
        "visible";
      gotoSetup();
    };
  }
}

function gotoSetup() {
  h1Val = 35.0;
  h2Val = 35.0;
  valOfRato = 0.0;
  // console.log("Going to setup");

  // erii
  document.getElementById("noteremsel").style.visibility = "hidden";
  document.getElementById("obcanvas").style.visibility = "hidden";
  document.getElementById("buttonsList3").style.opacity = "1";

  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 3;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  document.getElementById("expButton").style.cursor = "pointer";
  document.getElementById("expButton").onclick = function () {
    document.getElementById("labelImage").style.visibility = "hidden";
    calcVaVb();
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("overflow").style.visibility = "hidden";
    document.getElementById("addEthyl").style.visibility = "hidden";

    console.log("obserButton");
    console.log("exp clicked");

    clearInterval(incTimer);
    incTimer = 0;
    min = 0;
    sec = 0;
    document.getElementById("setupButton").disabled = false;
    document.getElementById("highlight").style.visibility = "hidden";
    document.getElementById("experimentID").style.visibility = "hidden";
    document.getElementById("goBackButton").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("min").style.visibility = "hidden";
    document.getElementById("sec").style.visibility = "hidden";
    document.getElementById("time").style.visibility = "hidden";
    document.getElementById("conduct").style.visibility = "hidden";
    document.getElementById("setTemp").innerHTML = "";
    document.getElementById("curTemp").innerHTML = "";
    document.getElementById("conduct").innerHTML = "";
    document.getElementById("volA").value = "1";
    document.getElementById("volB").value = "1";
    document.getElementById("addReading").style.visibility = "hidden";
    document.getElementById("rodHori").style.animation = "";
    document.getElementById("liquidLid").style.height = "0px";
    document.getElementById("tubeA").style.animation = "";
    document.getElementById("tubeB").style.animation = "";
    document.getElementById("heater").style.backgroundColor = "#800000";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("demoButton").disabled = false;
    document.getElementById("labelButton").disabled = false;
    restartBtnClicked = true;
    clearTableRows("observTable");
    gotoSetup();

    document.getElementById("addNaOH").style.visibility = "visible";
    document.getElementById("ml1").style.visibility = "visible";
    document.getElementById("ml2").style.visibility = "visible";
    document.getElementById("tubeA").style.visibility = "visible";
    document.getElementById("tubeB").style.visibility = "visible";
    document.getElementById("volA").style.visibility = "visible";
    document.getElementById("volB").style.visibility = "visible";
    document.getElementById("msg1").style.visibility = "visible";
    document.getElementById("goBackButton").style.visibility = "visible";

    gotoExp();
    //for after restart button clicked

    if (restartBtnClicked) {
      incTimer = 0;
      clearInterval(incTimer);

      // document.getElementById("setupButton").disabled=true;
      document.getElementById("addNaOH").style.visibility = "visible";
      document.getElementById("addNaOH").style.visibility = "visible";
      document.getElementById("ml1").style.visibility = "visible";
      document.getElementById("ml2").style.visibility = "visible";
      document.getElementById("volA").style.visibility = "visible";
      document.getElementById("goBackButton").style.visibility = "visible";
      document.getElementById("obserButton").style.visibility = "visible";
      document.getElementById("volB").style.visibility = "visible";
      document.getElementById("msg1").style.visibility = "visible";
      document.getElementById("tubeA").src = "images/A.png";
      document.getElementById("tubeB").src = "images/B.png";
      document.getElementById("tubeA").style =
        "position: absolute; left: 520px; top:250px; z-index: 2;";
      document.getElementById("tubeB").style =
        "position: absolute; left: 662.5px; top:250px; z-index: 2;";
      document.getElementById("tubeA").style.visibility = "visible";
      document.getElementById("tubeB").style.visibility = "visible";
      restartBtnClicked = false;
    }
  };
  if (chosenActivity == 2) {
    document.getElementById("labelButtonEval").onclick = function () {
      document.getElementById("demoTwo").style.visibility = "hidden";
      document.getElementById("clearEvaluationReadings").style.visibility =
        "hidden";
      goBacktoStep2Eval();
    };
    document.getElementById("demoButtonEval").onclick = function () {
      document.getElementById("demoTwo").style.visibility = "visible";
      document.getElementById("canvas0").style.visibility = "hidden";
      document.getElementById("landingPageButton").style.visibility = "hidden";
      document.getElementById("clearEvaluationReadings").style.visibility =
        "hidden";
      goBacktoStep1Eval();
    };
  }
}

let Va = 0,
  Vb = 0;
let VbByVa = 0;
function calcVaVb() {
  V = Number(document.getElementById("reactorVol").value);
  console.log(V);
  M = Number(document.getElementById("intialMolar").value);
  //temp=Number(document.getElementById("reactionTemp").value);
  console.log(M);
  Cas = Number(eaConc);
  Cbs = Number(shConc);
  VbByVa = (M * Cas) / Cbs;
  Vb = (V * VbByVa) / (1 + VbByVa);
  Va = V - Vb;
  Va = Va * 1000;
  Vb = Vb * 1000;
  // console.log(V,M,Cas,Cbs,VbByVa,Vb,Va,Number(Math.round(document.getElementById("volA").value)),Number(Math.round(document.getElementById("volB").value)));
  // console.log("Prajna");
  console.log(Va, Vb);
}

//setInterval(function(){calcVaVb();},200);
let oldCond = 0;
let actCond = 0;
let tau = 0;
let Cao = 0;
let Cbo = 0;
let molRatio = 0;
let Xa = 0;
let Ca = 0;
let Cb = 0;
let condAmb = 0;
let Cas, Cbs, V, M, T, k, exp;

function calcConductivity(time) {
  calcVaVb();
  V = Number(Va + Vb);
  T = Number(document.getElementById("reactionTemp").value);
  //k  = Number(648868942 * (2.7182818284590452353602874713527  ** (-45574/(8.314*(T+273)))));
  //T=time;
  k = Number(
    648868942 *
      2.7182818284590452353602874713527 ** (-45574 / 8.314 / (T + 273))
  );
  //oldCond = actCond;
  // tau = (V * 3600) / (1000 * (Va + Vb));
  //tau = V * 3600 / 1000 / (Va + Vb);
  Cao = (Cas * Va) / (Va + Vb);
  Cbo = (Cbs * Vb) / (Va + Vb);
  M = (Cbs * Vb) / (Cas * Va);
  // exp=(2.7182818284590452353602874713527  ** (k*tau*Cao*(M-1)));
  exp = 2.7182818284590452353602874713527 ** (k * time * Cao * (M - 1));
  if (M > 1) {
    Xa = (M * (1 - exp)) / (1 - M * exp);
  } else {
    // Xa=(k*tau*Cao)/(1+k*tau*Cao);
    Xa = (k * time * Cao) / (1 + k * time * Cao);
  }
  Ca = Cao * (1 - Xa);
  Cb = Ca - Cao + Cbo;
  condAmb = (Cb + 0.000063) / 0.00026;
  actCond = condAmb / (1 + 0.0145 * (T - 28));
  if (actCond < 0) {
    actCond = 0;
  }
  console.log(`Cas = ${Cas}, 
	Cbs = ${Cbs},
	Va = ${Va},
	Vb = ${Vb},
	V = ${V},
	T = ${T},
	time = ${time},
	k = ${k},
	tau = ${tau},
	Cao = ${Cao},
	Cbo = ${Cbo},
	M = ${M},
	Xa = ${Xa},
	Ca = ${Ca},
	Cb = ${Cb},
	condAmb = ${condAmb},
	actCond = ${actCond}`);
}

// erinend

function goBacktoStep1Eval() {
  // console.log("Going to 6th one");
  document.getElementById("configExp").style.visibility = "hidden";
  document.getElementById("evaluatePart").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 6;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();
}

function goBacktoStep2Eval() {
  // console.log("Going to second");
  document.getElementById("evaluatePart").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 2;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";

  magic();
}
//errin
var flagForObserTable = false;
var flagForDisplayExpValues = false;
var numberOfVisit = 0;

function gotoExp() {
  if (numberOfVisit == 1) {
    numberOfVisit = 0;
  }
  // console.log("numberOfVisit. " + numberOfVisit);

  // console.log("Experiment part.");

  // erin
  document.getElementById("emailreq").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("remSelRead").style.visibility = "hidden";
  document.getElementById("emailTable").style.visibility = "hidden";
  document.getElementById("remAllRead").style.visibility = "hidden";
  document.getElementById("obcanvas").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "hidden";
  document.getElementById("demoOne").style.display = "none";
  document.getElementById("experimentSetup").style.visibility = "hidden";

  document.getElementById("displayExpValues").style.visibility = "hidden";
  for (temp = 0; temp <= 6; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum = 4;
  //erinn
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  magic();

  if (manoFluid == "Carbon tetrachloride") mfdensity = 1600;
  else mfdensity = 13600;

  document.getElementById("setupButton").onclick = function () {
    // hideAllExperimentParts();
    console.log("setup2");
    document.getElementById("msg1").style.visibility = "hidden";
    document.getElementById("volA").style.visibility = "hidden";
    document.getElementById("volB").style.visibility = "hidden";
    document.getElementById("tubeA").style.visibility = "hidden";
    document.getElementById("tubeB").style.visibility = "hidden";
    document.getElementById("ml1").style.visibility = "hidden";
    document.getElementById("ml2").style.visibility = "hidden";
    document.getElementById("addNaOH").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("myClose").style.visibility = "hidden";
    document.getElementById("myClose1").style.visibility = "hidden";
    document.getElementById("goBackButton").style.visibility = "hidden";
    document.getElementById("addEthyl").style.visibility = "hidden";

    clearInterval(incTimer);
    incTimer = 0;
    min = 0;
    sec = 0;
    document.getElementById("setupButton").disabled = false;
    document.getElementById("highlight").style.visibility = "hidden";
    document.getElementById("experimentID").style.visibility = "hidden";
    document.getElementById("goBackButton").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("min").style.visibility = "hidden";
    document.getElementById("sec").style.visibility = "hidden";
    document.getElementById("time").style.visibility = "hidden";
    document.getElementById("conduct").style.visibility = "hidden";
    document.getElementById("setTemp").innerHTML = "";
    document.getElementById("curTemp").innerHTML = "";
    document.getElementById("conduct").innerHTML = "";
    document.getElementById("volA").value = "1";
    document.getElementById("volB").value = "1";
    document.getElementById("addReading").style.visibility = "hidden";
    document.getElementById("rodHori").style.animation = "";
    document.getElementById("liquidLid").style.height = "0px";
    document.getElementById("tubeA").style.animation = "";
    document.getElementById("tubeB").style.animation = "";
    document.getElementById("heater").style.backgroundColor = "#800000";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("demoButton").disabled = false;
    document.getElementById("labelButton").disabled = false;
    restartBtnClicked = true;
    clearTableRows("observTable");
    gotoSetup();

    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("highlight").style.visibility = "hidden";
    document.getElementById("min").style.visibility = "hidden";
    document.getElementById("sec").style.visibility = "hidden";
    document.getElementById("addReading").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("overflow").style.visibility = "hidden";

    //eriii
    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("remSelRead").style.visibility = "hidden";
    document.getElementById("remAllRead").style.visibility = "hidden";
    document.getElementById("emailTable").style.visibility = "hidden";
    document.getElementById("noteremsel").style.visibility = "hidden";
    document.getElementById("emailSend").style.visibility = "hidden";
    document.getElementById("emailreq").style.visibility = "hidden";
    // eriend

    document.getElementById("displayExpValues").style.visibility = "hidden";
    //erinnn
    flagForDisplayExpValues = false;
    // console.log("The flag value on moving to the Setup is: ", flagForDisplayExpValues);
    flagForObserTable = false;
    // console.log("The flag value on moving to the Setup is: ", flagForObserTable);
    goBacktoStep2();
  };
  document.getElementById("labelButton").onclick = function () {
    
    document.getElementById("msg1").style.visibility = "hidden";
    document.getElementById("volA").style.visibility = "hidden";
    document.getElementById("volB").style.visibility = "hidden";
    document.getElementById("tubeA").style.visibility = "hidden";
    document.getElementById("tubeB").style.visibility = "hidden";
    document.getElementById("ml1").style.visibility = "hidden";
    document.getElementById("ml2").style.visibility = "hidden";
    document.getElementById("addNaOH").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("myClose").style.visibility = "hidden";
    document.getElementById("myClose1").style.visibility = "hidden";
    document.getElementById("goBackButton").style.visibility = "hidden";
    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("min").style.visibility = "hidden";
    document.getElementById("sec").style.visibility = "hidden";
    document.getElementById("time").style.visibility = "hidden";
    document.getElementById("conduct").style.visibility = "hidden";
    document.getElementById("addReading").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("landingPageButton").style.visibility = "hidden";

    hideAllExperimentParts();
    //eriii

    //  document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("remSelRead").style.visibility = "hidden";
    document.getElementById("remAllRead").style.visibility = "hidden";
    document.getElementById("emailTable").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    flagForDisplayExpValues = false;
    // console.log("The flag value on moving to the Setup is: ", flagForDisplayExpValues);
    flagForObserTable = false;
    // console.log("The flag value on moving to the Setup is: ", flagForObserTable);
    gotoLabel();
  };
  document.getElementById("demoButton").onclick = function () {
    hideAllExperimentParts();
    //eriii
    console.log("demo clicked");

    document.getElementById("msg1").style.visibility = "hidden";
    document.getElementById("volA").style.visibility = "hidden";
    document.getElementById("volB").style.visibility = "hidden";
    document.getElementById("tubeA").style.visibility = "hidden";
    document.getElementById("tubeB").style.visibility = "hidden";
    document.getElementById("ml1").style.visibility = "hidden";
    document.getElementById("ml2").style.visibility = "hidden";
    document.getElementById("addNaOH").style.visibility = "hidden";
    document.getElementById("observations").style.visibility = "hidden";
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("myClose").style.visibility = "hidden";
    document.getElementById("myClose1").style.visibility = "hidden";
    document.getElementById("goBackButton").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("min").style.visibility = "hidden";
    document.getElementById("sec").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("addReading").style.visibility = "hidden";
    document.getElementById("conduct").style.visibility = "hidden";
    document.getElementById("addEthyl").style.visibility = "hidden";

    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("remSelRead").style.visibility = "hidden";
    document.getElementById("remAllRead").style.visibility = "hidden";
    document.getElementById("emailTable").style.visibility = "hidden";

    clearInterval(incTimer);
    incTimer = 0;
    min = 0;
    sec = 0;
    document.getElementById("setupButton").disabled = false;
    document.getElementById("highlight").style.visibility = "hidden";
    document.getElementById("experimentID").style.visibility = "hidden";
    document.getElementById("goBackButton").style.visibility = "hidden";
    document.getElementById("obserButton").style.visibility = "hidden";
    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("min").style.visibility = "hidden";
    document.getElementById("sec").style.visibility = "hidden";
    document.getElementById("time").style.visibility = "hidden";
    document.getElementById("conduct").style.visibility = "hidden";
    document.getElementById("setTemp").innerHTML = "";
    document.getElementById("curTemp").innerHTML = "";
    document.getElementById("conduct").innerHTML = "";
    document.getElementById("volA").value = "1";
    document.getElementById("volB").value = "1";
    document.getElementById("addReading").style.visibility = "hidden";
    document.getElementById("rodHori").style.animation = "";
    document.getElementById("liquidLid").style.height = "0px";
    document.getElementById("tubeA").style.animation = "";
    document.getElementById("tubeB").style.animation = "";
    document.getElementById("heater").style.backgroundColor = "#800000";
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("demoButton").disabled = false;
    document.getElementById("labelButton").disabled = false;
    restartBtnClicked = true;
    clearTableRows("observTable");
    gotoSetup();

    document.getElementById("displayExpValues").style.visibility = "hidden";
    flagForDisplayExpValues = false;
    // console.log("The flag value on moving to the Setup is: ", flagForDisplayExpValues);
    flagForObserTable = false;
    // console.log("The flag value on moving to the Setup is: ", flagForObserTable);
    goto6th();
  };
}

function showFirstScreen() {
  // Show the first screen (Department of Chemical Engineering)
  document.getElementById("canvas0").style.visibility = "visible";
  document.getElementById("landingPageButton").style.visibility = "visible";
  document.getElementById("obserButton").style.visibility = "hidden";
  document.getElementById("stopwatch").style.visibility = "hidden";
  document.getElementById("highlight").style.visibility = "hidden";
  document.getElementById("min").style.visibility = "hidden";
  document.getElementById("sec").style.visibility = "hidden";
  document.getElementById("addReading").style.visibility = "hidden";
  document.getElementById("restart").style.visibility = "hidden";
  document.getElementById("goBackButton").style.visibility = "hidden";
  document.getElementById("clearEvaluationReadings").style.visibility =
    "hidden";

  document.getElementById("msg1").style.visibility = "hidden";
  document.getElementById("volA").style.visibility = "hidden";
  document.getElementById("volB").style.visibility = "hidden";
  document.getElementById("tubeA").style.visibility = "hidden";
  document.getElementById("tubeB").style.visibility = "hidden";
  document.getElementById("ml1").style.visibility = "hidden";
  document.getElementById("ml2").style.visibility = "hidden";
  document.getElementById("addNaOH").style.visibility = "hidden";
  document.getElementById("observations").style.visibility = "hidden";
  document.getElementById("displayExpValues").style.visibility = "hidden";
  document.getElementById("myClose").style.visibility = "hidden";
  document.getElementById("myClose1").style.visibility = "hidden";
  document.getElementById("conduct").style.visibility = "hidden";
  document.getElementById("addEthyl").style.visibility = "hidden";

  document.getElementById("demoOne").style.visibility = "hidden";
  document.getElementById("demoTwo").style.visibility = "hidden";
  document.getElementById("configExp").style.visibility = "hidden";
  document.getElementById("evaluatePart").style.visibility = "hidden";
  document.getElementById("labelImage").style.visibility = "hidden";
  document.getElementById("experimentSetup").style.visibility = "hidden";
  document.getElementById("canvas1").style.visibility = "hidden";
  document.getElementById("canvas2").style.visibility = "hidden";
  document.getElementById("canvas3").style.visibility = "hidden";
  document.getElementById("canvas4").style.visibility = "hidden";
  document.getElementById("experimentID").style.visibility = "hidden";

  document.getElementById("displayExpValues").style.visibility = "hidden";
  document.getElementById("observeTable").style.visibility = "hidden";
  document.getElementById("remSelRead").style.visibility = "hidden";
  document.getElementById("remAllRead").style.visibility = "hidden";
  document.getElementById("emailTable").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("obcanvas").style.visibility = "hidden";
  document.getElementById("canvas5").style.visibility = "hidden";
  document.getElementById("canvas6").style.visibility = "hidden";
  // document.getElementById("waterFlow").style.visibility = "hidden";
  // document.getElementById("waterSteady").style.visibility = "hidden";
  document.getElementById("addtoTableButton").style.visibility = "hidden";

 
}

function mclose() {
  document.getElementById("displayExpValues").style.visibility = "hidden";
  document.getElementById("myClose").style.visibility = "hidden";
  console.log("close clicked");
}

function mclose1() {
  gotoExp();
  if (flag) {
    document.getElementById("obcanvas").style.visibility = "visible";
    document.getElementById("myClose1").style.visibility = "visible";
    document.getElementById("myClose1").style.visibility = "visible";
    document.getElementById("observeTable").style.visibility = "visible";
    document.getElementById("remSelRead").style.visibility = "visible";
    document.getElementById("remAllRead").style.visibility = "visible";
    document.getElementById("emailTable").style.visibility = "visible";

    // document.getElementById("emailSend").style.visibility = "visible";
  } else {
    document.getElementById("emailreq").style.visibility = "hidden";
    document.getElementById("emailSend").style.visibility = "hidden";
    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("observeTable").style.visibility = "hidden";
    document.getElementById("remSelRead").style.visibility = "hidden";
    document.getElementById("remAllRead").style.visibility = "hidden";
    document.getElementById("emailTable").style.visibility = "hidden";
    document.getElementById("noteremsel").style.visibility = "hidden";
    document.getElementById("canvas4").style.display = "block";
  }
  document.getElementById("observations").style.visibility = "hidden";
  document.getElementById("myClose1").style.visibility = "hidden";
}

function hideAllExperimentParts() {
  document.getElementById("overflow").style.visibility = "hidden";

  document.getElementById("experimentID").style.visibility = "hidden";

  //erin
  document.getElementById("demoOne").style.visibility = "hidden";
  document.getElementById("demoTwo").style.visibility = "hidden";
  document.getElementById("displayExpValues").style.visibility = "hidden";
  document.getElementById("labelImage").style.visibility = "hidden";
  document.getElementById("experimentSetup").style.visibility = "hidden";
  document.getElementById("observeTable").style.visibility = "hidden";
  document.getElementById("obcanvas").style.visibility = "hidden";
  document.getElementById("remSelRead").style.visibility = "hidden";
  document.getElementById("remAllRead").style.visibility = "hidden";
  document.getElementById("emailTable").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("emailreq").style.visibility = "hidden";
}

// ADDED By Jaison.
var chosenActivity;

function selectAction(n) {
  chosenActivity = n;
  // console.log(chosenActivity);
  document.getElementById("landingPageButton").style.visibility = "hidden";
  simsubscreennum = 5;
  gotoPage5();
}

var Oridia = 0.1;

// function setoriDia() {
//     Oridia = document.getElementById("orificeDia").value;
//     // console.log(Oridia);
// }

var Typetap = "Corner Taps";
var L1 = 0,
  L2 = 0;

function setFittingused() {
  Typetap = document.getElementById("fittingType").value;
  // console.log(Typetap);
  if (Typetap == "Corner Taps") {
    L1 = 0;
    L2 = 0;
  } else if (Typetap == "D & D/2 taps") {
    L1 = 1;
    L2 = 0.47;
  } else if (Typetap == "1'' Taps") {
    L1 = 0.0254 / actualPipeDia;
    L2 = 0.0254 / actualPipeDia;
  }
  // console.log("L1:" + L1);
  // console.log("L2:" + L2);
}

var chosenPipeDia = 0.25;
var actualPipeDia = 0.0092;
var area;

function setPipeDia() {
  chosenPipeDia = document.getElementById("pipeDiaSelect").value;
  // console.log(chosenPipeDia);

  if (chosenPipeDia == 0.25) actualPipeDia = 0.0092;
  else if (chosenPipeDia == 0.5) actualPipeDia = 0.0157;
  else if (chosenPipeDia == 1.0) actualPipeDia = 0.0266;
  else if (chosenPipeDia == 1.5) actualPipeDia = 0.0408;

  // console.log("ActDia: " + actualPipeDia);
  area = (3.14 * Math.pow(actualPipeDia, 2)) / 4;
  // console.log("area1 " + area);
}

area = (3.14 * Math.pow(actualPipeDia, 2)) / 4;
// console.log("area1 " + area);
var processFluid = "Water";
var densitypf = 1000;
var viscositypf = 0.001;
var manoFluid = "Carbon tetrachloride";
var mfdensity = 1600;

function setProcessFluid() {
  processFluid = document.getElementById("processFluid").value;
  // console.log(processFluid);

  if (processFluid == "Water") {
    densitypf = 1000;
    viscositypf = 0.001;
  } else if (processFluid == "Kerosene") {
    densitypf = 820;
    viscositypf = 0.00215;
  }
  // console.log("dpf: " + densitypf);
  // console.log("vpf: " + viscositypf);
}

function setManoFluid() {
  manoFluid = document.getElementById("manoFluid").value;
  // console.log(manoFluid);
  if (manoFluid == "Carbon tetrachloride") {
    mfdensity = 1600;
  } else if (manoFluid == "Mercury") {
    mfdensity = 13600;
  }
  // console.log(manoFluid);
  // console.log("dmf: " + mfdensity);
}
if ((manoFluid = "Carbon tetrachloride")) mfdensity = 1600;
else mfdensity = 13600;

function setManoFluid() {
  manoFluid = document.getElementById("manoFluid").value;
  // console.log(manoFluid);
  if (manoFluid == "Carbon tetrachloride") {
    mfdensity = 1600;
  } else if (manoFluid == "Mercury") {
    mfdensity = 13600;
  }
  // console.log(manoFluid);
  // console.log("dmf: " + mfdensity);
}

// console.log("dpf: " + densitypf);
// console.log("dmf: " + mfdensity);
// console.log("vpf: " + viscositypf);

// erinnnnnnnend
var x = 0;
var numberOfClicks = 0;
var h1Val = 35.0;
var h2Val = 35.0;
var valOfRato = 0.0;
var valOfRatoNew = 0.0;
var h1Final = 35.0;
var h2Final = 35.0;
var h1New = 35.0;
var h2New = 35.0;

var heightLeft = 0;
var heightLeftNew = 0;
var heightRight = 0;
var heightRightNew = 0;

var topLeft = 0;
var topLeftNew = 0;
var topRight = 0;
var topRightNew = 0;

var heightPin = 0;
var heightPinNew = 0;
var topPin = 0;
var topPinNew = 0;
var cdeq1,
  cdeq2,
  e,
  c1,
  c2,
  c3,
  c4,
  c5,
  halfDeltaH = 0,
  dh = 0;
hf = 0;

function fluidMoveAndPinMove(angle) {
  h1Val = 0.0;
  h2Val = 0.0;
  valOfRato = 0.0;
  h1Final = 0.0;
  valOfRatoNew = 0.0;
  h2Final = 0.0;
  h1New = 0.0;
  h2New = 0.0;
  document.getElementById("waterPourSecondLongOne").style.visibility =
    "visible";
  document.getElementById("gatewayRotate").style.cursor = "auto";

  document.getElementById("addtoTableButton").style.visibility = "visible";

  // console.log("356 - angle:" + (356 - angle));
  if (manoFluid == "Mercury") {
    valOfRato = (356 - angle) * 0.1088;
    // console.log("multiplier: 0.0198"); //prior;0.1066..for mercury maxrota-37.92
  } else {
    valOfRato = (356 - angle) * 0.0339;
    // console.log("multiplier: 0.3158"); //prior;0.1066..for mercury maxrota-6.53
  }
  // console.log("Val of Rato is ", valOfRato);

  if (valOfRato < 0) {
    valOfRato = 0;
    h1New = 35.0;
    h2New = 35.0;
  }
  // valOfRato = (356 - angle) * 0.1066;
  valOfRatoNew = valOfRato.toFixed(2);
  // console.log("Val of Rato is ", valOfRatoNew);

  //Added by Haneena

  area = (3.14 * Math.pow(actualPipeDia, 2)) / 4;
  // console.log("area1 " + area);
  //first step of Calculation: Velocity
  var velocity = 0.0;

  velocity = valOfRatoNew / (60000 * area);
  // console.log("velocity: " + velocity);
  // console.log("densitypf: " + densitypf);
  // console.log("viscositypf: " + viscositypf);

  //2- Reynold's number
  var Nre = 0.0;
  // this.rho * this.pipedia * this.velocity / (this.visco
  Nre = (actualPipeDia * velocity * densitypf) / viscositypf;
  // console.log("Nre: " + Nre);
  lnNre = Math.log(Nre);
  // console.log("eq1: " + lnNre);

  // console.log("Oridia:before: " + Oridia);
  // console.log("actualPipeDia:before: " + actualPipeDia);
  betaExp = Oridia / 100 / actualPipeDia;
  // console.log("betaExp: after:" + betaExp);

  codExp = 0.0;
  hf = 0.0;
  dh = 0.0;
  // console.log("L1:" + L1);
  // console.log("L2:" + L2);
  codExp =
    0.5961 +
    0.0261 * betaExp * betaExp -
    0.216 * Math.pow(betaExp, 8) +
    0.000521 * Math.pow((1000000 * betaExp) / Nre, 0.7) +
    (0.0188 + 0.0063 * Math.pow((19000 * betaExp) / Nre, 0.8)) *
      Math.pow(1000000 / Nre, 0.3) *
      Math.pow(betaExp, 3.5) +
    (0.043 + 0.08 * Math.exp(-10 * L1) - 0.123 * Math.exp(-7 * L1)) *
      (1 - 0.11 * Math.pow((19000 * betaExp) / Nre, 0.8)) *
      (Math.pow(betaExp, 4) / (1 - Math.pow(betaExp, 4))) -
    0.031 *
      ((2 * L2) / (1 - betaExp) -
        0.8 * Math.pow((2 * L2) / (1 - betaExp), 1.1)) *
      Math.pow(betaExp, 1.3);
  hf = (1 - Math.pow(betaExp, 4)) / 2 / 9.8 / Math.pow(codExp / velocity, 2);
  dh = (hf * densitypf) / (mfdensity - densitypf);
  // cdeq1 = -10 * L1;
  // cdeq2 = -7 * L1;
  // console.log("cdeq1:" + cdeq1);
  // console.log("cdeq2:" + cdeq2);
  e = 2.7182;

  console.log("hf: " + hf);

  h1New = 35.0 + dh * 50;
  // console.log("The h1 new dec fixed is: ", h1New);
  h2New = 35.0 - dh * 50;
  // console.log("The h2 new dec fixed is: ", h2New);

  h1Final = h1New.toFixed(2);
  h2Final = h2New.toFixed(2);
  // console.log("The h1 final val is: ", h1Final);
  // console.log("The h2 final val is: ", h2Final);
  if (h1Final < 70) {
    document.getElementById("overflow").style.visibility = "hidden";
  }

  if (isNaN(h1Final) || isNaN(h2Final)) {
    h1Final = (0.0).toFixed(2);
    h2Final = (0.0).toFixed(2);
  }

  heightLeft = (356 - angle) * 0.093;
  heightLeftNew = heightLeft.toFixed(0);
  topLeft = (356 - angle) * 0.096;
  topLeftNew = topLeft.toFixed(0);

  heightRight = (356 - angle) * 0.104;
  heightRightNew = heightLeft.toFixed(0);
  topRight = (356 - angle) * 0.093;
  topRightNew = topLeft.toFixed(0);

  topPin = (356 - angle) * 0.19;
  topPinNew = topPin.toFixed(0);
  if (h1Final >= 69) {
    h1Final = (70.0).toFixed(2);
    h2Final = (0.0).toFixed(2);
    // console.log("The h1 final val is: ", h1Final);
    // console.log("The h2 final val is: ", h2Final);

    // valOfRatoNew = 37.92;
    // console.log("Overflow condition");
    document.getElementById("overflow").style.visibility = "visible";
    if (manoFluid == "Mercury") {
      document.getElementById("overflowMessage").innerHTML =
        "Manometric Fluid is about to Overflow.<br> Change the Manometer.";
      document.getElementById("okBtn").style.visibility = "visible";
      document.getElementById("overflow").style.visibility = "visible";
      document.getElementById("okBtn").onclick = function () {
        document.getElementById("overflow").style.visibility = "hidden";
        document.getElementById("okBtn").style.visibility = "hidden";
      };

      // console.log("Overflow mercury");
    } else
      document.getElementById("overflowMessage").innerHTML =
        "Manometric Fluid is about to Overflow.<br> Change the Manometer to Mercury.";
    document.getElementById("okBtn").style.visibility = "visible";
    document.getElementById("okBtn").style.visibility = "visible";
    document.getElementById("overflow").style.visibility = "visible";
    document.getElementById("okBtn").onclick = function () {
      document.getElementById("overflow").style.visibility = "hidden";
      document.getElementById("okBtn").style.visibility = "hidden";
    };
  }
  document.getElementById("leftCm").innerText = h1Final;
  document.getElementById("rightCm").innerText = h2Final;
  document.getElementById("ratoReadings").innerText = valOfRatoNew;

  document.getElementById("leftFluid").style.height =
    parseInt(37) + parseInt(heightLeftNew) + "px";
  document.getElementById("leftFluid").style.top =
    parseInt(318) - parseInt(topLeftNew) + "px";
  document.getElementById("rightFluid").style.height =
    parseInt(37) - parseInt(heightRightNew) + "px";
  document.getElementById("rightFluid").style.top =
    parseInt(318) + parseInt(topRightNew) + "px";
  // document.getElementById("rotatePin").style.top = parseInt(259) - parseInt(topPinNew) + "px";

  document.getElementById("leftPinkFluid").style.height =
    parseInt(37) + parseInt(heightLeftNew) + "px";
  document.getElementById("leftPinkFluid").style.top =
    parseInt(315) - parseInt(topLeftNew) + "px";
  document.getElementById("rightPinkFluid").style.height =
    parseInt(37) - parseInt(heightRightNew) + "px";
  document.getElementById("rightPinkFluid").style.top =
    parseInt(315) + parseInt(topRightNew) + "px";
  // document.getElementById("rotatePin").style.top = parseInt(259) - parseInt(topPinNew) + "px";

  document.getElementById("addtoTableButton").onclick = function () {
    document.getElementById("addtoTableButton").style.visibility = "hidden";
    var table = document.getElementById("observeTable");
    table.style.color = "#fff";
    var row = table.insertRow(1);
    // var n=1;
    // var id_name="row";
    // row.id=id_name+(n);n++;
    // console.log("row id is"+row.id);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = processFluid;
    cell2.innerHTML = manoFluid;
    cell3.innerHTML = valOfRatoNew;
    cell4.innerHTML = h1Final;
    cell5.innerHTML = h2Final;
  };
}

// ERIN
function observeTable(flag) {
  // console.log("Clicking on observe button");

  // console.log("the flag value is" + flag);

  if (flag) {
    document.getElementById("obcanvas").style.visibility = "visible";
    document.getElementById("myClose1").style.visibility = "visible";
    document.getElementById("observeTable").style.visibility = "visible";
    document.getElementById("remSelRead").style.visibility = "visible";
    document.getElementById("remAllRead").style.visibility = "visible";
    document.getElementById("emailTable").style.visibility = "visible";
    // document.getElementById("emailSend").style.visibility = "visible";
  } else {
    document.getElementById("emailreq").style.visibility = "hidden";
    document.getElementById("emailSend").style.visibility = "hidden";
    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("observeTable").style.visibility = "hidden";
    document.getElementById("remSelRead").style.visibility = "hidden";
    document.getElementById("remAllRead").style.visibility = "hidden";
    document.getElementById("emailTable").style.visibility = "hidden";
    document.getElementById("noteremsel").style.visibility = "hidden";
  }
}
// erin
function remAllRead() {
  // console.log("remove all selected");
  document.getElementById("emailreq").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "hidden";
  if (!document.getElementsByTagName || !document.createTextNode) return;
  // var table=document.getElementById('observeTable');
  var rows = document
    .getElementById("observeTable")
    .getElementsByTagName("thead")[0]
    .getElementsByTagName("tr");
  var rowsval = document
    .getElementById("observeTable")
    .getElementsByTagName("thead")[0];
  var i;
  for (i = 1; i < rows.length; i++) {
    // console.log("rows.length" + rows.length);
    // console.log("i value is " + i);
    $(rowsval.getElementsByTagName("tr")[i--]).remove();
    // console.log("loop works");
  }
  //$(rows).remove();
  //removes whole table:---------
  //table.remove();
  // console.log("removed");
}
// erin 08092021
function emailSend() {
  // console.log("email button clicked");
  document.getElementById("emailSend").style.visibility = "visible";
  document.getElementById("emailreq").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "hidden";
}
var emid;

function sendEmail() {
  var emid1 = document.getElementById("emailR");
  // console.log(emid1);
  emidlen = emid1.value.length;
  // console.log("email length is " + emidlen);
  if (emidlen > 0) {
    // console.log("send button clicked");

    // console.log(emid);

    document.getElementById("info").innerHTML = "";
    var myTab = document.getElementById("observeTable");

    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (i = 0; i < myTab.rows.length; i++) {
      // GET THE CELLS COLLECTION OF THE CURRENT ROW.
      var objCells = myTab.rows.item(i).cells;

      // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
      for (var j = 0; j < objCells.length; j++) {
        info.innerHTML = info.innerHTML + "   " + objCells.item(j).innerHTML;
      }
      info.innerHTML = info.innerHTML + "%0D%0A%0D%0A"; // ADD A BREAK (TAG).
    }
    // console.log("body is filled" + info);
    var mailBody = document.getElementById("info").innerHTML;
    window.location =
      "mailto:" + emid + "?subject=The Observation Data &body=" + mailBody;

    // console.log("data sent to mail");
  } else {
    // console.log("else is executing");
    document.getElementById("emailreq").style.visibility = "visible";
  }
}

function setemail(val) {
  emid = val;
  // console.log(emid);
}

function remSelRead() {
  // console.log("remove selected");
  document.getElementById("emailreq").style.visibility = "hidden";
  document.getElementById("emailSend").style.visibility = "hidden";
  document.getElementById("noteremsel").style.visibility = "visible";

  if (!document.getElementsByTagName || !document.createTextNode) return;
  var table = document.getElementById("observeTable");
  var idx = 0;
  var rows = document
    .getElementById("observeTable")
    .getElementsByTagName("thead")[0]
    .getElementsByTagName("tr");
  for (i = 1; i < rows.length; i++) {
    rows[i].onclick = function () {
      //alert(this.rowIndex + 1);
      idx = this.rowIndex;
      // console.log(idx);
      table.deleteRow(idx);
    };
  }
}
// erinend

// ERIN

function displayExpValues(flag) {
  // console.log("Clicking on exp button");
  // for (temp = 0; temp <= 7 ; temp++)
  // {
  // 	document.getElementById('canvas'+temp).style.visibility="hidden";
  // }
  // simsubscreennum = 4;
  // document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
  // simsubscreennum = 8;
  // document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
  // magic();
  if (flag) {
    document.getElementById("displayExpValues").style.visibility = "visible";
    document.getElementById("myClose").style.visibility = "visible"; // Add this line
  } else {
    document.getElementById("displayExpValues").style.visibility = "hidden";
    document.getElementById("myClose").style.visibility = "hidden"; // Ensure close button is hidden when data is hidden
  }
  // console.log("Oridia value is: ", Oridia, "and in terms of m is: ", (Oridia / 100));
  document.getElementById("oridia").innerHTML =
    (Oridia / 100).toFixed(3) + " meter(s)";
  document.getElementById("fituse").innerHTML = Typetap;
  document.getElementById("nompidia").innerHTML = chosenPipeDia + " inch";
  document.getElementById("acpidia").innerHTML = actualPipeDia + " m";
  document.getElementById("prflu").innerHTML = processFluid;
  document.getElementById("dprflu").innerHTML =
    densitypf + " Kg per Cubic meter";
  document.getElementById("vprflu").innerHTML = viscositypf + " Kg/ms";
  document.getElementById("mflu").innerHTML = manoFluid;
  document.getElementById("dmflu").innerHTML =
    mfdensity + " Kg per Cubic meter";
}

function gotoObservation() {
  // console.log("go to observ.");
  document.getElementById("waterFlow").style.visibility = "visible";
  // document.getElementById("waterSteady").style.visibility = "visible";
  document.getElementById("addtoTableButton").style.visibility = "hidden";

  document.getElementById("waterPourFirst").style.visibility = "visible";
  document.getElementById("waterPourSecondLongOne").style.visibility =
    "visible";

  document.getElementById("step4Heading").innerText = "Observations";
  document.getElementById("experimentID").style.visibility = "visible";
  document.getElementById("demoOne").style.display = "none";

  document.getElementById("leftFluidFinal").style.visibility = "hidden";
  document.getElementById("rightFluidFinal").style.visibility = "hidden";
  // document.getElementById("leftFluid").style.visibility = "hidden";
  // document.getElementById("rightFluid").style.visibility = "hidden";
  document.getElementById("leftFluidSecond").style.visibility = "hidden";
  document.getElementById("rightFluidSecond").style.visibility = "hidden";
  document.getElementById("leftFluidThird").style.visibility = "hidden";
  document.getElementById("rightFluidThird").style.visibility = "hidden";
  document.getElementById("leftFluidForth").style.visibility = "hidden";
  document.getElementById("rightFluidForth").style.visibility = "hidden";
  document.getElementById("leftFluidFifth").style.visibility = "hidden";
  document.getElementById("rightFluidFifth").style.visibility = "hidden";
  // document.getElementById("bottomU").style.visibility = "hidden";

  // document.getElementById("rotatePin").style.visibility = "hidden";
  document.getElementById("rotatePinFinal").style.visibility = "hidden";
  document.getElementById("rotatePinSecond").style.visibility = "hidden";
  document.getElementById("rotatePinThird").style.visibility = "hidden";
  document.getElementById("rotatePinForth").style.visibility = "hidden";
  document.getElementById("rotatePinFifth").style.visibility = "hidden";

  // document.getElementById("redColor").style.visibility = "hidden";
  // erin
  // document.getElementById("obserButton").style.visibility = "visible";
  // erin end

  document.getElementById("leftPinkFluidFinal").style.visibility = "hidden";
  document.getElementById("rightPinkFluidFinal").style.visibility = "hidden";
  // document.getElementById("leftPinkFluid").style.visibility = "hidden";
  // document.getElementById("rightPinkFluid").style.visibility = "hidden";
  document.getElementById("leftPinkFluidSecond").style.visibility = "hidden";
  document.getElementById("rightPinkFluidSecond").style.visibility = "hidden";
  document.getElementById("leftPinkFluidThird").style.visibility = "hidden";
  document.getElementById("rightPinkFluidThird").style.visibility = "hidden";
  document.getElementById("leftPinkFluidForth").style.visibility = "hidden";
  document.getElementById("rightPinkFluidForth").style.visibility = "hidden";
  document.getElementById("leftPinkFluidFifth").style.visibility = "hidden";
  document.getElementById("rightPinkFluidFifth").style.visibility = "hidden";
  // document.getElementById("bottomPinkU").style.visibility = "hidden";

  document.getElementById("setupButton").onclick = function () {
    document.getElementById("overflow").style.visibility = "hidden";
    // erin
    document.getElementById("emailreq").style.visibility = "hidden";
    document.getElementById("emailSend").style.visibility = "hidden";
    document.getElementById("obcanvas").style.visibility = "hidden";
    document.getElementById("observeTable").style.visibility = "hidden";
    document.getElementById("remSelRead").style.visibility = "hidden";
    document.getElementById("remAllRead").style.visibility = "hidden";
    document.getElementById("emailTable").style.visibility = "hidden";
    document.getElementById("noteremsel").style.visibility = "hidden";
    // erinend
    goBacktoStep2();
  };
}

function goBacktoStep2() {
  h1Val = 35.0;
  h2Val = 35.0;
  h1New = 35.0;
  h2New = 35.0;
  valOfRatoNew = 0.0;
  valOfRato = 0.0;

  document.getElementById("experimentID").style.visibility = "hidden";

  document.getElementById("observeTable").style.visibility = "hidden";

  simsubscreennum = 3;
  document.getElementById("canvas" + 4).style.visibility = "hidden";

  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("experimentSetup").style.visibility = "visible";
  document.getElementById("demoOne").style.display = "none";
  document.getElementById("canvas0").style.visibility = "hidden";
  document.getElementById("landingPageButton").style.visibility = "hidden";
  // document.getElementById('nextButton').style.visibility = "visible";
}

// ============================  EVALUATION PART

// var pipeLengthEval = 1;

// function setPipeLengthEval() {
//     pipeLengthEval = document.getElementById("pipeLengthEval").value;
//     // console.log(pipeLengthEval);
// }

var chosenPipeDiaEval = 0.25;
var actDiaEval = 0.0092;

var areaEval;

function setPipeDiaEval() {
  chosenPipeDiaEval = document.getElementById("pipeDiaSelectEval").value;
  // console.log(chosenPipeDiaEval);
  if (chosenPipeDiaEval == 0.25) actDiaEval = 0.0092;
  else if (chosenPipeDiaEval == 0.5) actDiaEval = 0.0157;
  else if (chosenPipeDiaEval == 1.0) actDiaEval = 0.0266;
  else if (chosenPipeDiaEval == 1.5) actDiaEval = 0.0408;

  // console.log("ActDia: " + actDiaEval);
  areaEval = (3.14 * Math.pow(actDiaEval, 2)) / 4;
  // console.log("area1 " + area);
}

var processFluidEval = "Water";

function setProcessFluidEval() {
  processFluidEval = document.getElementById("processFluidEval").value;
  // console.log(processFluidEval);
}

var manoFluidEval = "Carbon tetrachloride";

function setManoFluidEval() {
  manoFluidEval = document.getElementById("manoFluidEval").value;
  // console.log(manoFluidEval);
}

// Step 3

var evalSets = 1;

function setEvalSets() {
  evalSets = document.getElementById("evalSets").value;
  // console.log(evalSets);

  var table = document.getElementById("configInputTable");
  var table2 = document.getElementById("configResultTable");

  var rowCount = table.rows.length - 1;
  var rowCount2 = table2.rows.length - 1;
  // console.log("Pre count:  ", rowCount);
  if (rowCount > 0) {
    for (var x = 1; x <= rowCount; x++) {
      table.deleteRow(1);
    }
  }
  if (rowCount2 > 0) {
    for (var x = 1; x <= rowCount2; x++) {
      table2.deleteRow(1);
    }
  }

  for (var i = 1; i <= evalSets; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = `<input name="length" id="inputSet${i}0" style="width:60px;margin-left: 2px; display: block;"  type="number">`;
    cell2.innerHTML = `<input name="length" id="inputSet${i}1" style="width:60px;margin-left: 2px; display: block;" type="number">`;
    cell3.innerHTML = `<input name="length" id="inputSet${i}2" style="width:60px;margin-left: 2px; display: block;" type="number">`;
    cell4.innerHTML = `<input name="length" id="inputSet${i}3" style="width:60px;margin-left: 2px; display: block;" type="number">`;
  }
}

var lpm, pres, reyn, fric, cod, sideEq1, sideEq2, sideEq1final, sideEq2final;
var den,
  area2,
  diaMeter,
  lpmConvVelocity,
  visco,
  calculatedReyn,
  denMano,
  presInMeter,
  hf,
  calculatedFricFact,
  beta;

function evaluateConfig() {
  var evalSets = document.getElementById("evalSets").value;
  var errorMessage = document.getElementById("errorMessage");

  if (evalSets == 0 || evalSets == "") {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Please enter a valid number of sets";
    return;
  } else {
    errorMessage.style.display = "none";
  }

  var table = document.getElementById("configInputTable");
  var resultTable = document.getElementById("configResultTable");

  var rowCountPost = table.rows.length - 1;

  // console.log("Total rows: ", rowCountPost);
  for (var z = 1; z <= rowCountPost; z++) {
    var out = document.getElementById("showResRey");
    out.innerText = "Calculating...";

    // taking values from columns
    lpm = document.getElementById("inputSet" + z + "0").value;
    pres = document.getElementById("inputSet" + z + "1").value;
    reyn = document.getElementById("inputSet" + z + "2").value;
    fric = document.getElementById("inputSet" + z + "3").value;

    if (
      lpm !== "" ||
      lpm !== 0 ||
      pres !== "" ||
      pres !== 0 ||
      reyn !== "" ||
      reyn !== 0 ||
      fric !== "" ||
      fric !== 0
    ) {
      validRowExists = true;
    }

    presInMeter = pres / 100;
    if (processFluidEval == "Water") {
      den = 1000;
      // visco = 0.89;
      visco = 0.001;
    } else if (processFluidEval == "Kerosene") {
      den = 820;
      // visco = 0.00164;
      visco = 0.00215;
    }
    diaMeter = actDiaEval; // convert inch to meter
    // console.log("diaMeter: ", diaMeter);

    areaEval = (3.14 * diaMeter * diaMeter) / 4;
    // console.log("Area: ", areaEval);
    // console.log("Diameter is inch: ", chosenPipeDiaEval);
    // console.log("Diameter of the pipe in meter is: ", diaMeter);
    // console.log("Radius is: ", (diaMeter / 2));
    lpmConvVelocity = lpm / (60000 * areaEval); // convert lpm to m3/s              V E L O C I T Y

    calculatedReyn = (den * diaMeter * lpmConvVelocity) / visco;
    calculatedReyn = calculatedReyn.toFixed(5); // ======    toFixed(5)
    // console.log("Calculated Reynold's value is: ", calculatedReyn);

    var outFric = document.getElementById("showResInFric");

    // ========================================================= Friction Factor calculation.
    if (manoFluidEval == "Carbon tetrachloride") {
      denMano = 1600;
    } else if (manoFluidEval == "Mercury") {
      denMano = 13600;
    }
    // console.log("Manometric density value of " + manoFluidEval + " is: ", denMano);

    //calculate hf value
    hf = ((denMano - den) * presInMeter) / den;
    // console.log("Calculated hf value's: ", hf);

    //beta=Orifice diameter/Actual Dia
    beta = Oridia / 100 / diaMeter;
    // console.log(beta);
    sideEq1 = 1 - Math.pow(beta, 4);
    // console.log("sideEq1: " + sideEq1);
    sideEq2 = 2 * 9.81 * hf;
    // console.log("sideEq2: " + sideEq2);

    sideEq1final = Math.sqrt(sideEq1);
    // console.log("sideEq1final: " + sideEq1final);

    sideEq2final = Math.sqrt(sideEq2);
    // console.log("sideEq2final: " + sideEq2final);

    //cod-coefficient of discharge
    cod = ((lpm / 60000 / areaEval) * (sideEq1final / sideEq2final)).toFixed(4);
    // console.log("lpm" + lpm);
    // console.log("area2" + area2);

    // console.log("cod" + cod);
    // console.log("Length of pipe is: ", pipeLengthEval);
    // calculate FF
    // calculatedFricFact = ((2 * 9.8 * diaMeter * hf) / (4 * pipeLengthEval * lpmConvVelocity * lpmConvVelocity));
    // calculatedFricFact = calculatedFricFact * 10000;
    // calculatedFricFact = calculatedFricFact.toFixed(5); //========     toFixed(5)
    // console.log("Calculated F F value is: ", calculatedFricFact);
    if (isNaN(calculatedReyn)) {
      calculatedReyn = (0.0).toFixed(4);
    }
    if (isNaN(cod)) {
      cod = (0.0).toFixed(4);
    }
    // Compare Reynold's and Friction Factor.
    // console.log("The rey value taken in is: ", reyn);
    setTimeout(() => {
      // if the count of rows in result table is more than 3, increase the top of both of the result showing paragraph.
      var resultTable = document.getElementById("configResultTable");
      var rowCountPost = resultTable.rows.length - 1;
      // ======================================================= VERIFICATION MESSAGE
      // if(rowCountPost > 3){
      // 	out.style.top = "250px";
      // 	outFric.style.top = "280px";
      // }

      // if(calculatedReyn == reyn){
      // 	out.innerText = "Reynold's value is correct!";
      // 	out.style.color = "green";

      // }
      // else{
      // 	out.innerText = "Reynold's value is incorrect!";
      // 	out.style.color = "red";
      // }
      // if(calculatedFricFact == fric){
      // 	outFric.innerText = "Fraction Factot value is correct!";
      // 	outFric.style.color = "green";

      // }
      // else{
      // 	outFric.innerText = "Fraction Factot value is incorrect!";
      // 	outFric.style.color = "red";
      // }

      //   -----------------------       DELETING ALL ROWS AND CHANGING THE NUMBER OF SETS BACK TO 0.
      var table = document.getElementById("configInputTable");
      table.style.color = "#fff";
      var rowCounttt = table.rows.length - 1;
      // console.log("Count of rows after showing result is:  ", rowCounttt);
      // document.getElementById("evalSets").value = 0;
      // if (rowCounttt > 0) {
      //     for (var xx = 1; xx <= rowCounttt; xx++) {
      //         table.deleteRow(1);
      //     }
      // }
      out.innerText = "";
    }, 300);
    setTimeout(() => {
      out.innerText = "";
      outFric.innerText = "";
    }, 5000);

    // Add to result table.
    var row = resultTable.insertRow(z);
    row.style.color = "#fff";
    var reyCell = row.insertCell(0);
    var fricCell = row.insertCell(1);
    reyCell.innerHTML = calculatedReyn;
    fricCell.innerHTML = cod;
  }
}

function addReadingsToTable() {
  document.getElementById("highlight").style.visibility = "visible";
  document.getElementById("highlight").classList.add("blinking-border1");

  $("#observTable").queue(function (generate_table) {
    $(this).append(
      "<tr style='text-align:center;'><td>" +
        minToSec +
        "</td><td>" +
        actCond.toFixed(2) +
        "</td></tr>"
    );
    generate_table();
  });

  // Optionally, remove the blinking effect after some time
  setTimeout(function () {
    document.getElementById("highlight").classList.remove("blinking-border1");
    document.getElementById("highlight").style.visibility = "hidden";
  }, 5000); // Adjust the duration as needed
}
