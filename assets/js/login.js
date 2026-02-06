
const Email = document.getElementById('email');
const password = document.getElementById('pass');
const button = document.getElementById('submit');

const Gmail = 'malekdiaa@gmail.com';
const pass = '1';
console.log(button);

button.addEventListener('click', function (e) {
    console.log(Email.value);
    console.log(password.value);

    if (Email.value === Gmail && password.value === pass) {
        window.location.href = "addpost.html";
        alert('Login Successful');
        localStorage.setItem('loggedIn', 'true');
    }

    else {
        alert('Login Failed');
    }

})


