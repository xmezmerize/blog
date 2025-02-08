emailjs.init('HZ9Pybq0MqJXq67Zr'); // Certifique-se de que este User ID está correto

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let form = this;

    // Verifique novamente o Service ID e Template ID no painel do EmailJS
    emailjs.sendForm('service_uwv1vfq', 'template_mxvsjr9', this) 
        .then(function (response) {
            console.log('Success:', response);
            document.getElementById('popup').style.display = 'block';
            form.reset();
            setTimeout(function () {
                document.getElementById('popup').style.display = 'none';
            }, 3000);
        }, function (error) {
            console.error('Failed to send email:', error);
        });
});