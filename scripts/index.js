let popup = document.querySelector(".popup"); 
let openpopup = document.querySelector(".popup_opened"); 
let ProfileProf = document.querySelector(".profile__profession");
let profileName = document.querySelector(".profile__name");
let PopupName = document.querySelector(".popup__name");
let popupProfession = document.querySelector(".popup__profession");
let popupSubmit = document.querySelector(".popup__button");
let body =document.querySelector(".page");
let EdiButton = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__close");
EdiButton.addEventListener("click",function(){ 
    popup.classList.remove("popup");
    popup.classList.add("popup_opened");
    PopupName.value = profileName.textContent;
    popupProfession.value = ProfileProf.textContent;
});
closePopup.addEventListener("click", function(closePopup){
    popup.classList.remove("popup_opened");
    popup.classList.add("popup");
});
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    EdiButton.addEventListener("click",function(){
        PopupName.value = profileName.textContent;
        popupProfession.value = ProfileProf.textContent;
    });
    popupSubmit.addEventListener("click",function(){
        profileName.textContent = PopupName.value;
        ProfileProf.textContent = popupProfession.value;
        closePopup();
    });
};

popup.addEventListener('submit', formSubmitHandler);