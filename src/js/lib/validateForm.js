if (document.querySelector('#contact-form')) {

    const contactForm = document.querySelector("#contact-form");
    const btn = contactForm.querySelector("#submit");

    const contactFormFields = contactForm.querySelectorAll('.js-form-field');

    function validateForm() {

        const field = this;
        const fieldId = field.id;
        const fieldValue = field.value;

        function validateHandler(field, bool) {
            if (bool) {
                field.setAttribute('data-validate', 'true');
                field.closest('.js-form-item').setAttribute('data-text', 'ok');
            } else {
                field.setAttribute('data-validate', 'false');
                field.closest('.js-form-item').setAttribute('data-text', 'ne ok');
            }
        }

        contactFormFields.forEach((elem) => {
            elem.addEventListener('focusout', () => {
                elem.closest('.js-form-item').classList.remove('is-active');
                elem.closest('.js-form-item').setAttribute('data-text', '');
            });
        });

        if ([...contactFormFields].every(elem => elem.getAttribute('data-validate') === 'true')) {
            btn.classList.remove('button_disabled');
            btn.disabled = false;
        }
        if (![...contactFormFields].every(elem => elem.getAttribute('data-validate') === 'true')) {
            btn.classList.add('button_disabled');
            btn.disabled = true;
        };

        if (fieldValue) {
            field.closest('.js-form-item').classList.add('is-active')
        } else {
            field.closest('.js-form-item').classList.remove('is-active')
        };

        switch (fieldId) {
            case 'name':
                validateHandler(field, (fieldValue.length < 10 && fieldValue.length >= 3))
                break;

            case 'email':
                validateHandler(field, /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue))

                break;

            case 'message':
                validateHandler(field, (fieldValue.length))
                break;

            default:
                break;
        }
    }

    function sendMessage() {
        const formData = new FormData(contactForm);
        const json = JSON.stringify(Object.fromEntries(formData));

        try {
            fetch('handler.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            });
            throw new Error('something wrong :(')
        } catch (e) {
            alert(e)
        } finally {
            alert('here we go again')
        }
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (![...contactFormFields].every(elem => elem.getAttribute('data-validate'))) return;

        sendMessage();
    })
    contactFormFields.forEach(field => {
        field.addEventListener('input', validateForm)
    })
}
