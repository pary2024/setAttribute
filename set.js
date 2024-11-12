

const password = document.getElementById('password');

const toggle = document.getElementById('toggle');


toggle.addEventListener('click', ()=>{
    
    const setattrribute = password.getAttribute('type');

    if (setattrribute === 'password') password.setAttribute('type','text');
    else password.setAttribute ('type','password');
})