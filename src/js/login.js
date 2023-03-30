const loginIcon = document.getElementById("login-icon");

const buttonLogin = document.getElementById("login-button");
const changeIcon = () => {
  loginIcon.style.display = "none";
  buttonLogin.innerText = "Silahkan tunggu...";
};
const redirect = () => {
  changeIcon();
  setTimeout(() => {
    window.location.href = "../html/index.html";
  }, 2000);
};

buttonLogin.addEventListener("click", redirect);
