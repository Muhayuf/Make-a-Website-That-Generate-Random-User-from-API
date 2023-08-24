let arrayUser = [];

$(function(){
  function randomUser(){
    $.ajax({
      method: "GET",
      url: 'https://randomuser.me/api/',
      async: false,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        arrayUser.push(data["results"]["0"]);
      }
    });
  };
  
  $("#back").hide();
  $("div#privateInfo").hide();
  $("#private").hide();
  $("div#account").hide();
  $("#acc").hide();
  $("div#address").hide();
  $("#add").hide();
  $("div#infoList").hide();
  $("div#detailPeople").hide();
  $("div#peopleList").hide();
  $("#header").hide();
  $("#headerDetail").hide();

  $("#inputListBtn").click(function(){ 
    let numUser = $("#inputList").val();
    for (let i = 0; i < numUser; i++){
      randomUser();
    };  

    // make show/hide system for user list
    $("#inputList").hide();
    $("#inputListBtn").hide();
    $("#inputHeader").hide();
    $("#inputHeader2").hide();
    $("div#peopleList").show();
    $("#header").show();
    
    // making a list of people
    for (let i = 0; i < arrayUser.length; i++){
      let user = arrayUser[i];
      let firstName = user.name.first;
      let lastName = user.name.last;
      let fullName = " " + firstName + " " + lastName;
      let name = $("<p>");
      name.text(fullName);
      let imgSrcThumbnail = user.picture.thumbnail;
      let img = $("<img>").attr({
        "src": imgSrcThumbnail
      });
      $("div#peopleList").append([img, name]);
    };
  });

  // make detail tabs for clicked user for "img" element 
  $("div#peopleList").on("click", "img", function(){ 
    let index = $(this).index("div#peopleList img");
    let userDetail = arrayUser[index];
    
    let title = userDetail.name.title;
    let firstName = userDetail.name.first;
    let lastName = userDetail.name.last;
    let nameDetail = title + " " + firstName + " " + lastName;
    
    let imgSrcLarge = userDetail.picture.large;
    let imgDetail = $("<img>").attr({
      "src": imgSrcLarge
    });

    // make hide and show system for list and tab
    $("#headerDetail").show();
    $("div#detailPeople").empty();
    $("div#detailPeople").append(imgDetail).append("<br>").append(nameDetail);
    $("div#peopleList").hide();
    $("div.peopleList").hide();
    $("div#detailPeople").show();
    $("#header").hide();
    $("div#infoList").show();
    
    // showing button on info tab
    $("#private").show();
    $("#acc").show();
    $("#add").show();
    
    // make a private info tab
    let gender = "Gender " + ": " + userDetail.gender;
    let age = "Age " + ": " + userDetail.dob.age;
    let phone = "Phone " + ": " +  userDetail.cell;
    let nationality = "Nationality " + ": " + userDetail.nat;
    $("div#privateInfo").append(gender).append("<br>").append(age).append("<br>").append(phone).append("<br>").append(nationality);

    // make an account info tab
    let username = "Username " + ": " + userDetail.login.username;
    let email = "Email " + ": " + userDetail.email;
    let pass = "Password " + ": " + userDetail.login.password;
    $("div#account").append(username).append("<br>").append(email).append("<br>").append(pass);
    
    // make an address info
    let street = "Street " + ": " + userDetail.location.street.name + " " + userDetail.location.street.number;
    let city = "city " + ": " + userDetail.location.city;
    let state = "state " + ": " + userDetail.location.state;
    let country = "country " + ": " + userDetail.location.country;
    $("div#address").append(street).append("<br>").append(city).append("<br>").append(state).append("<br>").append(country);
    
    // make hide and show system for private info tab
    $("div#privateInfo").show();
    $("#private").click(function(){ 
      $("div#privateInfo").show();
      $("div#account").hide();
      $("div#address").hide();
    });
    
    // make hide and show system for account info tab
    $("#acc").click(function(){  
      $("div#account").show();
      $("div#privateInfo").hide();
      $("div#address").hide();
    });
    
    // make hide and show system for address detail tab
    $("#add").click(function(){ 
      $("div#privateInfo").hide();
      $("div#account").hide();
      $("div#address").show();
    });

    // make a back button
    $("#back").show();
    $("#back").click(function(){ 
      $("div#detailPeople").empty();
      $("div#detailPeople").hide();
      $("div#peopleList").show();
      $("div.peopleList").show();
      $("#back").hide();
      $("#private").hide();
      $("div#privateInfo").empty();
      $("div#privateInfo").hide();
      $("#acc").hide();
      $("div#account").empty();
      $("div#account").hide();
      $("#add").hide();
      $("div#address").empty();
      $("div#address").hide();
      $("#header").show();
      $("div#infoList").hide();
      $("#inputHeader").hide();
      $("#inputHeader2").hide();
      $("#headerDetail").hide();
    });

  });
  
  // bc I got a headache so, I just repeat the code for "p" element
  $("div#peopleList").on("click", "p", function(){ 
    let index = $(this).index("div#peopleList p");
    let userDetail = arrayUser[index];
    
    let title = userDetail.name.title;
    let firstName = userDetail.name.first;
    let lastName = userDetail.name.last;
    let nameDetail = title + " " + firstName + " " + lastName;
    
    let imgSrcLarge = userDetail.picture.large;
    let imgDetail = $("<img>").attr({
      "src": imgSrcLarge
    });
    
    // make hide and show system for list and tab
    $("#headerDetail").show();
    $("div#detailPeople").empty();
    $("div#detailPeople").append(imgDetail).append("<br>").append(nameDetail);
    $("div#peopleList").hide();
    $("div.peopleList").hide();
    $("div#detailPeople").show();
    $("#header").hide();
    $("div#infoList").show();

    // showing button on info tab
    $("#private").show();
    $("#acc").show();
    $("#add").show();

    // make a private info tab
    let gender = "Gender " + ": " + userDetail.gender;
    let age = "Age " + ": " + userDetail.dob.age;
    let phone = "Phone " + ": " +  userDetail.cell;
    let nationality = "Nationality " + ": " + userDetail.nat;
    $("div#privateInfo").append(gender).append("<br>").append(age).append("<br>").append(phone).append("<br>").append(nationality);

    // make an account info tab
    let username = "Username " + ": " + userDetail.login.username;
    let email = "Email " + ": " + userDetail.email;
    let pass = "Password " + ": " + userDetail.login.password;
    $("div#account").append(username).append("<br>").append(email).append("<br>").append(pass);
    
    // make an address info
    let street = "Street " + ": " + userDetail.location.street.name + " " + userDetail.location.street.number;
    let city = "city " + ": " + userDetail.location.city;
    let state = "state " + ": " + userDetail.location.state;
    let country = "country " + ": " + userDetail.location.country;
    $("div#address").append(street).append("<br>").append(city).append("<br>").append(state).append("<br>").append(country);
    
    // make hide and show system for private info tab
    $("div#privateInfo").show();
    $("#private").click(function(){ 
      $("div#privateInfo").show();
      $("div#account").hide();
      $("div#address").hide();
    });

    // make hide and show system for account info tab
    $("#acc").click(function(){  
      $("div#account").show();
      $("div#privateInfo").hide();
      $("div#address").hide();
    });
    
    // make hide and show system for address detail tab
    $("#add").click(function(){ 
      $("div#privateInfo").hide();
      $("div#account").hide();
      $("div#address").show();
    });

     // make a back button
     $("#back").show();
     $("#back").click(function(){ 
       $("div#detailPeople").empty();
       $("div#detailPeople").hide();
       $("div#peopleList").show();
       $("div.peopleList").show();
       $("#back").hide();
       $("#private").hide();
       $("div#privateInfo").empty();
       $("div#privateInfo").hide();
       $("#acc").hide();
       $("div#account").empty();
       $("div#account").hide();
       $("#add").hide();
       $("div#address").empty();
       $("div#address").hide();
       $("#header").show();
       $("div#infoList").hide();
       $("#inputHeader").hide();
       $("#inputHeader2").hide();
       $("#headerDetail").hide();
     });
  });
});