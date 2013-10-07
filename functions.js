$(document).ready(function(){

  //variables
  var recep = $('.recep'), // Where do you want to add the counter ? 
      i = 0;               // Set the number to 0 in order to increment it
  
      // Auto add the html that the plugin will be effective.
      recep.append('<div>You pressed <span id="res"></span> keys</div>');
  
  $('body').keyup(function(e){
    var res = $('#res');     // Where the number of keypress will appear.
    
    // If del is pressed, decrement the value of i.
    if(e.keyCode == 8){ 
      i--;
    }
    //Thanks to @TimPietrusky for his precious help.
    else {
      i++; // Else increment the value of i.
    } 
    
    //if the textarea is empty, reset the number incrementation.
    if (!$.trim($("textarea").val())) {
      res.empty().append(0);
      i = 0
    }
    else{
    // Add a class to the #res
    res.addClass('label label--blue').empty().append(i);
    } 
  });  
  
});
