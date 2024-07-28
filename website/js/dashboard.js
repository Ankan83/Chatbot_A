// dashboard-scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('closeBtn');
    const overlayMenu = document.getElementById('overlayMenu');

    menuButton.addEventListener('click', () => {
        overlayMenu.style.width = '250px';
    });

    closeBtn.addEventListener('click', () => {
        overlayMenu.style.width = '0';
    });
    
    const signoutBtn = document.getElementById('signout-btn');
    signoutBtn.addEventListener('click', () => {
        window.location = "../";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const questionForm = document.querySelector("#question-answering form");
    
    questionForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(questionForm);
        fetch('/ask', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // handle success, e.g., display a message or clear the form
            console.log('Success:', data);
        })
        .catch(error => {
            // handle error
            console.error('Error:', error);
        });
    });
});


