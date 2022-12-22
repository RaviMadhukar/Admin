const scriptURL = 'https://script.google.com/macros/s/AKfycbzql-YIhP8I2mH-BJqZSeMs33V4QT_YHFTykl8rA54FjaoUiz1esMPggixAB0J7i40sEA/exec'
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