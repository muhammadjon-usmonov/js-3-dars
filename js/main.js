var elSurveyForm=document.querySelector('.survey__form');
var elSurveyInput=elSurveyForm.querySelector('.survey__input');
var elSurveySelect=elSurveyForm.querySelector('.survey__select');
var elSurveyResult=document.querySelector('.survey__result');

var valuta_usd=10840.00;
var valuta_euro=12278.49;
var valuta_rubl=144.65;


elSurveyForm.addEventListener('submit', function(evt) {

    evt.preventDefault();

    var firstNumber=elSurveyInput.value.trim();

    var secondNumber=elSurveySelect.value.trim();



    if (secondNumber=== 'usd'){
        elSurveyResult.textContent=(firstNumber/valuta_usd).toFixed(7)+ " $";
    }

    if (secondNumber=== 'euro'){
        elSurveyResult.textContent=(firstNumber/valuta_euro).toFixed(7)+ " euro";

    } 

    if (secondNumber=== 'rubl'){
        elSurveyResult.textContent=(firstNumber/valuta_rubl).toFixed(7)+ " rubl";
      
    }

    
});





