$(document).ready(function(){
  
//----------------------------------------------------------------------------------------------------------     
$("#Navigation").click(
    function () { 
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
      $('#Main').toggle();
});       

$("#Main").hide(); 

//-------------------------------------------------------------------- 
$("#Account").mouseover(function(){
      $("#HomeDropdown").css("visibility","visible");
      $("#RecycleDropdown").css("visibility","hidden");
});
$("#HomeDropdown").mouseleave (function(){
      $("#HomeDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------- 
$("#System").mouseover(function(){
      $("#RecycleDropdown").css("visibility","visible");
      $("#HomeDropdown").css("visibility","hidden");
});
//--------------------------------------------------------------------
$("#RecycleDropdown").mouseleave (function(){
      $("#RecycleDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------
$("#EcoShop").mouseover(function(){
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------
$("#Scanner").mouseover(function(){
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
});   

//-----------------------------------------------------------------------------------------------------------
function createErrors(){  
  var forms = document.getElementsByClassName("createForms");
  var pass = $(forms[name = "pass"]).val();
  var name = $(forms[name = "name"]).val();
  var email = $(forms[name = "email"]).val();
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if( $.trim( $(forms).val()) == ''){
    $(forms).attr('placeholder', "Required field"); 
    $(forms).addClass('red');
    $(forms).addClass('error');
  
    setTimeout(function(){ 
      $(forms).removeClass("red");
      $(forms).removeClass("error");
      $(forms[0]).attr('placeholder', "Forename:");
      $(forms[1]).attr('placeholder', "Surname:");
      $(forms[2]).attr('placeholder', "Email:"); 
      $(forms[3]).attr('placeholder', "Password:"); 
    }, 3000);
  }
  else if (!forms[0][1].checkValidity() || (name.length < 2) || 
  (!name.match(/\d/)) || (!name.match(/[a-z]/)) ){
       $(forms[0][1]).addClass('error');
    setTimeout(function(){ 
       $(forms[0][1]).removeClass('error');
    }, 3000);
  }
  else if (!forms[2].checkValidity() || (!email.match(validRegex))){
       $(forms[2]).addClass('error');
    setTimeout(function(){ 
      $(forms[2]).removeClass('error');
    }, 3000);
  }
  else if (!forms[3].checkValidity() || (pass.length < 8) || (pass.length > 30) ||
  (!pass.match(/\d/)) || (!pass.match(/[A-Z]/)) || (!pass.match(/[a-z]/)) ){
       $(forms[3]).addClass('error');
    setTimeout(function(){ 
      $(forms[3]).removeClass('error');
    }, 3000);
  }
  else {
    $("#Signup").css("visibility","hidden");
    $("#AccountCreated").css("visibility","visible");
  } 
}

//---------------------------------------------------------------------------------------------------------
function loginErrors(){  
  var forms = document.getElementsByClassName("loginForms");
  var pass = $(forms[name = "pass"]).val();
  var name = $(forms[name = "name"]).val();

  if( ($.trim( $(forms).val()) == '' )){
    $(forms).attr('placeholder', "Required field"); 
    $(forms).addClass('red');
    $(forms).addClass('error');
    
    setTimeout(function(){ 
      $(forms).removeClass("red");
      $(forms).removeClass("error");
      $(forms[0]).attr('placeholder', "Username:");
      $(forms[1]).attr('placeholder', "Password:"); 
    }, 3000);
  }
  else if (!forms[0].checkValidity() || (name.length < 5) || (name.length > 25) ||
  (!name.match(/\d/)) || (!name.match(/[a-z]/)) ){
      $(forms[0]).addClass('error');
    setTimeout(function(){ 
      $(forms[0]).removeClass('error');
    }, 3000);
  }
  else if (!forms[1].checkValidity() || (pass.length < 8) || (pass.length > 30) ||
  (!pass.match(/\d/)) || (!pass.match(/[A-Z]/)) || (!pass.match(/[a-z]/)) ){
      $(forms[1]).addClass('error');
    setTimeout(function(){ 
      $(forms[1]).removeClass('error');
    }, 3000);
  }
  
  else {
    $("#Login").css("visibility","hidden");
    $("#LoggedIn").css("visibility","visible");
  } 
}

//------------------------------------------------------------------------------------------------------
/*
$("#NameHint").mouseover(function(){
  $("#NameHintBox").css("visibility","visible");
});
$("#NameHint").mouseleave (function(){
  $("#NameHintBox").css("visibility","hidden");
});

$("#PassHint").mouseover(function(){
  $("#PassHintBox").css("visibility","visible");
});
$("#PassHint").mouseleave (function(){
  $("#PassHintBox").css("visibility","hidden");
});
*/
//------------------------------------------------------------------------------------------------------
var createButton = document.getElementById('SubmitCreate');
var loginButton = document.getElementById('SubmitLogin');

createButton.addEventListener('click', createErrors, true); 
loginButton.addEventListener('click', loginErrors, true);  
//------------------------------------------------------------------------------------------------------ 
});
