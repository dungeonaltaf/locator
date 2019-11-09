//sending credentials to server for creating customer session
$(document).ready(function(){ 
    
    $("#button_signin").click(function () { //user clicks button
        console.log("Button signin is clicke");
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        $.ajax(  {
                url: "http://localhost:3000/api/post/signin/",
                headers:{
                "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: {
                    first_name : first_name,
                    last_name : last_name,
                    email : email,
                    password : password
                }
                }).done(function (response) {
                console.log(response);
                });
        
        });
    //    $("#button_login").click(function () { //user clicks button
      //      console.log("button login is clicked")
        //    var login_email = $('#login_email').val();
          //  var login_password = $('#login_password').val();
            //$.ajax(  {
              //  url: "http://localhost:3000/post/login/",
                //headers:{
                //"content-type": "application/x-www-form-urlencoded"
                //},
                //method: "POST",
                //data: {
                  //  login_email:login_email,
                    //login_password : login_password
                //}
                //}).done(function (response) {
                //console.log(response);
                //});
            //});
  });