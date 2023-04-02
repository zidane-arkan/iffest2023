const buttonLogin = document.getElementById("login-button");
const changeIcon = () => {
  buttonLogin.innerText = "Silahkan tunggu...";
};
const redirect = (e) => {
  e.preventDefault();
  changeIcon();
  setTimeout(() => {
    window.location.href = "../html/index.html";
  }, 2000);
};

buttonLogin.addEventListener("click", redirect);
