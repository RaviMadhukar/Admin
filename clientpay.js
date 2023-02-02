const scriptURL = 'https://script.google.com/macros/s/AKfycbzF3-WYmA1rsumfyI44nA5PfohD7IJaVIulbdxOkyfa-3GACw0N5AuA_04LEj12ELC15Q/exec'
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