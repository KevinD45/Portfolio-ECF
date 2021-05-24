let form = document.getElementById('formulaire');
let button = document.querySelector(".btn-primary");

form.addEventListener('submit', function(e) {

    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let msg = document.getElementById("msg");
    let errorName = document.getElementById("error-name");
    let errorMail = document.getElementById("error-mail");
    let errorMsg = document.getElementById("error-msg");


        if(!name.value.trim()) {
            e.preventDefault()
            button.classList.add("btn-primary-disabled");
            errorName.innerHTML= "Le nom est requis";
            errorName.style.color= "red";
            errorName.style.paddingBottom= "1.5rem";
        }
        else {
            errorName.innerHTML= "";
        }
        
        if(!mail.value.trim()) {
            e.preventDefault()
            button.classList.add("btn-primary-disabled");
            errorMail.innerHTML= "Le mail est requis";
            errorMail.style.color= "red";
            errorMail.style.paddingBottom= "1.5rem";
        }
        else {
            errorMail.innerHTML= "";
        }

        if(!msg.value.trim()) {
            e.preventDefault()
            button.classList.add("btn-primary-disabled");
            errorMsg.innerHTML= "Le message est requis";
            errorMsg.style.color= "red";
            errorMsg.style.paddingBottom= "1.5rem";
        }
        else {
            errorMsg.innerHTML= "";
        }

        if(name.value && mail.value && msg.value) {
            button.classList.remove("btn-primary-disabled");
        }
})


form.addEventListener('keyup', function(e) {

    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let msg = document.getElementById("msg");
    let errorName = document.getElementById("error-name");
    let errorMail = document.getElementById("error-mail");
    let errorMsg = document.getElementById("error-msg");


        if(!name.value) {
            e.preventDefault()
            errorName.innerHTML= "Le nom est requis";
            errorName.style.color= "red";
            errorName.style.paddingBottom= "1.5rem";
        }
        else {
            errorName.innerHTML= "";
        }
        
        if(!mail.value) {
            e.preventDefault()
            errorMail.innerHTML= "Le mail est requis";
            errorMail.style.color= "red";
            errorMail.style.paddingBottom= "1.5rem";
        }

        else {
            errorMail.innerHTML= "";
        }

        if(!msg.value) {
            e.preventDefault()
            errorMsg.innerHTML= "Le message est requis";
            errorMsg.style.color= "red";
            errorMsg.style.paddingBottom= "1.5rem";
        }
        else {
            errorMsg.innerHTML= "";
        }

        if(name.value && mail.value && msg.value) {
            button.classList.remove("btn-primary-disabled");
        }
})




