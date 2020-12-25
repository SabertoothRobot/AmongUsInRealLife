function assignRoles() {
  var min = 1;
  var max = document.getElementById("numPlayers").value;
  var imposter = randomIntFromInterval(min, max);
  var prDivString = populateRoles(imposter, max);
  document.getElementById("pr").innerHTML = prDivString;
}

function populateRoles(imposter, max) {
  var strReturn = "";
  var i;
  for (i = 0; i < max; i++) {
   var j = i + 1;
   strReturn += "<center><button class=\"accordion\" onclick=\"showHide(" + j + ")\">Player " + j + "</button> </center><br>"
   if (j == imposter) {
     strReturn += imposterDiv(j);
   } else {
     strReturn += crewmemberDiv(j);
   }
   
  }
  return strReturn;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function crewmemberDiv(j) {

  return "<div class=\"playerRoles\" id=\"pt" + j + "\">" + "<font style=\"color:blue\">" + "Crewmember" + "</font>" + populateTasks() + "</div>";
}

function imposterDiv(j) {

  return "<div class=\"playerRoles\" id=\"pt" + j + "\">" + "<font style=\"color:red\">" + "Imposter" + "</font>" + populateTasks() + "</div>";
}

function populateTasks() {
 var array = assignTasks();
 var strDiv = "<div class=\"playerTasks\">";
 var i;
  for (i = 0; i < 5; i++) {
    strDiv += array[i] + "<br>";
  }
 strDiv += "</div>";
 return strDiv;
}


function assignTasks() {
  var array = ["Align Engine Output", "Calibrate Distributor", "Chart Course", "Clean O2 Filter", "Clear Asteroids", "Divert Power", "Empty Garbage", "Fix Wiring", "Fuel Engines", "Inspect Sample", "Prime Shields", "Stabilize Steering", "Start Reactor", "Submit Scan", "Swipe Card", "Unlock Manifolds", "Upload Data"];
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function showHide(j) {
  var eId = "pt" + j;
  var element = document.getElementById(eId);
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
}