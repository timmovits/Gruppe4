function check(form) {
  /*function to check userid & password*/
  /*the following code checkes whether the entered userid and password are matching*/
  if (form.userid.value == "FMM2020") {
    window.open(
      "../html/gps.html"
    ); /*opens the target page while Id & password matches*/
  } else {
    alert("Error Password or Username");
  }
}
