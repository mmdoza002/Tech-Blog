const loginForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('api/user/login',{
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'content-type': 'application/json'},
        });
         
        if (response.ok) {
            document.location.replace('/api');
        } else {
            alert(response.statusText);
        }
    }
    };
    

    const signupForm = async (event) => {
        event.preventDefault();

        const username = document.querySelector
        ('#username-signup').value.trim();
        const password = document.querySelector
        ('#password-signup').value.trim();

        if (username && password) {
            const response = await fetch('/api/user', {

                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers : {'Content-Type': 'application/json'},
            });

            if(response.ok) {
                document.location.replace('/');
            }else{
                alert('');
            }
        }
    };

    document.querySelector('.login-form')
    .addEventListener('submit', loginForm);

    document.querySelector('.signup-form')
    .addEventListener('submit', signupForm);