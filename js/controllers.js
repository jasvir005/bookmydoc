$(document).ready(function(){
  //alert('dfd');

var bseimg="http://gotaworkout.com/";




  
 var dec = document.querySelector('.js-decimal');
    var initDec = new Powerange(dec, { decimal: false, callback: displayDecimalValue, max: 250, start: 125 });
//alert(initDec);

 
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
         
     if( jQuery('.menu-slide').is(':visible') ) 

{
//alert('close');
jQuery('.search-page').css({ 'float': 'none'});
jQuery('.menu-slide').animate({ 'width': '0px' }, 'fast');
jQuery('.search-page').animate({ 'margin-left': '0px' }, 'fast');
jQuery('.menu-slide').hide();
jQuery('.search-page').css({ 'position': 'relative'});
jQuery('.hide-open-time').css({ 'width': 'auto'});
}
else {

// alert("open");
jQuery('.menu-slide').show();



jQuery('.menu-slide').animate({ 'width': '250px' }, 'falst');
jQuery('.search-page').animate({ 'margin-left': '250px'}, 'falst');
jQuery('.search-page').css({ 'float': 'left'});
jQuery('.search-page').css({ 'position': 'fixed'});

jQuery('.hide-open-time').css({ 'width': '113%'});
 



 


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

jQuery(".discover-content").html("");
jQuery(".discover-content").append("<div id='divLoading' class='show'></div>");



//alert("hello");

$(".search-page").hide();

$("#search_rest_page").show();
  var selectedcate=$(".spelizationsids").text();

   var selecedgender=$(".selecedgender").text();

 var selecedpayrate=$("#js-display-decimald").text();

  //alert(selecedpayrate); 
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
url: "http://gotaworkout.com/index.php/get_serachresult?gender="+selecedgender+"&payrate="+selecedpayrate+"&selectedcate="+selectedcate,
//dataType:'json',
 
success: function(searchresultds) { 
  jQuery(".discover-content").html("");

  var objds = jQuery.parseJSON( searchresultds );
var arrs = [], objds;

for(key in objds) {
    arrs.push(key);
} 
len = arrs.length;
 console.log(len) //2*/


 //var p=1;
  for(i=1; i<=len;i++)
  {

//alert(objds);
  var getstringifysd = JSON.stringify(objds[i]);
  console.log(getstringifysd);
  var objs = jQuery.parseJSON( getstringifysd );
 //alert(objs.firstname);
//alert(p);
if(objs.userimage==null)
{
var imagesusr=""+bseimg+"service/public/z_uploads/doctor/no_imageabc.jpg";
}
else
{
var imagesusr=""+bseimg+"service/public/z_uploads/doctor/"+objs.userimage+"";
}




data="<div class='discover-content"+objs.id+"'onclick='abd("+objs.id+")'id='searchlop2'><div class='content-part2'><img src='"+imagesusr+"'><div class='top-of-content2'></div><div class='middel-part2'><div class='left-part-middel2'><div class='text-part-left2'><h1>"+objs.firstname+"</h1><p class='categories-append2'></p><div class='countratinga'><div id='rating21"+objs.id+"' class='rating21'></div><div class='round-count21' id='round21"+objs.id+"'></div></div></div></div><div class='text-right-part21'><h1>$"+objs.payrate+" / Hour</h1></div></div></div></div>";


 jQuery(".discover-content").append(data);



//alert(objs.speciality);


/**************second request******************/
 jQuery.ajax({
type: "GET",
url: "http://gotaworkout.com/index.php/speciality1?speciality1="+objs.speciality+"&userid="+objs.id+"",
dataType:'json',
success: function(searchresultd)
 { 

  var starimage=""+bseimg+"service/public/z_uploads/doctor/sameimg.png";
  var fillstar1=""+bseimg+"service/public/z_uploads/doctor/onestar.png";
  var fillstar2=""+bseimg+"service/public/z_uploads/doctor/secondstart.png";
  var fillstar3=""+bseimg+"service/public/z_uploads/doctor/third_start.png";
  var fillstar4=""+bseimg+"service/public/z_uploads/doctor/fourth_star.png";
  var fillstar5=""+bseimg+"service/public/z_uploads/doctor/fifth_star.png";



var emptystar=""+bseimg+"service/public/z_uploads/doctor/empty_star.png";
var items=searchresultd.name;
var ratingsh=searchresultd.rating;
var usrid=searchresultd.useridfor;

 jQuery(".discover-content"+usrid+" .text-part-left2 p").append(items);

 /*************rating start*************/

if(ratingsh ==0)
{
//alert('sssssssss');
var imageempty ='<img src='+emptystar+'>';
jQuery("#rating21"+usrid+"").append(imageempty);
jQuery("#round21"+usrid+"").append("0");


}else
{
  if(ratingsh==1)
{
 //alert('*******');
var imageempty ='<img src='+fillstar1+'>';
jQuery("discover-content#rating21"+usrid+"").append(imageempty);
jQuery(".discover-content"+usrid+" #round21"+usrid+"").append(ratingsh);
}
if(ratingsh==2)
{
 //alert('*******');
var imageempty ='<img src='+fillstar2+'>';
jQuery(".discover-content"+usrid+" #rating21"+usrid+"").append(imageempty);
jQuery(".discover-content"+usrid+" #round21"+usrid+"").append(ratingsh);
}

if(ratingsh==3)
{
//alert('***3****');
 //alert("usrid");
var imageempty ='<img src='+fillstar3+'>';
jQuery(".discover-content"+usrid+" #rating21"+usrid+"").append(imageempty);
jQuery(".discover-content"+usrid+" #round21"+usrid+"").append(ratingsh);
}

if(ratingsh==4)
{
// alert('****ll***');
var imageempty ='<img src='+fillstar4+'>';
jQuery(".discover-content"+usrid+" #rating21"+usrid+"").append(imageempty);
jQuery(".discover-content"+usrid+" #round21"+usrid+"").append(ratingsh);
} 
if(ratingsh==5)
{
 //alert('*******');
var imageempty ='<img src='+fillstar5+'>';
jQuery(".discover-content"+usrid+" #rating21"+usrid+"").append(imageempty);
jQuery(".discover-content"+usrid+" #round21"+usrid+"").append(ratingsh);
}
}


/*************rating start*************/

}  ///ajax request


});


/****************second request**************/



//p++;
 }



 

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


