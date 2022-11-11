const scriptURL = 'https://script.google.com/macros/s/AKfycbz1mdpTUaMQZKig0FEG-_Bxfqy_xcUKyi4zYXo-CiOTNXcc5UgdnIfnW0-UykOR2XvgIw/exec'
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