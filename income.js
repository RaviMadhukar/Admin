const scriptURL = 'https://script.google.com/macros/s/AKfycbx1dMIdseVDB8DM6PNvb5WQ-Eqx_R5v2YU163swGbrRczf6FUoAKTeOg5JU08CaM3k/exec'
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