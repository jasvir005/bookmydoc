$(document).ready(function(){
  
 var dec = document.querySelector('.js-decimal');
    var initDec = new Powerange(dec, { decimal: false, callback: displayDecimalValue, max: 250, start: 125 });

 function displayDecimalValue() {
    document.getElementById('js-display-decimald').innerHTML = dec.value;
    }

    var changeInput = document.querySelector('.js-check-change')
    , initChangeInput = new Powerange(changeInput, { start: 50 });


    changeInput.onchange = function() {

      var crntval=changeInput.value;
      
      var totalmimles = crntval/2;
      
      totalmimles = Math.round(totalmimles);


       document.getElementById('js-display-changes').innerHTML = totalmimles;

    };


jQuery('.yoga-wordout').click(function(){

  jQuery('.sidebara').hide();
          jQuery(".language-icon img").removeClass('rotate2');
   
     if( jQuery('.sidebar').is(':visible') ) {
        jQuery('.sidebar').animate({ 'width': '0px' }, 'slow', function(){
            jQuery('.sidebar').hide();              
        });
        jQuery('#slow-slide').animate({ 'margin-right': '0px' }, 'slow');
        jQuery('.pane').css({ 'position': 'absolute' });
        jQuery('.student-test').show();
        jQuery(".transfromimg").removeClass('rotate2');
        jQuery(".scroll").removeClass('scroll02');
            jQuery(".yoga-wordout").css("height",'auto');
    }
    else {

        jQuery('.sidebar').show();
        jQuery('.sidebar').animate({ 'width': '250px' }, 'slow');
        jQuery('#slow-slide').animate({ 'margin-right': '250px' }, 'slow');
        jQuery('#slow-slide').css({ 'float': 'right','position':'static' },'slow');
        jQuery('.pane').css({ 'position': 'static' });
        jQuery('.menu').css({'display' :'none important','z-index':'-999'});
        jQuery(".menu").hide();
       jQuery('.student-test').hide();
        jQuery(".transfromimg").addClass('rotate2');
        jQuery(".yoga-wordout").css("height",'500px');
        jQuery(".scroll").addClass('scroll02');

    }


 
});

});