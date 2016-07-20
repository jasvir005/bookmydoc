


var baseurl="http://gotaworkout.com/index.php/";

 






function searchpagefun()
{
var jas=localStorage.getItem('session');
//alert(jas);
if(jas==null)
{
  window.location.href = "index.html"; 
}

}



/**************Detail page function****************/

 function abd(id)
{

jQuery("#divLoading").addClass('show');
jQuery("body").addClass('showhome');


//alert(id);

 


 
jQuery.ajax({
type: "GET",
url: ""+baseurl+"get_trainder_where?userid="+id,
dataType:'json',
 
success: function(simgpleusrdetail) {

jQuery("body").removeClass('showhome');
jQuery("#divLoading").removeClass('show');
$(".detail-result-page").html("");

 $(".first-page-all-trainer").hide();
 /*jQuery("#divLoading").addClass('show');*/

 jQuery(".search-detail-page").show();

jQuery("body").addClass('showhome');



  jQuery.each( simgpleusrdetail, function( key, val ) {
 var jsonvar=JSON.stringify(val); 
var obj = jQuery.parseJSON(jsonvar);




var str = obj.firstname;
str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});

 var image="";
if(obj.userimage==null)
{
  image="no_imageabc.jpg"; 
}
else
  {
image=obj.userimage;
  }

data="<div class='detailphe-img'><img src='http://gotaworkout.com/service/public/z_uploads/doctor/"+image+"'></div><div class='detail-pge'><h1>"+str+"</h1><div class='cateratingab' id='cateratingab"+obj.speciality+"'></div></div><div class='detail-pge-bottom'><div class='bottom-header-part'><div id='commonid' class='left-prt addlassbar'><p onclick='functiona(0)'>About</p></div><div id='commonid'  class='right-prt'><p onclick='functiona(1)'>Reviews</p></div></div><div class='slide-div'><div class='page-decription'><p>"+obj.ProfessionalMemberships+"</p></div><div class='page-detail-rate'><div class='right-rate'><p>Rate</p></div><div class='right-rate-price'><p>$"+obj.payrate+" / Hours </p></div></div><div class='page-detail-categries'><div class='left-cate'><p>Workouts</p></div><div class='right-cate'><p></p></div></div><div class='page-certification'><div class='pagecerleft'><p>Certification</p></div><div class='pagecerright'><p>CTRP</p></div></div></div><div class='slide2'><p>This is review page </p></div><div class='bmd-main-btn3flog2' id='booknow-btn'><div class='bmd-main-btn3flog' id='booknow'> BOOK NOW</div></div></div>";

 

/***********second ajax hit********/


jQuery.ajax({
type: "GET",
url: ""+baseurl+"singleuserdetail?speciality1="+obj.speciality+"&userid="+obj.id+"",
dataType:'json',
 
success: function(simgpleusrdetail) {
var starimage="http://gotaworkout.com/service/public/z_uploads/doctor/sameimg.png";
var fillstar1="http://gotaworkout.com/service/public/z_uploads/doctor/onestar.png";
var fillstar2="http://gotaworkout.com/service/public/z_uploads/doctor/secondstart.png";
var fillstar3="http://gotaworkout.com/service/public/z_uploads/doctor/third_start.png";
var fillstar4="http://gotaworkout.com/service/public/z_uploads/doctor/fourth_star.png";
var fillstar5="http://gotaworkout.com/service/public/z_uploads/doctor/fifth_star.png";
var emptystar="http://gotaworkout.com/service/public/z_uploads/doctor/empty_star.png";

var id=simgpleusrdetail.id
var rating=simgpleusrdetail.rating
var namecat=simgpleusrdetail.name




$(".page-detail-categries .right-cate p").append(namecat);


if(rating ==0)
{
//alert('sssssssss');
var imageempty ='<img src='+emptystar+'>';id
$("#cateratingab"+id+"").append(imageempty+'<div class="titalrating" id="round">0</div>');
 


}else
{
  if(rating==1)
{
 //alert('*******');
var imageempty ='<img src='+fillstar1+'>';
 
$("#cateratingab"+id+"").append(imageempty+'<div class="titalrating" id="round">'+rating+'</div>');

 
}
if(rating==2)
{
 //alert('*******');
var imageempty ='<img src='+fillstar2+'>';
 
$("#cateratingab"+id+"").append(imageempty+'<div class="titalrating" id="round">'+rating+'</div>');
}

if(rating==3)
{
 //alert('*******');
var imageempty ='<img src='+fillstar3+'>';
 
$("#cateratingab"+id+"").append(imageempty+'<div class="titalrating" id="round">'+rating+'</div>');
}

if(rating==4)
{
 //alert('*******');
var imageempty ='<img src='+fillstar4+'>';
 
$("#cateratingab"+id+"").append(imageempty+'<div class="titalrating" id="round">'+rating+'</div>');
} 
if(rating==5)
{
 //alert('*******');
var imageempty ='<img src='+fillstar5+'>';
 
$("#cateratingab"+id+"").append(imageempty+'<div class="titalrating" id="round">'+rating+'</div>');
}
}
//var datasa="";
  //var objs = jQuery.parseJSON(simgpleusrdetail);

//alert(simgpleusrdetail.id);

 //datasa ="<div class='ratingdic'>"+simgpleusrdetail.rating+"<div>";



 }
  });


//alert(simgpleusrdetail.rating);




    });
 
$(".detail-result-page").append(data);






/**********second ajax hit**********/



  }


}); // ajax hit  


} //function detail page

/************************ Detail pager function ****************************/


function functiona(id)
{

 
 if(id==0)
 {
$(".slide-div").show();
 $(".slide2").hide();
  $(".right-prt").removeClass('addlassbar');
$(".left-prt").addClass('addlassbar');

 }
  if(id==1)
 {
  $(".slide-div").hide();
  $(".slide2").show();
  $(".left-prt").removeClass('addlassbar');
$(".right-prt").addClass('addlassbar');
 }


}

function firstpage()
{

var jas=localStorage.getItem('session');

 //alert(jas);
 if(jas !=null)
 {

   window.location.href = "search-page.html";
 }
 

jQuery("#divLoading").addClass('show');
jQuery("body").addClass('showhome');

		jQuery.ajax({
		type: "GET",
		url: ""+baseurl+"get_allusers",
		dataType:'json',
		//data: formData,
		success: function(allusers) {


  jQuery(".discover-content").html('');
  jQuery("body").removeClass('showhome');

		var numa=1;
		jQuery.each( allusers, function( key, val ) {

var src="http://gotaworkout.com/service/public/z_uploads/doctor/";
var noimage="http://gotaworkout.com/service/public/z_uploads/doctor/no_imageabc.jpg";
var starimage="http://gotaworkout.com/service/public/z_uploads/doctor/star_imagecopy.png";
 //$("discover-content"+speciality+"'").css({ 'background-image': 'url(image url)' });
		//alert('dfd');
	var speciality=val.speciality;
		var usrids=val.usrid;


var str = val.firstname;
str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});
//alert(str); //Displays "Hello World"






if(val.userimage==null)
{
var image="<img src="+noimage+">";
}
else
{

var image="<img src="+src+val.userimage+">";
}

//var imageempty='<img src='+starimage+'>';





		data="<div id='searchlop'  onClick='abd("+val.usrid+")' class='discover-content"+speciality+"'><div class='content-part'>"+image+"<div class='top-of-content'></div><div class='middel-part'><div class='left-part-middel'><div class='text-part-left'><h1>"+str+"</h1><p class='categories-append'></p><div class='countratinga'><div class='rating' id='rating"+val.usrid+"'></div><div id='round"+val.usrid+"' class='round-count'></div></div></div></div><div class='text-right-part'><h1>$"+val.payrate+" / Hour</h1></div></div></div></div><div class='spacediv'></div>";

		jQuery(".discover-content").append(data);


		numa++;





 var formData = {
                speciality1: speciality,
                 userid: usrids,

         
            }; 


jQuery.ajax({
type: "GET",
url: ""+baseurl+"speciality1",
dataType:'json',
data: formData,
success: function(alluserss) {
	var starimage="http://gotaworkout.com/service/public/z_uploads/doctor/sameimg.png";
	var fillstar1="http://gotaworkout.com/service/public/z_uploads/doctor/onestar.png";
	var fillstar2="http://gotaworkout.com/service/public/z_uploads/doctor/secondstart.png";
	var fillstar3="http://gotaworkout.com/service/public/z_uploads/doctor/third_start.png";
	var fillstar4="http://gotaworkout.com/service/public/z_uploads/doctor/fourth_star.png";
	var fillstar5="http://gotaworkout.com/service/public/z_uploads/doctor/fifth_star.png";

	var emptystar="http://gotaworkout.com/service/public/z_uploads/doctor/empty_star.png";

	
	//console.log("*&********");
//console.log(alluserss);
    $(".discover-content"+speciality+" .text-part-left p").html("");
var items=alluserss.name;
var useridfor=alluserss.useridfor;
var s=1;
//var ratinga=0;
var ratinga = alluserss.rating;
///console.log("************");
 //console.log(alluserss);
//alert(ratinga);

if(ratinga ==0)
{
//alert('sssssssss');
var imageempty ='<img src='+emptystar+'>';
$("#rating"+useridfor+"").append(imageempty);
$("#round"+useridfor+"").append("0");


}else
{
	if(ratinga==1)
{
 //alert('*******');
var imageempty ='<img src='+fillstar1+'>';
$("#rating"+useridfor+"").append(imageempty);
$("#round"+useridfor+"").append(ratinga);
}
if(ratinga==2)
{
 //alert('*******');
var imageempty ='<img src='+fillstar2+'>';
$("#rating"+useridfor+"").append(imageempty);
$("#round"+useridfor+"").append(ratinga);
}

if(ratinga==3)
{
 //alert('*******');
var imageempty ='<img src='+fillstar3+'>';
$("#rating"+useridfor+"").append(imageempty);
$("#round"+useridfor+"").append(ratinga);
}ratinga

if(ratinga==4)
{
 //alert('*******');
var imageempty ='<img src='+fillstar4+'>';
$("#rating"+useridfor+"").append(imageempty);
$("#round"+useridfor+"").append(ratinga);
}	
if(ratinga==5)
{
 //alert('*******');
var imageempty ='<img src='+fillstar5+'>';
$("#rating"+useridfor+"").append(imageempty);
$("#round"+useridfor+"").append(ratinga);
}
}

 
//alert(ratinga);
//console.log(ratinga);
//alert(usrids);
var id=alluserss.id;
//alert(val.val.usrid);
 if(speciality==id)
 {
 	//alert(items);
 //alert("items");
 $(".discover-content"+speciality+" .text-part-left p").append(items);
 }
  else
 {
  //alert('false');
$(".discover-content"+speciality+" .text-part-left"+val.id+" p").append("");
 } 


}

});

		});






  }  // first success ajax


});

} // function close















/**************logout function*****************/


function Logout()
{
  localStorage.removeItem("session");
  window.location.href = "index.html";

}

/******************logout function****************************/



/*facebooklogin function *****************************  */
function fblogin()
   	{
//alert("first function");

   facebookConnectPlugin.login(["public_profile"],
        fbLoginSuccess,
        function (error) { alert("bookmydoc" + JSON.stringify(error)) }
    ); 


  };


fbLoginSuccess = function (userData) {

//alert("second function");
   // alert("userData: " + JSON.stringify(userData));
     var userData  = JSON.stringify(userData);
    var packet = jQuery.parseJSON(JSON.stringify(userData));


    var status = JSON.stringify(packet["status"]);
   //alert(status);
    facebookConnectPlugin.getAccessToken(function(token) {
        localStorage.setItem('token', token);
     
         //alert(cache);
        fbData();
    }, 
    function(err) {
        alert("Could not get access token: " + err);
    }); 
}


fbData = function () {

 // alert("fbdata function");
  //alert('hello');
    facebookConnectPlugin.api( "me/?fields=id,name,email", ["email"],
        function (response) { 

          // alert("Result: " + JSON.stringify(response));
            //alert("status: " + localStorage.status + "token: " + localStorage.token);
            var response = jQuery.parseJSON(JSON.stringify(response));
            
      /*      var fbname = JSON.stringify(response["name"]);
            var fbid = JSON.stringify(response["id"]);*/
            var fbEmail2 = JSON.stringify(response["email"]);
            //alert(fbEmail2);
            var name = JSON.stringify(response["name"]);

   
            var cache=localStorage.getItem('token');

 var text = '{ "firstname":"'+name+'" , "lastName":"'+name+'" ,"email":"'+fbEmail2+'","password":"","phone":"9898989897","usertype":"2"}';

 //alert(text);
jQuery.ajax({
url: ""+baseurl+"get_signup_details2",
method: "GET",
data: {'signUpData': text},

success: function(alluserss) {
  jQuery("body").addClass("show1");

var obj = jQuery.parseJSON( alluserss );
//alert(obj.status);


var textc = '{ "usertype":"2" , "email":"'+fbEmail2+'" ,"password":""}';
jQuery.ajax({
url: ""+baseurl+"get_login_detailsfblogin",
method: "GET",
data: {'loginData': textc},

success: function(alluserssd) {
 jQuery("body").removeClass("show1");

//  alert(alluserssd);

  var objs = jQuery.parseJSON( alluserssd );
//alert(objs.userID);
if(objs.userID)
{
  window.location.href = "search-page.html";
}



 

}

});


 
}

});
 
           
        },
        function (error) { alert("arv" + JSON.stringify(error)) }
    );

    if(localStorage.user_id == userID) {
        alert("localStorage.user_id == userID");
    }
    else {
        alert("localStorage.user_id != userID");
    }
}



/********fb login close********/








/*    function home page click */


$(document).ready(function()
{



$(".page_filter").click(function()
{
$(".first-page-all-trainer").hide();
$(".loginhome-page").show();
});

/*login page open */
$("#login-world").click(function()
{
$(".loginhome-page").hide();
$(".signup-page-div").hide();
$(".login-page").show();
});

/*  signup page open */
$("#signdiv").click(function(){
$(".loginhome-page").hide();
$(".signup-page-div").show();
});

 /*login page close  and signup page close  */


$(".login-backbtn").click(function()
{
$(".login-page").hide();	
$(".signup-page-div").hide();
$(".loginhome-page").show();
});

 



 $(".signup-btn").click(function(){


var checkedis=$("#checkbox-terms").is(':checked');

var emailAddressfd=$("#seremail-validate").val();
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

if(emailAddressfd=="")
{

$("#seremail-validate").attr("placeholder", "E-Mail is required");

} 
else if(!emailAddressfd.match(re))
{

$("#seremail-validate").val("");
$("#seremail-validate").attr("placeholder", "Invalid E-Mail");
return false;
 
 }

 else if(checkedis=="")
{
$("#must-agree").show();
}


/*  checkbox message  */
 else
 {



var name= $("#fname").val();
var lname= $("#lname").val();
var email= $("#seremail-validate").val();

var addressfld= $("#addressfld").val();

var passfld= $("#passfld").val();


// var text = '{ "firstname":'+name+' , "lastName":'+name+' ,"email":'+fbEmail2+',"password":"","phone":"9898989897","usertype":"2"}';

var text = '{ "firstname":"'+name+'" , "lastName":"'+lname+'" , "email":"'+email+'", "password":"'+passfld+'", "address":"'+addressfld+'" , "usertype":"2" }';
 
 //alert(text);
jQuery.ajax({
url: ""+baseurl+"get_signup_details2",
method: "GET",
data: {'signUpData': text},

success: function(alluserss) {
 
$("#resultappen").show();

var obj = jQuery.parseJSON( alluserss );
var msg= obj.msg;
$("#resultappen").html(msg);
//alert( obj.msg );

}

});

 } /*  ajax request message  */

}); //signup click request


/* *********************login request************************/

//login_id

$("#login_id").click(function(){
var useremail= $("#login_user_id").val();
var userid= $("#user_paswd").val();

var useremail=$("#login_user_id").val();
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


if(useremail=="")
{

$("#login_user_id").attr("placeholder", "E-Mail is required");

} 
else if(!useremail.match(re))
{

$("#login_user_id").val("");
$("#login_user_id").attr("placeholder", "Invalid E-Mail");
return false;
 
 }
 else
 {

var emailId= $("#login_user_id").val();
var passNme= $("#user_paswd").val();


var text2 = '{ "email":"'+emailId+'" , "password":"'+passNme+'" ,"usertype":"2"}';
 
 
jQuery.ajax({
url: ""+baseurl+"get_login_details",
method: "GET",
data: {'loginData': text2},

success: function(loginuser) {


var obj = jQuery.parseJSON( loginuser );
var userID= obj.userID;
if(userID==null)
{
$("#login_error").show();
}
else
{

localStorage.setItem('session', userID);

  //alert("congrat");
  window.location.href = "search-page.html";


}

}

});

}

}); //login request end





/************* detail page change on click  *************/


 $(".login-backbtn2").click(function(){

 // alert('d');
  $(".search-detail-page").hide();
    $(".first-page-all-trainer").show();


}); 

 
/*********************** change on click ********************/


 // alert(baseurl);


})  /*docuent function*/


function fbloginjs()
{

name="sdfsdd";
fbEmail2="jasvirdd.sof@gmail.com";

 var text = '{ "firstname":"'+name+'" , "lastName":"'+name+'" ,"email":"'+fbEmail2+'","password":"","phone":"9898989897","usertype":"2"}';

 //alert(text);
jQuery.ajax({
url: ""+baseurl+"get_signup_details2",
method: "GET",
data: {'signUpData': text},

success: function(alluserss) {
 jQuery("body").addClass("show1");

var obj = jQuery.parseJSON( alluserss );
//alert(obj.status);


var textc = '{ "usertype":"2" , "email":"'+fbEmail2+'" ,"password":""}';
jQuery.ajax({
url: ""+baseurl+"get_login_detailsfblogin",
method: "GET",
data: {'loginData': textc},

success: function(alluserssd) {
 jQuery("body").removeClass("show1");
//  alert(alluserssd);

  var objs = jQuery.parseJSON( alluserssd );
//alert(objs.userID);
if(objs.userID)
{
   window.location.href = "search-page.html";
}

 

}

});











}

});
}






