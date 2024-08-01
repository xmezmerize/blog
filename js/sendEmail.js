emailjs.init('HZ9Pybq0MqJXq67Zr');

        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();

            let form = this;

            emailjs.sendForm('service_lhwu7wp', 'template_bj4yoor', this)
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