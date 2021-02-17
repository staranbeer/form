let form = document.getElementById('queryForm')
let button = document.getElementById('formButton')
let cross = document.getElementById('cross')
let clicked = false
form.style.opacity = "0"
cross.style.opacity  = "0"
button.addEventListener('click', ()=>{
   form.style.opacity = "1"
   button.style.opacity = "0"
   cross.style.opacity = "1"
})

cross.addEventListener('click', ()=>{
    form.style.opacity = "0"
   button.style.opacity = "1"
   cross.style.opacity = "0"
})
