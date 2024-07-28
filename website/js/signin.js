document.addEventListener('DOMContentLoaded', (event) => {
    const signinBtn = document.getElementById('signin-btn');
    signinBtn.addEventListener('click', () => {
        window.location = "../user/dashboard";
    });
});
