const buttonRegister = document.getElementById("register-button");
const changeIcon = () => {
  buttonRegister.innerText = "Akun berhasil dibuat...";
};
const redirect = (e) => {
  e.preventDefault();
  changeIcon();
  setTimeout(() => {
    window.location.href = "../html/login.html";
  }, 2000);
};

buttonRegister.addEventListener("click", redirect);
