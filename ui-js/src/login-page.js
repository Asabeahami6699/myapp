
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.msg-popup form');
    var h2 = document.querySelector('.msg-popup h2');

    h2.style.display = 'block';

    setTimeout(function() {
        form.style.display = 'none';
    }, 3000); 
});



  