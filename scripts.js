// Animación al hacer scroll para mostrar los service-card
function animateCards() {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', animateCards);
window.addEventListener('DOMContentLoaded', animateCards);

// Validación y feedback del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;

        // Remueve status anteriores
        form.classList.remove('was-validated');
        document.getElementById('msg-ok').classList.add('d-none');

        // Validación campos
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (!nombre) {
            form.nombre.classList.add('is-invalid');
            valid = false;
        } else {
            form.nombre.classList.remove('is-invalid');
        }
        if (!email || !validateEmail(email)) {
            form.email.classList.add('is-invalid');
            valid = false;
        } else {
            form.email.classList.remove('is-invalid');
        }
        if (!mensaje) {
            form.mensaje.classList.add('is-invalid');
            valid = false;
        } else {
            form.mensaje.classList.remove('is-invalid');
        }

        if (valid) {
            // Puedes integrar un servicio real aquí (EmailJS, Formspree, etc.)
            form.reset();
            document.getElementById('msg-ok').classList.remove('d-none');
            setTimeout(() => {
                document.getElementById('msg-ok').classList.add('d-none');
            }, 5000);
        } else {
            form.classList.add('was-validated');
        }
    });

    // Email validación básica
    function validateEmail(email) {
        // Simple regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});