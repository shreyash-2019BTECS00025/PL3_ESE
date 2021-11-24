function validate() {
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    if (email == "abc@gamil.com" && password == "123456")
    {
      document.getElementById(
        "showAlert"
      ).innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      Login Successful
    </div>`;
    alert("Login Success");
      }
    else
      document.getElementById(
        "showAlert"
      ).innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      Login Falied ...please use email: abc@gamil.com and password=123456 to login..I have not used database here 
      
    </div>`;
  };

  function signup() {
    alert("please use email: joy@gamil.com and password=Joy@123 to login..Database is not implemented")
  };