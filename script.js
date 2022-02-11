$(document).ready(function(){

  $('.buttonUp').click(function(){
    $('p:last-of-type').insertBefore($('p:first-of-type'));
  });

  $('.buttonDown').click(function(){
    $('p:first-of-type').insertAfter($('p:last-of-type'));
  });

});
