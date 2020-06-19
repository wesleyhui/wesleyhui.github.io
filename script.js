/*---Variable---*/ 
const alertBanner = document.getElementById("alert");

/*---Alert Banner---*/ 
alertBanner.innerHTML = 
    `
    <div class="alert-banner">
    <h5><strong>Alert!</strong> To stay in touch, please visit "Contact Info" at the bottom!</h5>
    <p class="alert-close">x</p>
    </div>
    `;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-close")) {
        alertBanner.style.display = "none";
    }
});