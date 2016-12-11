$(document).ready(function() {
    $('#attributeForm').bootstrapValidator();
    //   $("#userType").change(function () {
    // alert($("#userType").val());
    //
    //      });
    var fname, lname, email, id, pwd, type;
    $("#submit").click(function() {
        fname = $("#fname").val();
        lname = $("#lname").val();
        email = $("#email").val();
        id = $("#ID").val();
        pwd = $("#pwd").val();
        type = $("#userType").val();

        if (false) {
            alert("Please enter the email and password");
        } else {
            $.post("add_user", {
                fname: fname,
                lname: lname,
                email: email,
                id: id,
                pwd: pwd,
                userType: type
            }, function(data) {
                alert("success!");
                // if (data === 'user') {
                //   alert(data+"data");
                //   window.location = "http://localhost:3000/users";
                // }
                // if(data==='admin'){
                //   window.location="http://localhost:3000/admin";
                // }
                // if(data==='evaluator'){
                //   window.location="http://localhost:3000/evaluator";
                // } else {
                //   window.location = "http://localhost:3000/";
                // }
            });
        }
    });
});
