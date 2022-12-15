// level 1
let arrayUser = [];

$(function(){
  function randomUser(){
    $.ajax({
      method: "GET",
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      async: false,
      success: function(data) {
        console.log(data);
        arrayUser.push(data["results"]["0"]);
      }
    });
  };
    for (let i = 0; i < 5; i++){
      randomUser();
    };  
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

    // level 3
    $("#back").hide();
    // level 5
    $("#privateBtn").hide();
    $("#addressBtn").hide();

    // level 2
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

    // level 3
    $("div#detailPeople").empty();
    $("div#detailPeople").append(imgDetail).append("<br>").append(nameDetail);
    $("div#peopleList").hide();
    $("div#detailPeople").show();

    // level 5
    $("#privateBtn").show();
    // level 6
    $("#privateBtn").click(function(){ 
        $("div#privateInfo").show();
        $("div#address").hide();
    });
    
    // level 4
    $("div#privateInfo").show();
    let gender = "Gender " + ": " + userDetail.gender;
    let age = "Age " + ": " + userDetail.dob.age;
    let phone = "Phone " + ": " +  userDetail.cell;
    let nationality = "Nationality " + ": " + userDetail.nat;
    $("div#privateInfo").append(gender).append("<br>").append(age).append("<br>").append(phone).append("<br>").append(nationality);
    
    // level 5
    $("#addressBtn").show();
    // level 6
    $("#addressBtn").click(function(){ 
        $("div#privateInfo").hide();
        $("div#address").show();
    });
    
    // level 4
    $("div#address").show();
    let street = "Street " + ": " + userDetail.location.street.name + " " + userDetail.location.street.number;
    let city = "city " + ": " + userDetail.location.city;
    let state = "state " + ": " + userDetail.location.state;
    let country = "country " + ": " + userDetail.location.country;
    $("div#address").append(street).append("<br>").append(city).append("<br>").append(state).append("<br>").append(country);
    
    // level 7
    $("div#privateInfo").show();
    $("div#address").hide();

    // level 3
    $("#back").show();
    $("#back").click(function(){ 
        $("div#detailPeople").empty();
        $("div#detailPeople").hide();
        $("div#peopleList").show();
        $("#back").hide();
        // level 4
        $("div#privateInfo").empty();
        $("div#privateInfo").hide();
        $("div#address").empty();
        $("div#address").hide();
        // level 6
        $("#privateBtn").hide();
        $("#addressBtn").hide();
    });
    });
    
    // level 8
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

    $("div#detailPeople").empty();
    $("div#detailPeople").append(imgDetail).append("<br>").append(nameDetail);
    $("div#peopleList").hide();
    $("div#detailPeople").show();

    $("#privateBtn").show();

    $("#privateBtn").click(function(){ 
        $("div#privateInfo").show();
        $("div#address").hide();
    });
    
    $("div#privateInfo").show();
    let gender = "Gender " + ": " + userDetail.gender;
    let age = "Age " + ": " + userDetail.dob.age;
    let phone = "Phone " + ": " +  userDetail.cell;
    let nationality = "Nationality " + ": " + userDetail.nat;
    $("div#privateInfo").append(gender).append("<br>").append(age).append("<br>").append(phone).append("<br>").append(nationality);
    
    $("#addressBtn").show();

    $("#addressBtn").click(function(){ 
        $("div#privateInfo").hide();
        $("div#address").show();
    });

    $("div#address").show();
    let street = "Street " + ": " + userDetail.location.street.name + " " + userDetail.location.street.number;
    let city = "city " + ": " + userDetail.location.city;
    let state = "state " + ": " + userDetail.location.state;
    let country = "country " + ": " + userDetail.location.country;
    $("div#address").append(street).append("<br>").append(city).append("<br>").append(state).append("<br>").append(country);

    $("div#privateInfo").show();
    $("div#address").hide();

    $("#back").show();
    $("#back").click(function(){ 
        $("div#detailPeople").empty();
        $("div#detailPeople").hide();
        $("div#peopleList").show();
        $("#back").hide();

        $("div#privateInfo").empty();
        $("div#privateInfo").hide();
        $("div#address").empty();
        $("div#address").hide();

        $("#privateBtn").hide();
        $("#addressBtn").hide();
    });
    });
});