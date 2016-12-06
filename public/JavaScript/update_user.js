$(document).ready(function() {
  $('#attributeForm').bootstrapValidator();

  $("#delete").click(function() {

      id = $("#ID").val();
      if (id=="") {
          alert("Please select a user");
      } else {
          $.post("http://localhost:3000/delete_user", {

              id: id

          }, function(data) {

          });
      }
  });



    var fname, lname, email, id, pwd;
    $("#submit").click(function() {
        fname = $("#fname").val();
        lname = $("#lname").val();
        email = $("#email").val();
        id = $("#ID").val();
        pwd = $("#pwd").val();
        type = $("#userType").val();
        if (id=="") {
            alert("Please select a user");
        } else {
            $.post("http://localhost:3000/update_user", {
                fname: fname,
                lname: lname,
                email: email,
                id: id,
                pwd: pwd,
                userType: type
            }, function(data) {

            });
        }
    });

    // $("#lname").val("i love ann");
    var semail;
    $("#search").click(function() {
        semail = $("#s_email").val();

        alert(semail);
        if (semail === "") {
            alert("Please enter the email");
        } else {
            $.post("http://localhost:3000/find_user", {
                email: semail
            }, function(data) {
                $("#fname").val(data.fname);
                $("#lname").val(data.lname);
                $("#email").val(data.email);
                $("#ID").val(data.ID);
                $("#pwd").val(data.pwd);
                $("#pwd2").val(data.pwd);
                $("#userType").val(data.userType);


            });
        }
    });
});
