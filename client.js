const scriptURL = 'https://script.google.com/macros/s/AKfycby4uWuRTqLS3AGqp0TRnOnVeCEsxJAdL8q04my1n8avnTmpxOQwn-7NVd2RqwNBcuEN/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    form.reset()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Save Successfully"
            setTimeout(function(){
                msg.innerHTML =""
            },5000)
        })
        .catch(error => console.error('Error!', error.message))
})