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


/*******Remove slider 0 value*********/

 $(".slider-wrapper .range-bar .range-min").text("");

  $(".slider-wrapper2 .range-bar .range-min").text("");
    $(".slider-wrapper2 .range-bar .range-min").text("0m");



/*******add  slider 250 value*********/
 $(".slider-wrapper .range-bar .range-max").text("");
    $(".slider-wrapper2 .range-bar .range-max").text("");
 $(".slider-wrapper .range-bar .range-max").text("$250");
    $(".slider-wrapper2 .range-bar .range-max").text("50m");

 

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















/*****************menu slide******************/

jQuery('#menuslide').click(function(){

 //alert("dfd");
         
     if( jQuery('.menu-slide').is(':visible') ) {
      //alert('close');
       jQuery('.search-page').css({ 'float': 'none'});
      
            jQuery('.menu-slide').animate({ 'width': '0px' }, 'fast');
            jQuery('.search-page').animate({ 'margin-left': '0px' }, 'fast');

    jQuery('.menu-slide').hide();
/*          jQuery('.menu-slide').hide();    
          jQuery('.menu-slide').animate({ 'width': '0px' }, 'slow', function(){
          jQuery('.menu-slide').show();              
          });
          jQuery('.menu-slide').animate({ 'margin-right': '0px' }, 'slow');
          jQuery('.menu-slide').css({ 'position': 'absolute' });*/
 
  
 
    }
    else {

     // alert("open");
         jQuery('.menu-slide').show();



           jQuery('.menu-slide').animate({ 'width': '250px' }, 'falst');
            jQuery('.search-page').animate({ 'margin-left': '250px'}, 'falst');
             jQuery('.search-page').css({ 'float': 'left'});
         
/*

        jQuery('.menu-slide').animate({ 'width': '250px' }, 'slow');
        jQuery('.menu-slide').animate({ 'margin-right': '250px' }, 'slow');
        jQuery('.menu-slide').css({ 'float': 'right','position':'static' },'slow');*/
   
   
    }


 
});



/************menu slide left****************/







$(".clear-lan-sex").click(function(){

//alert('hi');

$(".range-handle").css("left","0px");
$(".range-quantity").css("width","0px");
$('#cate-slide input:checkbox').removeAttr('checked');
$('#cate-slide label').css('color',"#fff");
$("#appendinto").html("");
$(".spelizationsids").html("");






$('.language-div input:radio').removeAttr('checked');
$('.gender-div input:radio').removeAttr('checked');



})




 
/*
 ***************filter div****************/

$(".gender-div").click(function() {
$(".selecedgender").html("");
 // alert('hi');
var ac= $( ".gender-div input:checked" ).val();
//alert(ac);
$(".selecedgender").append(ac);


});




$(".filter-div").click(function(){

//alert("hello");

$(".search-page").hide();

$("#search_rest_page").show();
  var selectedcate=$(".spelizationsids").text();

   var selecedgender=$(".selecedgender").text();
//  alert(selectedcate);
 var selectedcate= selectedcate.substring(1);
//var srch=selectedcate+'gender'+selecedgender;

if(selectedcate=="" && selecedgender=="" )
{
var selectedcate="40";
var selecedgender="";
}

if(selectedcate=="")
{
 var  selectedcate='1,2,3,4,5,6,7,8';
}




/*****************search*****************/



 jQuery.ajax({
type: "GET",
url: "http://gotaworkout.com/index.php/get_serachresult?gender="+selecedgender+"&selectedcate="+selectedcate,
dataType:'json',
 
success: function(searchresult) { 
var data="";
jQuery.each( searchresult, function( key, val ) {
var jas=JSON.stringify(val);  
var obj = jQuery.parseJSON( jas);
 

if(obj.id=="false")
{
data +="<div id='not_found'></div>";
}
else
{
if(obj.id==0)
{
data +="";
}
else
{
data +="<div id='searchlop1' class='discover-content"+obj.id+"'><div class='content-part'><div class='top-of-content'></div><div class='middel-part'><div class='left-part-middel'><div class='text-part-left'><h1>"+obj.firstname+" </h1><p></p></div></div><div class='text-right-part'><h1></h1></div></div></div></div>";
}
}



/**********second ajax********/


if(obj.speciality !=undefined)
{

  jQuery.ajax({

type: "GET",
url: "http://gotaworkout.com/index.php/get_cateid?selectedcated="+obj.speciality+"",
dataType:'json',
 
success: function(get_cateid) { 


var get_cpar= JSON.stringify(get_cateid);  
var get_cpars = jQuery.parseJSON( get_cpar);

var items=get_cpars.name;
var id=get_cpars.id;


     $(".discover-content"+obj.id+" .text-part-left p").html("");
 if(obj.speciality==id)
 {
  //alert("items");
$(".discover-content"+obj.id+" .text-part-left p").append(items);
 }
 else
 {
  //alert('false');
$(".discover-content"+obj.id+" .text-part-left"+obj.id+" p").append("");
 }





 
}
}); 

}


/***********second ajax**********/

});
if(data=="")
{
data ="<div id='not_found'></div>";
}

 $(".discover-content").html(data);

}  ///ajax request
});

/*******************search******************/



 

















 


}); /*filter div*/

/* *************filter div****************/








/************** back button***************/

$('.togo_backpage_img').click(function(){

$("#search_rest_page").css('display','none');

$(".search-page").show();


});

/***************back button****************/

$(".yoga-wordout").click(function(){
$("#appendinto").html("");
$(".spelizationsids").html("");

var a=$('.checkboxd-div1 input:checked').val();
var a1=$('.checkboxd-div1 input:checked').attr("speciality");
var b=$('.checkboxd-div2 input:checked').val();
var b1=$('.checkboxd-div2 input:checked').attr("speciality");
var c=$('.checkboxd-div3 input:checked').val();
var c1=$('.checkboxd-div3 input:checked').attr("speciality");
var d=$('.checkboxd-div4 input:checked').val();
var d1=$('.checkboxd-div4 input:checked').attr("speciality");
var e=$('.checkboxd-div5 input:checked').val();
var e1=$('.checkboxd-div5 input:checked').attr("speciality");
var f=$('.checkboxd-div6 input:checked').val();
var f1=$('.checkboxd-div6 input:checked').attr("speciality");
var g=$('.checkboxd-div7 input:checked').val();
var g1=$('.checkboxd-div7 input:checked').attr("speciality");
var h=$('.checkboxd-div8 input:checked').val();
var h1=$('.checkboxd-div8 input:checked').attr("speciality");
//alert(speciality);
if(a==undefined && a1==undefined)
{
 a='';
 a1='';
}
else{
var a = "PT"+','; 
var  a1= a1+','; 
}

if(b==undefined && b1==undefined)
{
 b='';
  b1='';
} 
else{
 var b = "CT"+','; 
  var b1 = b1+','; 
}
if(c==undefined && c1==undefined)
{
 c='';
  c1='';
}
else{
 var c = "Y"+','; 
  var c1 = c1+','; 
} 
if(d==undefined && d1==undefined)
{
 d='';
 d1='';
} 
else{
var d =  "A"+','; 
var d1 =  d1+','; 
}
if(e==undefined && e1==undefined)
{
 e='';
  e1='';
}
else{
var e =  "B"+',';
var e1 =  e1+','; 
} 
if(f==undefined && f1==undefined)
{
 f='';
  f1='';
} 
else{
 var f = "W"+','; 
  var f1 = f1+','; 
}
if(g==undefined && g1==undefined)
{
 g='';
  g1='';
} 
else{
var g =  "M"+','; 
var g1 =  g1+','; 
}
if(h==undefined && h1==undefined)
{
 h='';
  h1='';
} 
else{
var h =  "S"+','; 
var h1 =  h1+','; 
}


 var com = a+''+b+''+c+''+d+''+e+''+f+''+g+''+h ;
 com = com.replace(/,\s*$/, "");
$("#appendinto").append(':'+com);


var com1 = a1+''+b1+''+c1+''+d1+''+e1+''+f1+''+g1+''+h1 ;
 com1 = com1.replace(/,\s*$/, "");
$(".spelizationsids").append(':'+com1);

 

  //alert('dd');
   




});









});  //dosument function 


