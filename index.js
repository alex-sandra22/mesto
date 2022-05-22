let popup = document.querySelector(".popup"); 
let openpopup = document.querySelector(".open-popup"); 
let ProfileProf = document.querySelector(".profile__profession");
let profileName = document.querySelector(".profile__name");
let PopupName = document.querySelector(".popup__name");
let popupProfession = document.querySelector(".popup__profession");
let popupSubmit = document.querySelector(".popup__button");
let body =document.querySelector(".page");
openpopup.addEventListener("click",function(){ 
    popup.classList.add("popup__opened"); 
})
popupSubmit.addEventListener("click", function(closePopup){
    popup.classList.remove(".popup__opened");
})
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    openpopup.addEventListener("click",function(){
        PopupName.value = profileName.textContent;
        popupProfession.value = ProfileProf.textContent;
    })
    popupSubmit.addEventListener("click",()=>{
        profileName.value = PopupName.textContent;
        ProfileProf.value = popupProfession.textContent;
    })
}
document.body.append("profileName");
document.body.append("ProfileProf");

let like = document.getElementById("like");
like.addEventListener("click",()=>{
    like.classList.toggle("element__group-add");
})
popup.addEventListener('submit', formSubmitHandler);