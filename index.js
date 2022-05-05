let popup = document.querySelector(".popup");
let openpopup = document.querySelector(".open-popup");
let like = document.querySelectorAll(".element__group");
let groupadd = document.querySelectorAll(".element__group-add");
like.addEventListener("click", function(){
    like.classList.toggle("element__group-add");
})
openpopup.addEventListener("click",function(){
    popup.classList.add("popup_opened");
})
let form = document.querySelector(".form");
let submit = document.querySelector(".popup__button");
submit.addEventListener("click", function(){
    let name = document.querySelector(".popup__name");
    let profession = document.querySelector(".popup__profession");
    let profileName = document.querySelector(".profile__name");
    let profilepProfession = document.querySelector(".profile__profession");
    name.value="";
    profession.value="";
    profileName.textContent=name.value;
    profilepProfession.textContent=profession.value;

})
document.body.append("submit");


