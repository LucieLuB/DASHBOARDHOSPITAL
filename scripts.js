
/*------------LOGIN PAGE------------------- */
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    
    if (username === "useremail" && password === "password") {
        window.location.href = "appointments.html";
        //alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir al usuario a otra página después del inicio de sesión exitoso si es necesario
    } else {
        errorMessage.textContent = "Incorrect credentials. Please, try again.";
    }
}


/*------------MENU------------------- */
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu ul');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});