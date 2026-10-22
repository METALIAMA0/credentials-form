  function submitForm() {
            const Name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const education = document.getElementById('education').value;
            const city = document.getElementById('City').value;
            const skills = document.getElementById('Skills').value;
            const messages = document.getElementById('Messages').value;
            const form = document.getElementById('contactForm').submit;

            if(Name == "") { 
                alert('Please enter your name.');
                    return ;
            }
            if(email == ''|| email.includes('@')== false) {
                alert('Please enter a valid email address.');
                return ;
            }
            if(phone == '') {
                alert('Please enter your phone number.');
                return ; 
            }
            if(education == '') {
                alert('Please enter your educational level.');
                return ;
            }
            if(city == '') {
                alert('please enter your city.');
                return ;
            }
            if(skills == '') {
                alert('Please enter your skills.');
                return ;
            }
            if(messages == '') {
                alert('Please enter your message.');
                return ;
            }
            document.getElementById('contactForm').submit(); {
                alert('Form submitted successfully!');
            };
        }

        function clearAll() {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('education').value = '';
            document.getElementById('City').value = '';
            document.getElementById('Skills').value = '';
            document.getElementById('Messages').value = '';
        }