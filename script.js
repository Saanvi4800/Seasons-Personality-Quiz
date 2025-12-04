/*Add your JavaScript here*/
var summerScore=0;
var winterScore=0;
var springScore=0;
var fallScore=0;

var questionCount=0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", spring);
q1a3.addEventListener("click", summer);
q1a4.addEventListener("click", fall);

q2a1.addEventListener("click", spring);
q2a2.addEventListener("click", fall);
q2a3.addEventListener("click", winter);
q2a4.addEventListener("click", summer);

q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);
q3a3.addEventListener("click", fall);
q3a3.addEventListener("click", spring);

function summer(){
  summerScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "ss=" + summerScore);
}

function winter(){
  winterScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "ws=" + winterScore);
}

function spring(){
  springScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "sps=" + springScore);
}

function fall(){
  fallScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "fs=" + fallScore);
}