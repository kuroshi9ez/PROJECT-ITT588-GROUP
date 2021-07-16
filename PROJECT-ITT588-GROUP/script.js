$('#calorie-calculator').submit(function(e){
  e.preventDefault();
  calcDailyCals();
});

$('#macro-calculator').submit(function(e){
  e.preventDefault();
  calcCalsFromMacros();
});

$('button[type="reset"]').click(function(){
  $('#results').fadeOut('fast',function(){
    $(this).html('');
  });
});

function calcCalsFromMacros(){
  let carbs = parseInt($('#carbs').val()) * 4;
  let protein = parseInt($('#protein').val()) * 4;
  let fat = parseInt($('#fat').val()) * 9;

  let result = carbs+protein+fat;
  
  $('#m-results').fadeOut('fast',function(){
    $(this).html('<h3>Estimated Daily Calories: ' + result + '</h3>').fadeIn('fast');
  });
  
}


function calcDailyCals(){
  let age = parseInt($('#age').val());
  let sex = $('input[name="sex"]:checked').val();
  let weight = parseFloat($('#weight').val());
  let height = parseFloat($("#inches").val());
  let activity = parseFloat($('#activity_level').val());
  let goal = parseInt($('#gain_loss_amount').val());
  
  let result;
  
	if (sex === 'male') {
    result = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * activity;
  } else {
    result = (447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age)) * activity;
  }
  
	result = Math.round(result + goal);
  
  calcDailyMacros(result);
  
  $('#results').fadeOut('fast',function(){
    $(this).html('<h3>Estimated Daily Calories: ' + result + '</h3>').fadeIn('fast');
  });    
  
  function calcDailyMacros(result){
    let carbs = (result * .4) /4; 
    let protein = (result * .3) /4; 
    let fat = (result * .3) / 9;
    
    $('#carbs').val(Math.round(carbs));
    $('#protein').val(Math.round(protein));
    $('#fat').val(Math.round(fat));
  }
  
  
}