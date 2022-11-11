const scriptURL = 'https://script.google.com/macros/s/AKfycbyCJsTY2SddwCVvH25x4D-zRIJcmXrFnFe-3ABwDu4ZB-atwy3x_s09G6hH6M7v0HA/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Save Successfully"
            setTimeout(function(){
                msg.innerHTML =""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})