let popup = document.querySelector(".popup"); 
let openpopup = document.querySelector(".popup_opened"); 
let profileProf = document.querySelector(".profile__profession");
let profileName = document.querySelector(".profile__name");
let popupName = document.querySelector(".popup__input_type_name");
let popupProfession = document.querySelector(".popup__input_type_profession");
let popupSubmit = document.querySelector(".popup__button");
let body =document.querySelector(".page");
let ediButton = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__close");
function openPopup(){
    popup.classList.add("popup_opened");
    popupName.value = profileName.textContent;
    popupProfession.value = profileProf.textContent;
};
 function close(){
    popup.classList.remove("popup_opened");
};

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    profileName.textContent = popupName.value;
    profileProf.textContent = popupProfession.value;
    close();
};
ediButton.addEventListener("click",openPopup);
closePopup.addEventListener("click",close);

popup.addEventListener('submit', formSubmitHandler);