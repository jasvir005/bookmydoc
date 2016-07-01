angular.module('starter.controllers', ["ngStorage"])

.controller('AppCtrl', function($ionicHistory,$document,$state,$scope, $ionicModal, $timeout,$http, $sessionStorage,$window,searchdate,$rootScope,$ionicLoading) {





var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {

$(".head-img-txtflog").css({"margin-top":"46px"});
$("#signup-pge-cs").css({"margin-top":"46px"});


  }
  else
  {

    $(".head-img-txtflog").css("margin-top","0px");
    $("#signup-pge-cs").css({"margin-top":"0px"});
  }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});



  // Form data for the login modal
  $scope.loginData = {};
  $scope.signUpData = {};
   $scope.signUpdData = {};
   
  $scope.resetData = {};
  $scope.Doc={};
  $scope.AppointmentDetails={};
  $scope.desiredSearchData = {};
  $scope.desiredSearchData.speciality = '';
  $scope.desiredSearchData.insurance = '';
  $scope.desiredSearchData.location = '';
  $scope.desiredSearchData.selectedDate = new Date();
  $scope.desiredSearchData.page=0;
  $scope.desiredSearchData.status='first';
  //$scope.coreurl="http://localhost/bookmydoc_new_theme/";
  $scope.coreurl=coreurl;
  $scope.baseurl=baseurl;
  $scope.my_key=my_key;
  
console.log($scope.baseurl);
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    caching: false
  }).then(function(modal) {
    $scope.modal = modal;
  });
    $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope,
    caching: false
  }).then(function(signup_modal) {
    $scope.signup_modal = signup_modal;
  });
  $ionicModal.fromTemplateUrl('templates/forgot_password.html', {
    scope: $scope,
    caching: false
  }).then(function(reset_modal) {
    $scope.reset_modal = reset_modal;
  });
  $ionicModal.fromTemplateUrl('templates/doc_modal.html', {
    scope: $scope,
    caching: false
  }).then(function(doc_modal) {
    $scope.doc_modal = doc_modal;
  });

 
  $ionicModal.fromTemplateUrl('templates/login-Copy.html', {
    scope: $scope,
    caching: false
  }).then(function(login_twoe) {
    $scope.login_twoe = login_twoe;
  }); 



  $ionicModal.fromTemplateUrl('templates/hidemenu.html', {
    scope: $scope,
    caching: false
  }).then(function(loginmenuhideshow) {
    $scope.loginmenuhideshow = loginmenuhideshow;
  }); 

    $ionicModal.fromTemplateUrl('templates/filter.html', {
    scope: $scope,
    caching: false
  }).then(function(filterpage) {
    $scope.filterpage = filterpage;
  }); 




  

    $ionicModal.fromTemplateUrl('templates/hidemmainmenu.html', {
    scope: $scope,
    caching: false
  }).then(function(hidemmainmenu) {
    $scope.hidemmainmenu = hidemmainmenu;
  }); 

 
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

   $scope.closemenulogo = function() {
  $scope.loginmenuhideshow.hide();
    $scope.menuhide();
 // alert('dfdf');
  };



  $scope.closeSignup = function() {
    $scope.signup_modal.hide();
  };

 $scope.closefilterpage = function() {
   $scope.filterpage.hide();
  };

  $scope.closeForgot = function() {
    $scope.reset_modal.hide();
  };
  $scope.closeDoc_modal = function() {
    $scope.doc_modal.hide();
  };

    $scope.closelogin_two = function() {

//alert('DD');

  //$scope.modalax.hide();
  $scope.login_twoe.hide();
  };
 
  // Open the login modal
  $scope.login = function() {
    //alert('hi');
    $scope.modal.show();
  };




 $scope.menuhide = function() {
   //alert('hi');
  $scope.hidemmainmenu.show();
  };

 $scope.loginw = function() {
    //alert('hi');
    $scope.modal.show();
  };
  


  $scope.login_two = function() {
    //alert('hi')
  $scope.login_twoe.show();
  };

  $scope.signup = function() {
    
    $scope.signup_modal.show();
  };


   $scope.login_two = function() {

    //alert('hi');
     $scope.login_twoe.show();
  };



 $scope.commingsoon = function() {

  alert('comming soon');

 };

  $scope.filterpa = function() {

 $scope.filterpage.show();

 };





   $scope.fblogin = function() {
   
   
   //alert('hi');



   facebookConnectPlugin.login(["public_profile"],
        fbLoginSuccess,
        function (error) { alert("bookmydoc" + JSON.stringify(error)) }
    ); 


  };



fbLoginSuccess = function (userData) {
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



//$scope.loginData.usertype='2';
    var url='/get_categories';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
   
    }).then(function mySucces(responsed) {

/*var responsere =JSON.stringify(responsed);*/
 
var num=1;
$.each( responsed.data, function( key, val ) {




data="<div id='hello' class='checkboxd-div"+num+"'><label>"+val.name+"</label><span><input speciality='"+val.id+"' id='checkbox-terms"+num+"' class='checkbox-custom 'type='checkbox' name='"+val.name+"' value='"+val.name+"'><label class='checkbox-custom-label' for='checkbox-terms'></label></span></div>";

$("#cate-slide").append(data);
num++;
});

});



      var url='/get_languages';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
   
    }).then(function mySucces(languages) {
//$("#cate-slidea").html('ffffffffffff');

//console.log(obj.name);
  var numd=1;
$.each( languages.data, function( keyd, vadl ) {
 //alert(vadl.name);
datad="<div id='chekcbox"+numd+"' class='checkboxd-diva'><label>"+vadl.name+"</label><span><input id='checkbox-terms"+numd+"' class='checkbox-custom' type='checkbox' value="+vadl.name+" name="+vadl.name+"> <label class='checkbox-custom-label' for='checkbox-terms'></label></span>";


$(".languages").append(datad);

numd++;
}); 


});


fbData = function () {
  //alert('hello');
    facebookConnectPlugin.api( "me/?fields=id,name,email", ["email"],
        function (response) { 
           //alert("Result: " + JSON.stringify(response));
            //alert("status: " + localStorage.status + "token: " + localStorage.token);
            var response = jQuery.parseJSON(JSON.stringify(response));
            
      /*      var fbname = JSON.stringify(response["name"]);
            var fbid = JSON.stringify(response["id"]);*/
            var fbEmail2 = JSON.stringify(response["email"]);
            var name = JSON.stringify(response["name"]);
     
            var cache=localStorage.getItem('token');

   $ionicLoading.show({
/*        template: '<img  src="img/await.gif" />'*/
      });
 var text = '{ "firstname":'+name+' , "lastName":'+name+' ,"email":'+fbEmail2+',"password":"","phone":"9898989897","usertype":"2"}';

//var text = '{ "firstname":'+name+' , "lastName":'+name+' ,"email":'+fbEmail2+',"password":"","usertype":"2"}';
 
      var url='/get_signup_details';
      $http({
        url: $scope.baseurl+url, 
        method: "GET",
        params: {'signUpData': text},
      }).then(function mySucces(response) {

 $ionicLoading.hide({
        template: '<img  src="img/await.gif" />'
      });



//var text = '{ "usertype":"2" , "email":'+fbEmail2+' ,"password":""}';
//var text = '{ "usertype":"2" , "email":"jasvir.softweaver@gmail.com" ,"password":""}';
//alert(text);
   $scope.signupDetails = response.data; 
        var statusvar = $scope.signupDetails.status;
         //alert(statusvar);
         console.log(statusvar);
var text = '{ "usertype":"2" , "email":'+fbEmail2+' ,"password":""}';

 
     
   $ionicLoading.show({
/*      template: '<img  src="img/await.gif" />'*/
    });
    $scope.loginData.usertype='2';
    var url='/get_login_detailss';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
      params: {'loginData': text},
    }).then(function mySucces(response) {
      //alert('login sucess function');
        $scope.loginDetails = response.data; 
        // $sessionStorage.userSession = response.data;
        // console.log($sessionStorage.SessionMessage);
        if($scope.loginDetails.error.status===false){
          $scope.userSession = response.data;
          $scope.userSessionStatus = true;
          $scope.AppointmentDetails.details = true;
          $scope.noSessionStatus = false;
          $timeout(function() {

            //alert('hello');

            $ionicLoading.hide();
            $scope.closeLogin();
          }, 1000);


             $timeout(function() {
            $scope.closelogin_two();
          }, 1001);
          
        }else{
          $scope.loginError = $scope.loginDetails.error.status;
          $scope.loginErrorMsg = $scope.loginDetails.error.msg;
          $timeout(function() {
            $ionicLoading.hide();
          }, 1000);
        }
    });

 
 $ionicLoading.hide({
        template: '<img  src="img/await.gif" />'
      });
       
//alert(response);
      
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

 

    $scope.reset = function() {
    $scope.reset_modal.show();
  };

 

  $scope.doc_modal = function() {
    $scope.doc_modal.show();
  };


   $scope.loginmenuhide = function() {
    $scope.loginmenuhideshow.show();

  };


    $scope.loginmenuhidehide = function() {
    $scope.loginmenuhideshow.hide();

  };

  $scope.join = function() {
    $scope.modal.hide();
    $scope.signup_modal.show();
  };
  


$scope. ed= false;$scope.loginError =false;$sessionStorage.userSessionStatus = false;$scope.noSessionStatus = true;
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    $ionicLoading.show({
/*      template: '<img  src="img/await.gif" />'*/
    });
    $scope.loginData.usertype='2';
    var url='/get_login_details';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
      params: {'loginData': $scope.loginData},
    }).then(function mySucces(response) {
        $scope.loginDetails = response.data; 
        // $sessionStorage.userSession = response.data;
        // console.log($sessionStorage.SessionMessage);
        if($scope.loginDetails.error.status===false){
          $sessionStorage.userSession = response.data;
          $scope.userSession = response.data;
          $scope.userSessionStatus = true;
          $scope.AppointmentDetails.details = true;
          $scope.noSessionStatus = false;
          $timeout(function() {
            $ionicLoading.hide();
            $scope.closeLogin();
            $scope.closelogin_two();

var ida=$scope.userSession.userID;

localStorage.setItem('sessionid', ida);

$document.ready(function(){




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
var a = a+','; 
var  a1= a1+','; 
}

if(b==undefined && b1==undefined)
{
 b='';
  b1='';
} 
else{
 var b = b+','; 
  var b1 = b1+','; 
}
if(c==undefined && c1==undefined)
{
 c='';
  c1='';
}
else{
 var c = c+','; 
  var c1 = c1+','; 
} 
if(d==undefined && d1==undefined)
{
 d='';
 d1='';
} 
else{
var d =  d+','; 
var d1 =  d1+','; 
}
if(e==undefined && e1==undefined)
{
 e='';
  e1='';
}
else{
var e =  e+',';
var e1 =  e1+','; 
} 
if(f==undefined && f1==undefined)
{
 f='';
  f1='';
} 
else{
 var f = f+','; 
  var f1 = f1+','; 
}
if(g==undefined && g1==undefined)
{
 g='';
  g1='';
} 
else{
var g =  g+','; 
var g1 =  g1+','; 
}
if(h==undefined && h1==undefined)
{
 h='';
  h1='';
} 
else{
var h =  h+','; 
var h1 =  h1+','; 
}
 var com = a+' '+b+' '+c+' '+d+' '+e+' '+f+' '+g+''+h ;
 com = com.replace(/,\s*$/, "");
$("#appendinto").append(':'+com);


var com1 = a1+''+b1+''+c1+''+d1+''+e1+''+f1+''+g1+''+h1 ;
 com1 = com1.replace(/,\s*$/, "");
$(".spelizationsids").append(':'+com1);

 

  //alert('dd');
   




});




//alert('dfd');
 $(".categories-div-left").css({"display":"none"});
  $(".padding").css({"padding":"0px"});
  

        $(".signup_back_btn").css({"display": "inline"});
  

 
 
$(".theme-bg").css('background-color','#fff');

   var widthvar = $( window ).width();
      var heightvar = $( window ).height();
 
  $(window).resize(function(){

      var heightvar = $( window ).height();
 
       var widthvar = $( window ).width();
     //alert(widthvar); 

 if(widthvar==320)
 {

$(".slider-wrapper").css('width','267px');
$(".slider-wrapper2").css({'border':'0px solid red','width':'257px','margin':'0 0 26px 31px'})

 }



 if(widthvar==360)
 {
  //alert('dd');
  //$(".categories-div-left").css("cssText", "display: none !important;");

  $(".categories-div-left").hide();

$(".cate-slide").css('display','none');
$(".slider-wrapper").css('width','263px');
$(".slider-wrapper2").css({'width':'266px','margin':'0 0 27px 44px'});
 
 }

  if(widthvar==480)
 {
$(".slider-wrapper").css('width','378px');
$(".slider-wrapper2").css('width','382px');
 
} 

  if(widthvar==640)
 {
$(".slider-wrapper").css('width','560px');
$(".slider-wrapper2").css('width','549px');
$(".filter-page-contant .example").css('margin-top','34px');

 
} 
 
});


 if(widthvar==320)
 {
$(".slider-wrapper").css('width','255px');
$(".slider-wrapper2").css({'border':'0px solid red','width':'257px','margin':'0 0 26px 31px'})

//css('border','1px solid red','width','257px','margin','0 0 26px 31px;');
 
 }

   if(widthvar==360)
 {

  $(".filter-page-contant").css('height','100vh');
$(".slider-wrapper").css('width','263px');
$(".slider-wrapper2").css({'width':'266px','margin':'0 0 27px 44px'});

//$(".filter-page-contant .range-bar").css('margin-bottom','35px');
 
 }

  if(widthvar==480)
 {
$(".slider-wrapper").css('width','378px');
$(".slider-wrapper8").css('width','382px');
}
  if(widthvar==640)
 {
$(".slider-wrapper").css('width','560px');
$(".slider-wrapper2").css('width','549px');
$(".filter-page-contant .example").css('margin-top','34px');
 
} 
  //alert('hi');


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


        $(document).ready(function(){





          $(".slider-wrapper .range-bar .range-min").html("");
$(".first-star1").click(function(){
    $(".norating").html("");

$(".norating").append('<p class="countrating">1</p>');

 

$(".first-star1 img").attr('src',"img/1star copy.png").css("width","100%");
 
$(".first-star2 img").attr('src',"img/second_img.png");
$(".first-star3 img").attr('src',"img/third_img1.png");
$(".first-star4 img").attr('src',"img/fourth_img.png");
$(".first-star5 img").attr('src',"img/fifth_img.png");

$(".Click img").attr('src',"img/fifth_img.png");

});

$(".first-star2").click(function(){
    $(".norating").html("");


$(".norating").append('<p class="countrating">2</p>');

$(".first-star2 img").attr('src',"img/2star copy.png").css("width","100%");



$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star3 img").attr('src',"img/third_img1.png").css("width","100%");
$(".first-star4 img").attr('src',"img/fourth_img.png").css("width","100%");
$(".first-star5 img").attr('src',"img/fifth_img.png").css("width","100%").css("width","100%");


});

$(".first-star3").click(function(){
        $(".norating").html("");


$(".norating").append('<p class="countrating">3</p>');

 

$(".first-star3 img").attr('src',"img/3star copy.png").css("width","100%");

$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star2 img").attr('src',"img/second_img.png").css("width","100%");
$(".first-star4 img").attr('src',"img/fourth_img.png").css("width","100%");
$(".first-star5 img").attr('src',"img/fifth_img.png").css("width","100%");


});

$(".first-star4").click(function(){
        $(".norating").html("");


$(".norating").append('<p class="countrating">4</p>');


$(".first-star4 img").attr('src',"img/4star copy.png").css("width","100%");

$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star2 img").attr('src',"img/second_img.png").css("width","100%");
$(".first-star3 img").attr('src',"img/third_img1.png").css("width","100%");
$(".first-star5 img").attr('src',"img/fifth_img.png").css("width","100%");

});


$(".first-star5").click(function(){
 
    $(".norating").html("");
$(".norating").append('<p class="countrating">5</p>');

 $(".first-star5 img").attr('src',"img/5star.png").css("width","100%");

$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star2 img").attr('src',"img/second_img.png").css("width","100%");
$(".first-star3 img").attr('src',"img/third_img1.png").css("width","100%");
$(".first-star4 img").attr('src',"img/fourth_img.png").css("width","100%");
 
});
 
 
});

  

    $( ".slider-wrapper .range-max" ).html( "" );
    $( ".slider-wrapper .range-max" ).prepend( "$250" );
    $( ".slider-wrapper2 .range-min" ).html( "" );
    $( ".slider-wrapper2 .range-min" ).append( "0m" );
    $( ".slider-wrapper2 .range-max" ).html( "" );
    $( ".slider-wrapper2 .range-max" ).append( "50m" );
 
$('.js-display-changes').html("0");
$('.Reset-arrow').click(function(){

  $('#cate-slide input:checkbox').removeAttr('checked');
     $('#cate-slide label').css('color','#fff');

      $('.languages input:checkbox').removeAttr('checked');
     $('.languages label').css('color','#fff');


});
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {

  }
else
{

$(".filter-page").css({"margin-top": "-4px"});
}

$(".common-button.button.button-positive.button-clear.button_text.icon.ion-navicon.txt-color-black").click(function(){
  $('.pane').css({ 'position': 'absolute' })
      $('.filter-page-contant').css({ 'margin-right': '0px' });
     // alert('hi');
     $('.menu').css({ 'display': 'inline' });
});

$('.yoga-wordout').click(function(){

//alert('777');
  $('.sidebara').hide();
          $(".language-icon img").removeClass('rotate2');
   
     if( $('.sidebar').is(':visible') ) {
        $('.sidebar').animate({ 'width': '0px' }, 'slow', function(){
            $('.sidebar').hide();              
        });
        $('#slow-slide').animate({ 'margin-right': '0px' }, 'slow');
        $('.pane').css({ 'position': 'absolute' });
        $('.student-test').show();
        $(".transfromimg").removeClass('rotate2');
    }
    else {

        $('.sidebar').show();
        $('.sidebar').animate({ 'width': '250px' }, 'slow');
        $('#slow-slide').animate({ 'margin-right': '250px' }, 'slow');
        $('#slow-slide').css({ 'float': 'right','position':'static' },'slow');
        $('.pane').css({ 'position': 'static' });
        $('.menu').css({'display' :'none important','z-index':'-999'});
        $(".menu").hide();
        $('.student-test').hide();
        $(".transfromimg").addClass('rotate2');
    }


 
});


$(".checkboxd-div1").click(function(){
/* alert('jas');*/

var has = $(".checkboxd-div1 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( ".checkboxd-div1 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div1 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div1 input" ).prop( "checked", true );
 $(".checkboxd-div1 > label").css({"color": "#FFC000"});

}
 
});

 

$(".checkboxd-div2").click(function(){
var has = $(".checkboxd-div2 input").prop('checked')==true;
//alert(has);
if(has==true)
{
  $( ".checkboxd-div2 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div2 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div2 input" ).prop( "checked", true );
 $(".checkboxd-div2 > label").css({"color": "#FFC000"});

}
 
});




$(".checkboxd-div3").click(function(){
var has = $(".checkboxd-div3 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div3 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div3 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div3 input" ).prop( "checked", true );
 $(".checkboxd-div3 > label").css({"color": "#FFC000"});

}
 
});

$(".checkboxd-div4").click(function(){
var has = $(".checkboxd-div4 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div4 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div4 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div4 input" ).prop( "checked", true );
 $(".checkboxd-div4 > label").css({"color": "#FFC000"});

}
});



$(".checkboxd-div5").click(function(){
var has = $(".checkboxd-div5 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div5 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div5 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div5 input" ).prop( "checked", true );
 $(".checkboxd-div5 > label").css({"color": "#FFC000"});

}
 
});



$(".checkboxd-div6").click(function(){
var has = $(".checkboxd-div6 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div6 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div6 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div6 input" ).prop( "checked", true );
 $(".checkboxd-div6 > label").css({"color": "#FFC000"});

}
 
});


$(".checkboxd-div7").click(function(){
var has = $(".checkboxd-div7 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div7 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div7 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div7 input" ).prop( "checked", true );
 $(".checkboxd-div7 > label").css({"color": "#FFC000"});

}
 
});


$(".checkboxd-div8").click(function(){
  //alert('hi');
var has = $(".checkboxd-div8 input").prop('checked')==true;
if(has==true)
{

 // alert('dd');
  $( ".checkboxd-div8 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div8 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div8 input" ).prop( "checked", true );
 $(".checkboxd-div8 > label").css({"color": "#FFC000"});

}
 
});


$(".checkboxd-div9").click(function(){
var has = $(".checkboxd-div9 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div9 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div9 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div9 input" ).prop( "checked", true );
 $(".checkboxd-div9 > label").css({"color": "#FFC000"});

}
 
});

$('.language-div').click(function(){



           $('.sidebar').hide();
 $(".transfromimg").removeClass('rotate2');

     if( $('.sidebara').is(':visible') ) {
      //alert('dfd');
        $('.sidebara').animate({ 'width': '0px' }, 'slow', function(){
          //alert('hi');
            $('.sidebara').hide();              
        });
        $('#slow-slide').animate({ 'margin-right': '0px' }, 'slow');
        $('.pane').css({ 'position': 'absolute' });
        $('.student-test').show();
        $(".language-icon img").removeClass('rotate2');
    }
    else {

        $('.sidebara').show();
        $('.sidebara').animate({ 'width': '250px' }, 'slow');
        $('#slow-slide').animate({ 'margin-right': '250px' }, 'slow');
        $('#slow-slide').css({ 'float': 'right','position':'static' },'slow');
        $('.pane').css({ 'position': 'static' });
        $('.menu').css({'display' :'none important','z-index':'-999'});
        $(".menu").hide();
        $('.student-test').hide();
        $(".language-icon img").addClass('rotate2');
    }




});

/* check box change color script*/
 
$(".filter-div").click(function(){

//alert("first");


  var selectedcate=$(".spelizationsids").text();
//  alert(selectedcate);
 selectedcate= selectedcate.substring(1);
 //alert(selectedcate);

    var url='/get_serachresult';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
params: {'selectedcate': selectedcate},
   
    }).then(function mySucces(searchresult) {
// alert(searchresult);
 var searchresultd =JSON.stringify(searchresult);
 //alert(searchresult); 
//$(".discover-content").html("");


$("#slow-slide").hide();
  $(".sidebar").hide();
   $(".sidebara").hide();

 $(".sidebara").hide();
  $("#discover").show(); 
var data="";
//var items="";
$.each(searchresult.data, function(i, obj) { 

alert(obj);

if(obj==0)
{
  data +="<div id='not_found'></div>"; 
}
var searchresultd =JSON.stringify(obj); 
console.log(obj[0].speciality);
console.log(obj[0].firstname);
console.log('dfd'); 
//alert(obj[0].speciality);
if(obj[0].speciality==undefined)
{
 data +="<div id='not_found"+obj[0].id+"'></div>";
}
else
{


 data +="<div id='searchlop' class='discover-content"+obj[0].id+"'><div class='content-part'><div class='top-of-content'></div><div class='middel-part'><div class='left-part-middel'><div class='text-part-left'><h1>"+obj[0].firstname+" </h1><p></p></div></div><div class='text-right-part'><h1></h1></div></div></div></div>";
}
  
   var url='/get_cateid';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
params: {'selectedcated': obj[0].speciality},
   
    }).then(function mySucces(searchresult2) {

console.log(searchresult2.data.name);
var id=searchresult2.data.id;
var  items = searchresult2.data.name;
//alert(items);
 
//alert(obj[0].speciality);
//alert(id);
$(".discover-content"+obj[0].id+" .text-part-left p").html("");
 if(obj[0].speciality==id)
 {
$(".discover-content"+obj[0].id+" .text-part-left p").append(items);
 }
 else
 {
$(".discover-content"+obj[0].id+" .text-part-left"+obj[0].id+" p").append("");
 }


    });
 

});

 $(".discover-content").html(data);
//alert(items);
 

}); 




});



$("#chekcbox1").click(function(){
 // alert('jas'); 
 
var has = $("#chekcbox1 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox1 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox1 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox1 input" ).prop( "checked", true );
 $("#chekcbox1 > label").css({"color": "#FFC000"});

}
 
});
 

$("#chekcbox2").click(function(){
/* alert('jas');*/

var has = $("#chekcbox2 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox2 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox2 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox2 input" ).prop( "checked", true );
 $("#chekcbox2 > label").css({"color": "#FFC000"});

}
 
});





$("#chekcbox3").click(function(){
/* alert('jas');*/

var has = $("#chekcbox3 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox3 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox3 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox3 input" ).prop( "checked", true );
 $("#chekcbox3 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox4").click(function(){
/* alert('jas');*/

var has = $("#chekcbox4 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox4 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox4 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox4 input" ).prop( "checked", true );
 $("#chekcbox4 > label").css({"color": "#FFC000"});

}
 
});




$("#chekcbox5").click(function(){
/* alert('jas');*/

var has = $("#chekcbox5 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox5 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox5 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox5 input" ).prop( "checked", true );
 $("#chekcbox5 > label").css({"color": "#FFC000"});

}
 
});




$("#chekcbox6").click(function(){
/* alert('jas');*/

var has = $("#chekcbox6 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox6 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox6 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox6 input" ).prop( "checked", true );
 $("#chekcbox6 > label").css({"color": "#FFC000"});

}
 
});


$("#chekcbox7").click(function(){
/* alert('jas');*/

var has = $("#chekcbox7 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox7 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox7 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox7 input" ).prop( "checked", true );
 $("#chekcbox7 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox8").click(function(){
/* alert('jas');*/

var has = $("#chekcbox8 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox8 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox8 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox8 input" ).prop( "checked", true );
 $("#chekcbox8 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox9").click(function(){
/* alert('jas');*/

var has = $("#chekcbox9 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox9 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox9 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox9 input" ).prop( "checked", true );
 $("#chekcbox9 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox10").click(function(){
/* alert('jas');*/

var has = $("#chekcbox10 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox10 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox10 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox10 input" ).prop( "checked", true );
 $("#chekcbox10 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox11").click(function(){
/* alert('jas');*/

var has = $("#chekcbox11 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox11 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox11 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox11 input" ).prop( "checked", true );
 $("#chekcbox11 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox12").click(function(){
/* alert('jas');*/

var has = $("#chekcbox12 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox12 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox12 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox12 input" ).prop( "checked", true );
 $("#chekcbox12 > label").css({"color": "#FFC000"});

}
 
});


$("#chekcbox13").click(function(){
/* alert('jas');*/

var has = $("#chekcbox13 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox13 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox13 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox13 input" ).prop( "checked", true );
 $("#chekcbox13 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox14").click(function(){
/* alert('jas');*/

var has = $("#chekcbox14 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox14 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox14 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox14 input" ).prop( "checked", true );
 $("#chekcbox14 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox15").click(function(){
/* alert('jas');*/

var has = $("#chekcbox15 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox15 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox15 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox15 input" ).prop( "checked", true );
 $("#chekcbox15 > label").css({"color": "#FFC000"});

}
 
});


$("#chekcbox16").click(function(){
/* alert('jas');*/

var has = $("#chekcbox16 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox16 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox16 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox16 input" ).prop( "checked", true );
 $("#chekcbox16 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox17").click(function(){
/* alert('jas');*/

var has = $("#chekcbox17 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox17 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox17 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox17 input" ).prop( "checked", true );
 $("#chekcbox17 > label").css({"color": "#FFC000"});

}
 
});


 

$("#chekcbox18").click(function(){
/* alert('jas');*/

var has = $("#chekcbox18 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox18 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox18 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox18 input" ).prop( "checked", true );
 $("#chekcbox18 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox19").click(function(){
/* alert('jas');*/

var has = $("#chekcbox19 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox19 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox19 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox19 input" ).prop( "checked", true );
 $("#chekcbox19 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox20").click(function(){
/* alert('jas');*/

var has = $("#chekcbox20 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox20 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox20 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox20 input" ).prop( "checked", true );
 $("#chekcbox20 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox21").click(function(){
/* alert('jas');*/

var has = $("#chekcbox21 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox21 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox21 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox21 input" ).prop( "checked", true );
 $("#chekcbox21 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox22").click(function(){
/* alert('jas');*/

var has = $("#chekcbox22 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox22 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox22 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox22 input" ).prop( "checked", true );
 $("#chekcbox22 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox23").click(function(){
/* alert('jas');*/

var has = $("#chekcbox23 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox23 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox23 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox23 input" ).prop( "checked", true );
 $("#chekcbox23 > label").css({"color": "#FFC000"});

}
 
});


});
   

          // $scope.filterpa();

            //alert('dfdf');
          }, 1000);
          
         
         /*  $timeout(function() {

             //$scope.closelogin_two();


          }, 1000); */

                 $timeout(function() {

             $scope.loginmenuhide();
             $scope.loginmenuhidehide();
             

          }, 1000);  



           

        }else{
          $scope.loginError = $scope.loginDetails.error.status;
          $scope.loginErrorMsg = $scope.loginDetails.error.msg;
          $timeout(function() {
            $ionicLoading.hide();
          }, 1000);
        }
    });
  }
    $scope.doSignup = function() {
      $ionicLoading.show({
      /*  template: '<img  src="img/await.gif" />'*/
      });
      $scope.signUpData.usertype='2';
      var url='/get_signup_details';
      $http({
        url: $scope.baseurl+url, 
        method: "GET",
        params: {'signUpData': $scope.signUpData},
      }).then(function mySucces(response) {
        
          $scope.signupDetails = response.data; 
          $scope.signupError = $scope.signupDetails.status;
          $scope.signupMessage = $scope.signupDetails.msg;
          $timeout(function() {
            $ionicLoading.hide();
          }, 1000);
      });
    }
    
    $ionicHistory.clearCache();
    $scope.my_booking =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.my_booking');
    }
    $scope.doForgot =function(){
      //console.log($scope.resetData);
    }

    $scope.Logout = function() {
     localStorage.removeItem("sessionid");
      $sessionStorage.userSession = '';
      $scope.userSessionStatus = false;
      $scope.noSessionStatus = true;
      $window.location.href = 'index.html';
          //$scope.closemenulogo();

    }

/*  session time script start */

var jas=localStorage.getItem('sessionid');
//alert(jas);
if(jas)
 {

  $ionicLoading.show({

      //template: '<img  src="img/loading.gif" />'
    });
// $scope.closeLogin();

 var text = '{ "userid":"2" "usertype":"2"}';

    $scope.loginData.usertype='2';
    var url='/get_login_details2';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
      params: {'loginData': text},
    }).then(function mySucces(response) {
         // $scope.closeLogin();
      //alert("success")
        $scope.loginDetails = response.data; 
        // $sessionStorage.userSession = response.data;
        // console.log($sessionStorage.SessionMessage);
        if($scope.loginDetails.error.status===false){
          $sessionStorage.userSession = response.data;
          $scope.userSession = response.data;
          $scope.userSessionStatus = true;
          $scope.AppointmentDetails.details = true;
          $scope.noSessionStatus = false;
        
          
        //  alert('true')
        }else{
          // alert('hi');
        $sessionStorage.userSession = response.data;
        $scope.userSession = response.data;
        $scope.userSessionStatus = true;
        $scope.AppointmentDetails.details = true;
        $scope.noSessionStatus = false;
        $ionicLoading.hide({

        //template: '<img  src="img/loading.gif" />'
        });
$document.ready(function(){




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
var a = a+','; 
var  a1= a1+','; 
}

if(b==undefined && b1==undefined)
{
 b='';
  b1='';
} 
else{
 var b = b+','; 
  var b1 = b1+','; 
}
if(c==undefined && c1==undefined)
{
 c='';
  c1='';
}
else{
 var c = c+','; 
  var c1 = c1+','; 
} 
if(d==undefined && d1==undefined)
{
 d='';
 d1='';
} 
else{
var d =  d+','; 
var d1 =  d1+','; 
}
if(e==undefined && e1==undefined)
{
 e='';
  e1='';
}
else{
var e =  e+',';
var e1 =  e1+','; 
} 
if(f==undefined && f1==undefined)
{
 f='';
  f1='';
} 
else{
 var f = f+','; 
  var f1 = f1+','; 
}
if(g==undefined && g1==undefined)
{
 g='';
  g1='';
} 
else{
var g =  g+','; 
var g1 =  g1+','; 
}
if(h==undefined && h1==undefined)
{
 h='';
  h1='';
} 
else{
var h =  h+','; 
var h1 =  h1+','; 
}
 var com = a+' '+b+' '+c+' '+d+' '+e+' '+f+' '+g+''+h ;
 com = com.replace(/,\s*$/, "");
$("#appendinto").append(':'+com);


var com1 = a1+''+b1+''+c1+''+d1+''+e1+''+f1+''+g1+''+h1 ;
 com1 = com1.replace(/,\s*$/, "");
$(".spelizationsids").append(':'+com1);

 

  //alert('dd');
   




});




//alert('dfd');
 $(".categories-div-left").css({"display":"none"});
  $(".padding").css({"padding":"0px"});
  

        $(".signup_back_btn").css({"display": "inline"});
  

 
 
$(".theme-bg").css('background-color','#fff');

   var widthvar = $( window ).width();
      var heightvar = $( window ).height();
 
  $(window).resize(function(){

      var heightvar = $( window ).height();
 
       var widthvar = $( window ).width();
     //alert(widthvar); 

 if(widthvar==320)
 {

$(".slider-wrapper").css('width','255px');
$(".slider-wrapper2").css({'border':'0px solid red','width':'257px','margin':'0 0 26px 31px'})
$(".range-handle").css('left','0px');

 }



 if(widthvar==360)
 {
  //alert('dd');
  //$(".categories-div-left").css("cssText", "display: none !important;");

  $(".categories-div-left").hide();

$(".cate-slide").css('display','none');
$(".slider-wrapper").css('width','263px');
$(".slider-wrapper2").css({'width':'266px','margin':'0 0 27px 44px'});
 
 }

  if(widthvar==480)
 {
$(".slider-wrapper").css('width','378px');
$(".slider-wrapper2").css('width','382px');
 
} 

  if(widthvar==640)
 {
$(".slider-wrapper").css('width','560px');
$(".slider-wrapper2").css('width','549px');
$(".filter-page-contant .example").css('margin-top','34px');


 
} 
 
});


 if(widthvar==320)
 {
$(".slider-wrapper").css('width','255px');
$(".slider-wrapper2").css({'border':'0px solid red','width':'257px','margin':'0 0 26px 31px'})

//css('border','1px solid red','width','257px','margin','0 0 26px 31px;');
 
 }

   if(widthvar==360)
 {

  $(".filter-page-contant").css('height','100vh');
$(".slider-wrapper").css('width','263px');
$(".slider-wrapper2").css({'width':'266px','margin':'0 0 27px 44px'});

//$(".filter-page-contant .range-bar").css('margin-bottom','35px');
 
 }

  if(widthvar==480)
 {
$(".slider-wrapper").css('width','378px');
$(".slider-wrapper8").css('width','382px');
}
  if(widthvar==640)
 {
$(".slider-wrapper").css('width','560px');
$(".slider-wrapper2").css('width','549px');
$(".filter-page-contant .example").css('margin-top','34px');
 
} 
  //alert('hi');


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


        $(document).ready(function(){





          $(".slider-wrapper .range-bar .range-min").html("");
$(".first-star1").click(function(){
    $(".norating").html("");

$(".norating").append('<p class="countrating">1</p>');

 

$(".first-star1 img").attr('src',"img/1star copy.png").css("width","100%");
 
$(".first-star2 img").attr('src',"img/second_img.png");
$(".first-star3 img").attr('src',"img/third_img1.png");
$(".first-star4 img").attr('src',"img/fourth_img.png");
$(".first-star5 img").attr('src',"img/fifth_img.png");

$(".Click img").attr('src',"img/fifth_img.png");

});

$(".first-star2").click(function(){
    $(".norating").html("");


$(".norating").append('<p class="countrating">2</p>');

$(".first-star2 img").attr('src',"img/2star copy.png").css("width","100%");



$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star3 img").attr('src',"img/third_img1.png").css("width","100%");
$(".first-star4 img").attr('src',"img/fourth_img.png").css("width","100%");
$(".first-star5 img").attr('src',"img/fifth_img.png").css("width","100%").css("width","100%");


});

$(".first-star3").click(function(){
        $(".norating").html("");


$(".norating").append('<p class="countrating">3</p>');

 

$(".first-star3 img").attr('src',"img/3star copy.png").css("width","100%");

$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star2 img").attr('src',"img/second_img.png").css("width","100%");
$(".first-star4 img").attr('src',"img/fourth_img.png").css("width","100%");
$(".first-star5 img").attr('src',"img/fifth_img.png").css("width","100%");


});

$(".first-star4").click(function(){
        $(".norating").html("");


$(".norating").append('<p class="countrating">4</p>');


$(".first-star4 img").attr('src',"img/4star copy.png").css("width","100%");

$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star2 img").attr('src',"img/second_img.png").css("width","100%");
$(".first-star3 img").attr('src',"img/third_img1.png").css("width","100%");
$(".first-star5 img").attr('src',"img/fifth_img.png").css("width","100%");

});


$(".first-star5").click(function(){
 
    $(".norating").html("");
$(".norating").append('<p class="countrating">5</p>');

 $(".first-star5 img").attr('src',"img/5star.png").css("width","100%");

$(".first-star1 img").attr('src',"img/first_img.png").css("width","100%");
$(".first-star2 img").attr('src',"img/second_img.png").css("width","100%");
$(".first-star3 img").attr('src',"img/third_img1.png").css("width","100%");
$(".first-star4 img").attr('src',"img/fourth_img.png").css("width","100%");
 
});
 
 
});

  

    $( ".slider-wrapper .range-max" ).html( "" );
    $( ".slider-wrapper .range-max" ).prepend( "$250" );
    $( ".slider-wrapper2 .range-min" ).html( "" );
    $( ".slider-wrapper2 .range-min" ).append( "0m" );
    $( ".slider-wrapper2 .range-max" ).html( "" );
    $( ".slider-wrapper2 .range-max" ).append( "50m" );
 
$('.js-display-changes').html("0");
$('.Reset-arrow').click(function(){

   $('#cate-slide input:checkbox').removeAttr('checked');
     $('#cate-slide label').css('color','#fff');

      $('.languages input:checkbox').removeAttr('checked');
     $('.languages label').css('color','#fff');
      //  $(this).val('check all');   



});
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {

  }
else
{

$(".filter-page").css({"margin-top": "-4px"});
}

$(".common-button.button.button-positive.button-clear.button_text.icon.ion-navicon.txt-color-black").click(function(){
  $('.pane').css({ 'position': 'absolute' })
      $('.filter-page-contant').css({ 'margin-right': '0px' });
     // alert('hi');
          $('.menu').css({ 'display': 'inline' });

});

$('.yoga-wordout').click(function(){


//alert('1384dd');
  $('.sidebara').hide();
          $(".language-icon img").removeClass('rotate2');
   
     if( $('.sidebar').is(':visible') ) {
        $('.sidebar').animate({ 'width': '0px' }, 'slow', function(){
            $('.sidebar').hide();              
        });
        $('#slow-slide').animate({ 'margin-right': '0px' }, 'slow');
        $('.pane').css({ 'position': 'absolute' });
        $('.student-test').show();
        $(".transfromimg").removeClass('rotate2');
    }
    else {

        $('.sidebar').show();
        $('.sidebar').animate({ 'width': '250px' }, 'slow');
        $('#slow-slide').animate({ 'margin-right': '250px' }, 'slow');
        $('#slow-slide').css({ 'float': 'right','position':'static' },'slow');
        $('.pane').css({ 'position': 'static' });
        $('.menu').css({'display' :'none important','z-index':'-999'});
        $(".menu").hide();
        $('.student-test').hide();
        $(".transfromimg").addClass('rotate2');
    }

 
});


$('.language-div').click(function(){

//alert('dfd');
/*
var widthlan=$(window).width();
var heightlan=$(window).height();

if(widthlan==320 && heightlan==480 )
{

$(".languages").css({ 'height': '418px' });
}
else if(widthlan==320 && heightlan==568 )
{
$(".languages").css({ 'height': '503px' });
}
 
else
{


$(".languages").css({ 'height': '100vh' });
}*/




           $('.sidebar').hide();
 $(".transfromimg").removeClass('rotate2');

     if( $('.sidebara').is(':visible') ) {
      //alert('dfd');
        $('.sidebara').animate({ 'width': '0px' }, 'slow', function(){
          //alert('hi');
            $('.sidebara').hide();              
        });
        $('#slow-slide').animate({ 'margin-right': '0px' }, 'slow');
        $('.pane').css({ 'position': 'absolute' });
        $('.student-test').show();
        $(".language-icon img").removeClass('rotate2');
    }
    else {

        $('.sidebara').show();
        $('.sidebara').animate({ 'width': '250px' }, 'slow');
        $('#slow-slide').animate({ 'margin-right': '250px' }, 'slow');
        $('#slow-slide').css({ 'float': 'right','position':'static' },'slow');
        $('.pane').css({ 'position': 'static' });
        $('.menu').css({'display' :'none important','z-index':'-999'});
        $(".menu").hide();
        $('.student-test').hide();
        $(".language-icon img").addClass('rotate2');


/*        alert('dfd');
  var hi=$( "input[type=checkbox]" ).on( "click", Checked );
  alert(hi);*/
    }




});

$(".filter-div").click(function(){

 // alert("seocnd");


  var selectedcate=$(".spelizationsids").text();
//  alert(selectedcate);
 selectedcate= selectedcate.substring(1);
 //alert(selectedcate);

    var url='/get_serachresult';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
params: {'selectedcate': selectedcate},
   
    }).then(function mySucces(searchresult) {
// alert(searchresult);
 var searchresultd =JSON.stringify(searchresult);
 //alert(searchresult); 
//$(".discover-content").html("");


$("#slow-slide").hide();
  $(".sidebar").hide();
   $(".sidebara").hide();

 $(".sidebara").hide();
  $("#discover").show(); 
var data="";
//var items="";
$.each(searchresult.data, function(i, obj) { 

//alert(obj);

if(obj==0)
{
  //alert('hi');
data +="<div id='not_found'></div>"; 
}
var searchresultd =JSON.stringify(obj); 
console.log(obj[0].speciality);
console.log(obj[0].firstname);
console.log('dfd'); 
//alert(obj[0].speciality);
if(obj[0].speciality==undefined)
{
 data +="<div id='not_found"+obj[0].id+"'></div>";
}
else
{


 data +="<div id='searchlop' class='discover-content"+obj[0].id+"'><div class='content-part'><div class='top-of-content'></div><div class='middel-part'><div class='left-part-middel'><div class='text-part-left'><h1>"+obj[0].firstname+" </h1><p></p></div></div><div class='text-right-part'><h1></h1></div></div></div></div>";
}
  
   var url='/get_cateid';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
params: {'selectedcated': obj[0].speciality},
   
    }).then(function mySucces(searchresult2) {

console.log(searchresult2.data.name);
var id=searchresult2.data.id;
var  items = searchresult2.data.name;
//alert(items);
 
//alert(obj[0].speciality);
//alert(id);
$(".discover-content"+obj[0].id+" .text-part-left p").html("");
 if(obj[0].speciality==id)
 {
$(".discover-content"+obj[0].id+" .text-part-left p").append(items);
 }
 else
 {
$(".discover-content"+obj[0].id+" .text-part-left"+obj[0].id+" p").append("");
 }


    });
 

});

 $(".discover-content").html(data);
//alert(items);
 

}); 




});


$("#chekcbox1").click(function(){
 // alert('jas'); 
 
var has = $("#chekcbox1 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox1 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox1 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox1 input" ).prop( "checked", true );
 $("#chekcbox1 > label").css({"color": "#FFC000"});

}
 
});
 

$("#chekcbox2").click(function(){
/* alert('jas');*/

var has = $("#chekcbox2 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox2 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox2 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox2 input" ).prop( "checked", true );
 $("#chekcbox2 > label").css({"color": "#FFC000"});

}
 
});





$("#chekcbox3").click(function(){
/* alert('jas');*/

var has = $("#chekcbox3 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox3 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox3 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox3 input" ).prop( "checked", true );
 $("#chekcbox3 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox4").click(function(){
/* alert('jas');*/

var has = $("#chekcbox4 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox4 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox4 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox4 input" ).prop( "checked", true );
 $("#chekcbox4 > label").css({"color": "#FFC000"});

}
 
});




$("#chekcbox5").click(function(){
/* alert('jas');*/

var has = $("#chekcbox5 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox5 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox5 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox5 input" ).prop( "checked", true );
 $("#chekcbox5 > label").css({"color": "#FFC000"});

}
 
});




$("#chekcbox6").click(function(){
/* alert('jas');*/

var has = $("#chekcbox6 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox6 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox6 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox6 input" ).prop( "checked", true );
 $("#chekcbox6 > label").css({"color": "#FFC000"});

}
 
});


$("#chekcbox7").click(function(){
/* alert('jas');*/

var has = $("#chekcbox7 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox7 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox7 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox7 input" ).prop( "checked", true );
 $("#chekcbox7 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox8").click(function(){
/* alert('jas');*/

var has = $("#chekcbox8 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox8 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox8 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox8 input" ).prop( "checked", true );
 $("#chekcbox8 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox9").click(function(){
/* alert('jas');*/

var has = $("#chekcbox9 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox9 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox9 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox9 input" ).prop( "checked", true );
 $("#chekcbox9 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox10").click(function(){
/* alert('jas');*/

var has = $("#chekcbox10 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox10 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox10 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox10 input" ).prop( "checked", true );
 $("#chekcbox10 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox11").click(function(){
/* alert('jas');*/

var has = $("#chekcbox11 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox11 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox11 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox11 input" ).prop( "checked", true );
 $("#chekcbox11 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox12").click(function(){
/* alert('jas');*/

var has = $("#chekcbox12 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox12 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox12 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox12 input" ).prop( "checked", true );
 $("#chekcbox12 > label").css({"color": "#FFC000"});

}
 
});


$("#chekcbox13").click(function(){
/* alert('jas');*/

var has = $("#chekcbox13 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox13 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox13 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox13 input" ).prop( "checked", true );
 $("#chekcbox13 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox14").click(function(){
/* alert('jas');*/

var has = $("#chekcbox14 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox14 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox14 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox14 input" ).prop( "checked", true );
 $("#chekcbox14 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox15").click(function(){
/* alert('jas');*/

var has = $("#chekcbox15 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox15 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox15 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox15 input" ).prop( "checked", true );
 $("#chekcbox15 > label").css({"color": "#FFC000"});

}
 
});


$("#chekcbox16").click(function(){
/* alert('jas');*/

var has = $("#chekcbox16 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox16 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox16 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox16 input" ).prop( "checked", true );
 $("#chekcbox16 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox17").click(function(){
/* alert('jas');*/

var has = $("#chekcbox17 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox17 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox17 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox17 input" ).prop( "checked", true );
 $("#chekcbox17 > label").css({"color": "#FFC000"});

}
 
});


 

$("#chekcbox18").click(function(){
/* alert('jas');*/

var has = $("#chekcbox18 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox18 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox18 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox18 input" ).prop( "checked", true );
 $("#chekcbox18 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox19").click(function(){
/* alert('jas');*/

var has = $("#chekcbox19 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox19 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox19 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox19 input" ).prop( "checked", true );
 $("#chekcbox19 > label").css({"color": "#FFC000"});

}
 
});



$("#chekcbox20").click(function(){
/* alert('jas');*/

var has = $("#chekcbox20 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox20 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox20 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox20 input" ).prop( "checked", true );
 $("#chekcbox20 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox21").click(function(){
/* alert('jas');*/

var has = $("#chekcbox21 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox21 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox21 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox21 input" ).prop( "checked", true );
 $("#chekcbox21 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox22").click(function(){
/* alert('jas');*/

var has = $("#chekcbox22 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox22 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox22 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox22 input" ).prop( "checked", true );
 $("#chekcbox22 > label").css({"color": "#FFC000"});

}
 
});

$("#chekcbox23").click(function(){
/* alert('jas');*/

var has = $("#chekcbox23 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( "#chekcbox23 input" ).prop( "checked", false );
  // alert('tes true');
   $("#chekcbox23 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( "#chekcbox23 input" ).prop( "checked", true );
 $("#chekcbox23 > label").css({"color": "#FFC000"});

}
 
});
/* check box change color script*/
$(".checkboxd-div7").click(function(){
var has = $(".input07").is( ":checked" );
if(has==true)
{
  //alert('tes true');
$(".checkboxd-div7 > label").css({"color": "#FFC000"});
}else
{
 $(".checkboxd-div7 > label").css({"color": "#FFFFFF"}); 
}
 
});


$(".checkboxd-div1").click(function(){
/* alert('jas');*/

var has = $(".checkboxd-div1 input").prop('checked')==true;
/*alert(has);*/
if(has==true)
{
  $( ".checkboxd-div1 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div1 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div1 input" ).prop( "checked", true );
 $(".checkboxd-div1 > label").css({"color": "#FFC000"});

}
 
});

 

$(".checkboxd-div2").click(function(){
var has = $(".checkboxd-div2 input").prop('checked')==true;
//alert(has);
if(has==true)
{
  $( ".checkboxd-div2 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div2 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div2 input" ).prop( "checked", true );
 $(".checkboxd-div2 > label").css({"color": "#FFC000"});

}
 
});




$(".checkboxd-div3").click(function(){
var has = $(".checkboxd-div3 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div3 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div3 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div3 input" ).prop( "checked", true );
 $(".checkboxd-div3 > label").css({"color": "#FFC000"});

}
 
});

$(".checkboxd-div4").click(function(){
var has = $(".checkboxd-div4 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div4 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div4 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div4 input" ).prop( "checked", true );
 $(".checkboxd-div4 > label").css({"color": "#FFC000"});

}
});



$(".checkboxd-div5").click(function(){
var has = $(".checkboxd-div5 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div5 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div5 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div5 input" ).prop( "checked", true );
 $(".checkboxd-div5 > label").css({"color": "#FFC000"});

}
 
});



$(".checkboxd-div6").click(function(){
var has = $(".checkboxd-div6 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div6 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div6 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div6 input" ).prop( "checked", true );
 $(".checkboxd-div6 > label").css({"color": "#FFC000"});

}
 
});


$(".checkboxd-div7").click(function(){
var has = $(".checkboxd-div7 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div7 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div7 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div7 input" ).prop( "checked", true );
 $(".checkboxd-div7 > label").css({"color": "#FFC000"});

}
 
});
$(".checkboxd-div8").click(function(){
var has = $(".checkboxd-div8 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div8 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div8 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div8 input" ).prop( "checked", true );
 $(".checkboxd-div8 > label").css({"color": "#FFC000"});

}
 
});


$(".checkboxd-div9").click(function(){
var has = $(".checkboxd-div9 input").prop('checked')==true;
if(has==true)
{
  $( ".checkboxd-div9 input" ).prop( "checked", false );
  // alert('tes true');
   $(".checkboxd-div9 > label").css({"color": "#FFFFFF"}); 

}else
{
/*alert("falsedd");*/
$( ".checkboxd-div9 input" ).prop( "checked", true );
 $(".checkboxd-div9 > label").css({"color": "#FFC000"});

}
 
});

}); //document get element

        }
    });
 

}


/*  session time script end */
 



    $scope.get_appointments = function(){
      console.log('appointment');
      $scope.loading=true;
      $scope.loadingpart=false;
      $ionicHistory.nextViewOptions({ disableBack: true });
      var url='/get_appointment_list';
      $http({
          url: $scope.baseurl+url, 
          method: "GET",
          params: {'user_id': $scope.userSession.userID},
        }).then(function mySucces(response) {
            $scope.AppointmentList = response.data; 
            console.log($scope.AppointmentList);
            $timeout(function() {
              $scope.loading = false; 
              $scope.loadingpart = ($scope.AppointmentList.status) ? true :false;
              $scope.AppointmentStatus = ($scope.AppointmentList.status==false) ? true :false;
            }, 1000);
        });
      };



/*  second resister function */
 
  $scope.doSignud = function() {

    alert('hello');
  /*    $ionicLoading.show({
        template: '<img  src="img/loading.gif" />'
      });
      $scope.signUpData.usertype='2';
      var url='/get_signup_details';
      $http({
        url: $scope.baseurl+url, 
        method: "GET",
        params: {'signUpData': $scope.signUpData},
      }).then(function mySucces(response) {
          $scope.signupDetails = response.data; 
          $scope.signupError = $scope.signupDetails.status;
          $scope.signupMessage = $scope.signupDetails.msg;
          $timeout(function() {
            $ionicLoading.hide();
          }, 1000);
      });*/
 }

/*  end second function */












      $scope.view_doc = function(id){
        $scope.doc_popup_id=id;
        //console.log(id);
        var url='/get_doc_details';
        $http({
          url: $scope.baseurl+url, 
          method: "GET",
          params: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.docpopup = response.data; 
            $scope.doc_modal.show();
        });
      }
      $scope.Doc.date = (searchdate.get()=='')? new Date() :searchdate.get();

      $scope.loading = true; 
      $scope.loadingpart = false;

      $rootScope.updateDoc = function(id,fname,lname,speciality,rating,image,address,status){
        $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $window.location.href='#app/doctor';
        $scope.Doc.id = (id=='')? $scope.Doc.id : id;
        var date = $scope.Doc.date ;
        date.setDate( $scope.Doc.date.getDate());
        $scope.Doc.endDate = $scope.Doc.date;
        var date1 = $scope.Doc.endDate ;
        date1.setDate( $scope.Doc.endDate.getDate());
        $scope.Doc.fname = fname;
        $scope.Doc.lname = lname;
        $scope.Doc.speciality = speciality;
        $scope.Doc.rating = rating;
        $scope.Doc.image = image;
        $scope.Doc.address = address;
        $scope.Doc.status = status;
        console.log($scope.loading);
        var url='/get_doctor_details';
        $http({
          url: $scope.baseurl+url, 
          method: "GET",
          params: {'docData': $scope.Doc},
        }).then(function mySucces(response) {
          $scope.Doc.resultData = response.data;
          $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true;
          }, 1000);
          date1.setDate( $scope.Doc.endDate.getDate()+4);
          $scope.doc_modal.hide();
          
        });
    }
$scope.selectedDay = (searchdate.get()=='')? new Date() :searchdate.get();
  $scope.selectedDate =($scope.selectedDate=='')?  new Date() : $scope.selectedDate;

$scope.slide= function(myTransition) {
  $rootScope.transitionClass ='test';
    $timeout(function(){
      $rootScope.transitionClass = myTransition;
    },500);
}

})





.controller('BMDCtrl', function($ionicModal,$rootScope,$scope, $stateParams,$http,speciality,location,insurance,searchdate,$window,$timeout,$filter,$ionicLoading) {
  $scope.apnt_init = function(){
    //$stateParams.apnt_date_time = $stateParams.apnt_date_time.replace(/([T,a,p])/g, ' $1');
    // var date = new Date($stateParams.apnt_date_time).getTime();
    // var offset = new Date($stateParams.apnt_date_time).getTimezoneOffset();
    // var selectedDate = date - offset;
    // $scope.AppointmentDetails.selectedDate = new Date($stateParams.apnt_date_time).getTime();
    // console.log(new Date(Date.parse($scope.AppointmentDetails.apnt_date_time)).toUTCString());
    $scope.AppointmentDetails.selectedDate = $stateParams.apnt_date_time;

    var url='/get_insurance_list';
    $http({
        url: $scope.baseurl+url, 
        method: "GET",
      }).then(function mySucces(response) {
          $scope.AppointmentDetails.selectionDetails = response.data; 
      });
    }
    
    $scope.slide_apnt= function(myTransition,prev,next) {
      $rootScope.transitionClass ='sample';
        $timeout(function(){
          $rootScope.transitionClass = myTransition;
          $scope.AppointmentDetails.details = (next=="details") ? true : false;
          $scope.AppointmentDetails.confirm = (next=="confirm") ? true : false;
          $scope.AppointmentDetails.success = (next=="success") ? true : false;
        },300);
    }
    //check app_config
    var url='/get_app_details';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
      params: {'my_key': $scope.my_key},
    }).then(function mySucces(response) {
      $timeout(function(){
        $ionicLoading.hide();
      },1000);
      var status = response.data.status;
      console.log(status);
      if(status==false){
        $window.location.href = '#/app/bmd-blocked';
        console.log('bmd-blocked');
      }
    });

    $scope.search = function(search_text){
      $window.location.href = '#/app/search_list/'+search_text;
      //console.log(search_text);
      
    }
    $scope.loading = true; 
    $scope.loadingpart = false;
    $scope.searchList = function(){
      var url='/act-search-bar';
      $http({
          url: $scope.baseurl+url, 
          method: "GET",
          params: {'search_text': $stateParams.search_text},
        }).then(function mySucces(response) {
            $scope.searchResponse = response.data;
            //console.log($scope.searchResponse);
            //$window.location.href = '#/app/search_list';
            $timeout(function() {
              $scope.loading = false; 
              $scope.loadingpart = ($scope.searchResponse.location == null && $scope.searchResponse.user == null && $scope.searchResponse.speciality == null && $scope.searchResponse.insurance == null && $scope.searchResponse.languages == null ) ? false : true;
              $scope.noMoreItems = ($scope.searchResponse.location == null && $scope.searchResponse.user == null && $scope.searchResponse.speciality == null && $scope.searchResponse.insurance == null && $scope.searchResponse.languages == null ) ? true : false; 
            }, 1000);
        });
    }
     $scope.view_search_list_doc = function(id){
        $scope.doc_popup_id=id;
        //console.log(id);
        var url='/get_doc_details';
        $http({
          url: $scope.baseurl+url, 
          method: "GET",
          params: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.docpopup = response.data; 
            $scope.doc_modal.show();
        });
      }

    $scope.test = function(test){
      $scope.srchReason = test;
    }

    $scope.bookAppointment = function(){
      $ionicLoading.show({
      /*  template: '<img  src="img/await.gif" />'*/
      });
      $scope.Appointment ={};
      $scope.Appointment.doctor_id = $scope.Doc.id;
      // $scope.Appointment.apnttime = $filter('date')($scope.AppointmentDetails.selectedDate, "EEEE,MMMM dd,yyyy")+" at "+$filter('date')($scope.AppointmentDetails.selectedDate, "hh:mm a");
      $scope.Appointment.apnttime = $scope.AppointmentDetails.selectedDate;
      $scope.Appointment.patiendid = $scope.userSession.userID;
      $scope.Appointment.apnt_note = $scope.srchReason;
      $scope.Appointment.email = $scope.Doc.doctorId;
      $scope.Appointment.name = $scope.userSession.name;
      $scope.Appointment.docname = $scope.Doc.fname +" "+$scope.Doc.lname ;
      console.log($scope.Appointment);
        var url='/act-confirm-apnt-mobile';
        $http({
            url: $scope.baseurl+url, 
            method: "GET",
            params: {'Appointment': $scope.Appointment},
          }).then(function mySucces(response) {
              $scope.Appointment.response = response.data;
              //$scope.AppointmentDetails.confirm = false;
              //$scope.AppointmentDetails.success=true; 
              if(response.data.status==true){
                $timeout(function() {
                  $ionicLoading.hide();
                  $scope.slide_apnt('slidein-from-right','confirm','success');
                }, 1000);
              }else{
                $timeout(function() {
                  $ionicLoading.hide();
                }, 1000);
              }
          });
    }
  //console.log($scope.AppointmentDetails);
  $scope.selectionname = $stateParams.selectionId;
  var url='/get_selection_details';
  $scope.loading = true; 
  $scope.loadingpart = false;
  console.log($scope.loading);
  switch ($scope.selectionname) {
            case 'speciality':
                speciality.set('select any one');
                delete $scope.desiredSearchData.speciality;
                break;
            case 'insurance':
                insurance.set('I ll select my insurance company later.');
                delete $scope.desiredSearchData.insurance;
                break;
            case 'location':
                location.set('select your location');
                delete $scope.desiredSearchData.location;
                break;
            case 'languages':
                location.set('I ll select my insurance company later.');
                delete $scope.desiredSearchData.languages;
                break;
            default:

        }

  $http.get($scope.baseurl+url, { params: { 'selectionname': $scope.selectionname } })
  .success(function(response) {
    $scope.selectionDetails = response;
    $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 1000);
  });

    $scope.desiredSpeciality = speciality.get();
    $scope.desiredInsurance = insurance.get();
    $scope.desiredLocation = location.get();
    $scope.clickfunction =function(id,data,type,key){
      
      switch (type) {
            case 'speciality':
                speciality.set(data);
                $scope.desiredSearchData.speciality = id;
                break;
            case 'insurance':
                insurance.set(data);
                $scope.desiredSearchData.insurance = id;
                break;
            case 'location':
                location.set(data);
                $scope.desiredSearchData.location = id;
                break;
            case 'languages':
                location.set(data);
                $scope.desiredSearchData.languages = id;
                break;
            default:

        }
        var url=(key==null) ? '#/app/bmd-home' : '#/app/search' ;
      $window.location.href = url;
    }
    

 $ionicModal.fromTemplateUrl('templates/calendar.html', {
    scope: $scope,
    caching: false
  }).then(function(calendar_modal) {
    $scope.calendar_modal = calendar_modal;
  });
  $scope.calendar = function() {
    $scope.loading = true;
    $scope.loadingpart = false;
      var url='/get_calendar_details';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
    }).then(function mySucces(response) {
      $scope.calenderDetails = response.data;
      
      $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 1000);
    });

    $scope.calendar_modal.show();
  };

  $scope.calender_fetch = function(month,year){
    $scope.loading = true;
    $scope.loadingpart = false; 
     var url='/get_calendar_details';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
      params: {'month': month,'year':year},
    }).then(function mySucces(response) {
      $scope.calenderDetails = response.data;
      $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 1000);
    });
  };

  $scope.selectedDay = (searchdate.get()=='')? new Date() :searchdate.get();
  $scope.selectedDate =($scope.selectedDate=='')?  new Date() : $scope.selectedDate;
  $scope.desiredSearchData.selectedDate =$scope.selectedDate;
  $scope.selectedclass = 'none';
  //$scope.loading = false;
  $scope.loadingpart = false;
  $scope.updateDate = function(day,date){
    $scope.selectedDay = day;
    $scope.selectedDate = date;
    var HHmmss = $filter('date')(new Date(), 'HH:mm:ss');
    var selectedDate = date+"T"+HHmmss;
    $scope.desiredSearchData.selectedDate =new Date(selectedDate);
    searchdate.set($scope.desiredSearchData.selectedDate);
    $scope.selectedclass = ($scope.selectedclass == 'none') ? 'selected' : 'none';
  }

  $scope.closeCalendar = function() {
    $scope.calendar_modal.hide();
  };
  
  $scope.findDoc = function(){
    $window.location.href = '#/app/search';
  };
})
.controller('searchCtrl', function($ionicModal,$rootScope,$scope, $stateParams,$http,speciality,location,insurance,searchdate,$window,$timeout,$filter) {
    $scope.desiredSearchData.page=0;
    $scope.selectedDay = (searchdate.get()=='')? new Date() :searchdate.get();
    $scope.selectedDate = (searchdate.get()=='')? new Date() :searchdate.get();
    console.log($scope.selectedDate);
    $scope.questions = [];
    $scope.loadmore = function(NumOfFeedToLoad){
      $scope.noMoreItemsAvailable = false;
      $scope.noMoreItems = false;
      var page = $scope.desiredSearchData.page;
      $scope.desiredSearchData.page=++page;
      //console.log(page);
      $scope.desiredSearchData.selectedDate=$filter('date')($scope.selectedDate, "yyyy-MM-dd hh:mm a");
      //console.log($scope.desiredSearchData.status);
      var url='/get_search_details';
      $http({
        url: $scope.baseurl+url, 
        method: "GET",
        params: {'searchData': $scope.desiredSearchData},
      }).then(function mySucces(response) {
        $scope.searchResultData =response.data;
        $scope.questions = $scope.questions.concat(response.data.profile_details);
        console.log($scope.questions.length,response.data.length);
        //$scope.noMoreItemsAvailable = ($scope.questions.length >= response.data.length)? true : false;
        //$scope.noMoreItems = ($scope.questions.length >= response.data.length)? true : false;
        $scope.noMoreItemsAvailable = ($scope.questions.length >= response.data.length)? true : false;
        console.log('noMoreItemsAvailable'+$scope.noMoreItemsAvailable);
         $scope.noMoreItems = ($scope.searchResultData.hasOwnProperty('profile_details'))? false : true;
        console.log($scope.noMoreItems);
        console.log($scope.searchResultData.hasOwnProperty('profile_details'));
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.setDate = function(type){
      var date = $scope.selectedDate ;
      date.setDate((type=='next')? $scope.selectedDate.getDate()+1 : $scope.selectedDate.getDate()-1);
      searchdate.set(date);
      $scope.desiredSearchData.status=(type=='next')? 'next' : 'prev';
      $scope.desiredSearchData.selectedDate =$filter('date')(date, "yyyy-MM-dd hh:mm a");
      $scope.desiredSearchData.page=0;
      //angular.element($("[my-directive]")).html('');
      $scope.questions = [];
      $scope.loadmore();
    };
    

        $scope.Doc.date = $scope.selectedDate;
 
    
    $scope.single_calendar = function(status){
      $scope.loading = true; 
      $scope.loadingpart = false;
      //console.log(status);
      $scope.Doc.resultData ='';
      var date = $scope.Doc.date ;
      date.setDate((status=='next')? $scope.Doc.date.getDate()+5 : $scope.Doc.date.getDate()-5 );
      var date1 = $scope.Doc.endDate ;
      date1.setDate((status=='next')? $scope.Doc.endDate.getDate()+5 : $scope.Doc.endDate.getDate()-5 );
      $scope.Doc.status = status;
      var url='/get_doctor_details';
        $http({
          url: $scope.baseurl+url, 
          method: "GET",
          params: {'docData': $scope.Doc},
        }).then(function mySucces(response) {
          $scope.Doc.resultData = response.data;
          $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 3000);
        });
    }

    $scope.apnt_navigate = function(date,time){
      console.log(date,time);
      $scope.AppointmentDetails.details = true;
      $scope.AppointmentDetails.confirm = false;
      $scope.AppointmentDetails.success = false;
      $window.location.href = '#/app/appointment/'+date+'T'+time;
    }

})
;



