$(document).ready(function(){ 
    var latitude ;
    var longitude;
    $("button").click(function () { //user clicks button
        if ("geolocation" in navigator){ //check geolocation available 
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function(position){
                latitude = position.coords.latitude;
                 longitude = position.coords.longitude; 
                    $("#demo").html("Found your location <br />Lat : "+position.coords.latitude+" </br>Lang :"+ position.coords.longitude);
                    $.ajax(  {
                        url: "http://localhost:3000/api/post/location/",
                        headers:{
                        "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        data: {
                            latitude : latitude,
                            longitude : longitude,
                        }
                        }).done(function (response) {
                        console.log(response);
                        }); });
        }else{
            console.log("Browser doesn't support geolocation!");
        }
        });
  });