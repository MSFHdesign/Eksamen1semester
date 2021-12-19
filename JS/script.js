var teas;
var os;

window.addEventListener('load', init);

function init(){
  teas = document.getElementById("teasere");
  os = document.getElementById("OS");
}

function sadle() {
  teas.innerHTML ="Du sidder sjældent ned, det er derfor vigtigt at sadlen er indstillet helt korrekt. Der er mange faktorer der har indflydelse på hvordan du sidder bedst på din MTB. Der kan med fordel læses vores fulde artikel her.";
  os.innerHTML="Sadle";
}
/*document.getElementById("teasere").innerHTML = " ";
  document.getElementById("OS").innerHTML ="Sadle";*/
function bremser() {
  teas.innerHTML = "De fleste MTB kører med skivebremser da dette giver den mest effektive bremseegenskab når du kører i skov, og findes i to typer. Mekanisk og Hydrauliske bremser. ";
  os.innerHTML ="Bremser";
}

function gear() {
  teas.innerHTML = "Der findes to typer gear. Indvendige og udvendige gear. <br> Indvendige gear: Vælg kun dette hvis du er sikker på du kun skal bruge den på veje eller stier. <br> Udvendige gear: Kræver mere vedligeholde, men er det rette valg til alt terræn. ";
  os.innerHTML ="Gear";
}

function pedal() {
  teas.innerHTML = "Selvom de kan virke lidt ubetydelige for dig som nybegynder, så er pedaler ikke noget du bare skal springe let og elegant henover. Pedaler er nemlig altafgørende, for det er dem, du driver din mountainbike frem med. Læs mere her. ";
  os.innerHTML ="Pedaler";
}

function suspension() { 
  teas.innerHTML = "Der findes to typer suspension, hardtail og full suspension. ";
  os.innerHTML ="Suspension";
}
 


function stel() {
  os.innerHTML = "For at få maksimal komfort og kraftoverførsel er  det vigtigt, at din nye MTB er i den helt rigtige størrelse, læs vores størrelsesguide.<br> Stellet kommet i to materialer. Aluminium og Carbon.";
  os.innerHTML ="Stel";
}
function daek() {
  teas.innerHTML = "Dæk med mønster er uundværligt ude i skoven - men mønsteret dæk får dig til at køre langsommere på veje.";
  os.innerHTML ="Dæk";
}

function tomspace() {
  teas.innerHTML = "Læs mere om den del af cyklen";
  os.innerHTML ="Klik på billedet";
}