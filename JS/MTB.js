var Start;
var Budget;
var Q1;
var Q2;
var Q3;
var Q4;
var os;

window.addEventListener('load', init);
function init(){
  Start = document.getElementById("start");
  Budget = document.getElementById("budget");
  Q1 = document.getElementById("q1");
  Q2 = document.getElementById("q2");
  Q3 = document.getElementById("q3");
  Q4 = document.getElementById("q4");
  os = document.getElementById("OS")
}

function next() {
  Start.style.display ="none";
  Budget.style.display = "block";
}


function next1() {
    Budget.style.display ="none";
    Q1.style.display = "block";
  
  }
  function next2(){
    Q1.style.display ="none";
    Q2.style.display = "block";
  }
  
  
  function next3(){
    Q2.style.display ="none";
    Q3.style.display = "block";
  
  }
  
  function next4(){
    Q3.style.display ="none";
    Q4.style.display = "block";
    os.innerText ="Bedst match:";
  }
  