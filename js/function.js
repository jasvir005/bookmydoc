function firstpage()
{



		jQuery.ajax({
		type: "GET",
		url: "http://gotaworkout.com/index.php/get_allusers",
		dataType:'json',
		//data: formData,
		success: function(allusers) {

  jQuery(".discover-content").html('');

		var numa=1;
		jQuery.each( allusers, function( key, val ) {

var src="http://gotaworkout.com/service/public/z_uploads/doctor/";
var noimage="http://gotaworkout.com/service/public/z_uploads/doctor/no_imageabc.jpg";
var starimage="http://gotaworkout.com/service/public/z_uploads/doctor/star_imagecopy.png";
 //$("discover-content"+speciality+"'").css({ 'background-image': 'url(image url)' });
		//alert('dfd');
	var speciality=val.speciality;
		var usrids=val.usrid;

if(val.userimage==null)
{
var image="<img src="+noimage+">";
}
else
{

var image="<img src="+src+val.userimage+">";
}

//var imageempty='<img src='+starimage+'>';





		data="<div id='searchlop'  onClick='abd("+val.usrid+")' class='discover-content"+speciality+"'><div class='content-part'>"+image+"<div class='top-of-content'></div><div class='middel-part'><div class='left-part-middel'><div class='text-part-left'><h1>"+val.firstname+"</h1><p class='categories-append'></p><div class='countratinga'><div class='rating' id='rating"+val.usrid+"'></div><div id='round"+val.usrid+"' class='round-count'></div></div></div></div><div class='text-right-part'><h1>$"+val.payrate+" / Hour</h1></div></div></div></div>";

		jQuery(".discover-content").append(data);


		numa++;





 var formData = {
                speciality1: speciality,
                 userid: usrids,

         
            }; 


jQuery.ajax({
type: "GET",
url: "http://gotaworkout.com/index.php/speciality1",
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









