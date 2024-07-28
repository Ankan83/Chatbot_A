document.addEventListener('DOMContentLoaded', (event) => {
  const registerBtn = document.getElementById('register-btn');
  registerBtn.addEventListener('click', () => {
    window.location = "signin/signup.html"
  });
  
  const loginBtn = document.getElementById('login-btn');
  loginBtn.addEventListener('click', () => {
      window.location = "signin/login.html";
  });
});
