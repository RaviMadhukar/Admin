const scriptURL = 'https://script.google.com/macros/s/AKfycbzQp-LifNXu91NECtD5GDz9OuFOlatNMZyFTvIyI_4QY8ysmh1FSM1rxGN1c12W9DTCJg/exec'
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