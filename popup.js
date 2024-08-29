document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcularBtn');
    const popupForm = document.getElementById('popupForm');
    const closePopup = document.getElementById('closePopup');

    calcularBtn.addEventListener('click', function () {
        popupForm.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    // Cierra el pop-up si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });
});
