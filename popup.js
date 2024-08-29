document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcularBtn');
    const popupForm = document.getElementById('popupForm');
    const closePopup = document.getElementById('closePopup');
    const overlay = document.getElementById('overlay');

    calcularBtn.addEventListener('click', function () {
        overlay.style.display = 'block';
        popupForm.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        overlay.style.display = 'none';
        popupForm.style.display = 'none';
    });

    // Cierra el pop-up si se hace clic fuera de él
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        popupForm.style.display = 'none';
    });
});
