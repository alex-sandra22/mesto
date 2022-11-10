let Name = document.querySelector(".profile__name");
let Profile = document.querySelector(".profile__profession");
let NamePopup = document.querySelector(".popup__name");
let ProfilePopup = document.querySelector(".popup__profession");
let Popup = document.querySelector(".popup");
let OpenPopup = document.querySelector(".popup_opened");
let body = document.querySelector(".page");
let EdiButton = document.querySelector(".profile__edit-button");
let PopupSubmit = document.querySelector(".popup__button");

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    EdiButton.addEventListener("click",function(){
        Popup.classList.remove(".popup");
        Popup.classList.add("popup_opened"); 
        PopupName.value = profileName.textContent;
        popupProfession.value = ProfileProf.textContent;
    })
    PopupSubmit.addEventListener("click",()=>{
        Popup.classList.remove(".popup_opened");
        Popup.classList.add(".popup");
        profileName.value = PopupName.textContent;
        ProfileProf.value = popupProfession.textContent;
    })
}
formSubmitHandler();