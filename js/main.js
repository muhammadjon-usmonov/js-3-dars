var elSurveyForm=document.querySelector('.survey__form');
var elSurveyInput=elSurveyForm.querySelector('.survey__input');
var elSurveySelect=elSurveyForm.querySelector('.survey__select');
var elSurveyResult=document.querySelector('.survey__result');

var valuta_usd=1080.00;
var valuta_euro=12278.49;
var valuta_rubl=144.65;


elSurveyForm.addEventListener('submit', function(evt) {

    evt.preventDefault();

    var firstFighter=elSurveyInput.value.trim();

    var secondFighter=elSurveySelect.value.trim();



    if (secondFighter=== 'usd'){
        elSurveyResult.textContent=(firstFighter/valuta_usd).toFixed(7)+ " $";
    }

    if (secondFighter=== 'euro'){
        elSurveyResult.textContent=(firstFighter/valuta_euro).toFixed(7)+ " euro";

    } 

    if (secondFighter=== 'rubl'){
        elSurveyResult.textContent=(firstFighter/valuta_rubl).toFixed(7)+ " rubl";
      
    }

    
});





