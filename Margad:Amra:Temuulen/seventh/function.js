function test() {
  let pass = document.getElementById("password").value;
  let user = document.getElementById("username").value;
  document.getElementById("medeelel").innerText =
    "username: " + user + "\n" + "password: " + pass;
}
