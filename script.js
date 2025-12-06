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

var displayResultButton = document.getElementById("displayResult")
var restartButton = document.getElementById("restart")


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
q3a3.addEventListener("click", fallSpring);

restartButton.addEventListener("click", resetQuiz);

function displayResult(){
  document.getElementById("result").innerHTML = resultjs ;
}

function fallSpring(){
  springScore += 1;
  fallScore += 1;
  questionCount += 1;
  
  if (questionCount == 3) {
    finalResult();
    displayResultButton.addEventListener("click", displayResult);
  }
}

function summer(){
  summerScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "ss=" + summerScore);

  if (questionCount == 3) {
    finalResult();
    displayResultButton.addEventListener("click", displayResult);
  }
}


function winter(){
  winterScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "ws=" + winterScore);

  if (questionCount == 3) {
    finalResult();
    displayResultButton.addEventListener("click", displayResult);
  }
}

function spring(){
  springScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "sps=" + springScore);

  if (questionCount == 3) {
    finalResult();
    displayResultButton.addEventListener("click", displayResult);
  }
}

function fall(){
  fallScore += 1;
  questionCount += 1;
  console.log("QC=" + questionCount + "fs=" + fallScore);

  if (questionCount == 3) {
    finalResult();
    displayResultButton.addEventListener("click", displayResult);
  }
}

var resultjs = "You have a little bit of it all!"
function finalResult(){
  if (fallScore > winterScore){
    if (fallScore > summerScore){
      if (fallScore > springScore){
        resultjs = "You are a Fall person"
      }
    }
  }
  if (winterScore > fallScore){
    if (winterScore > summerScore){
      if (winterScore > springScore){
        resultjs = "You are a Winter person"
      }
    }
  }
  if (springScore > winterScore){
    if (springScore > summerScore){
      if (springScore > fallScore){
        resultjs = "You are a Spring person"
      }
    }
  }
  if (summerScore > winterScore){
    if (summerScore  > springScore){
      if (summerScore  > fallScore){
       resultjs = "You are a Summer person"
      }
    }
  }
}

function resetQuiz(){
  summerScore=0;
  winterScore=0;
  springScore=0;
  fallScore=0;

  questionCount=0;
  document.getElementById("result").innerHTML = "You are a..." ;
  resultjs = "You have a little bit of it all!"
}