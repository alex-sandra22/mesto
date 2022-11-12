const popup = document.querySelector(".popup"); 
const openpopup = document.querySelector(".open-popup"); 
const ProfileProf = document.querySelector(".profile__profession");
const profileName = document.querySelector(".profile__name");
const PopupName = document.querySelector(".popup__name");
const popupProfession = document.querySelector(".popup__profession");
const popupSubmit = document.querySelector(".popup__button");
const body =document.querySelector(".page");
openpopup.addEventListener("click",function(){ 
    popup.classList.add("popup__opened"); 
});
popupSubmit.addEventListener("click", function(){
    popup.classList.remove(".popup__opened");
});
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    openpopup.addEventListener("click",function(){
        PopupName.value = profileName.textContent;
        popupProfession.value = ProfileProf.textContent;
    });
    popupSubmit.addEventListener("click",()=>{
        profileName.value = PopupName.textContent;
        ProfileProf.value = popupProfession.textContent;
    });
}
document.body.append("profileName");
document.body.append("ProfileProf");
let like = document.querySelectorAll(".element__group");
like.addEventListener("click",()=>{
    like.classList.toggle("element__group-add");
});
popup.addEventListener('submit', formSubmitHandler);
