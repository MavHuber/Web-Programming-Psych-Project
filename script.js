//Initialize variables
var r1Count = 0;
var r2Count = 0;
var r3Count = 0;
var fcrCount = 0;
var trCount = 0;
var demandCount = 0;
var compCount = 0;

var timer = 0;

function saveVar() {
    var vidName = document.getElementById('vidName').value;
    sessionStorage.setItem('vidName', vidName);

    var sessNum = document.getElementById('session').value;
    sessionStorage.setItem('sessNum', sessNum);

    var vidLen = document.getElementById('length').value;
    sessionStorage.setItem('vidLen', vidLen);
    
    var r1Text = document.getElementById('r1').value;
    sessionStorage.setItem('r1Text', r1Text);

    var r2Text = document.getElementById('r2').value;
    sessionStorage.setItem('r2Text', r2Text);

    var r3Text = document.getElementById('r3').value;
    sessionStorage.setItem('r3Text', r3Text);

    var fcrText = document.getElementById('fcr').value;
    sessionStorage.setItem('fcrText', fcrText);

    var trText = document.getElementById('tr').value;
    sessionStorage.setItem('trText', trText);

    var demandText = document.getElementById('demand').value;
    sessionStorage.setItem('demandText', demandText);

    var compText = document.getElementById('compliance').value;
    sessionStorage.setItem('compText', compText);
}

function setButtons() {
    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;

    var r1Text = sessionStorage.getItem('r1Text');
    document.getElementById('r1Btn').innerHTML = r1Text;
}