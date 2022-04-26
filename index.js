let popup = document.querySelector(".popup");
let openpopup = document.querySelector(".open-popup");
openpopup.addEventListener("click",function(){
    popup.classList.add("popup_opened");
})
let form = document.querySelector(".form");
let button = document.querySelector(".popup__button");
button.addEventListener("submit", function(){
    let name = document.querySelector(".popup__name");
    let profession = document.querySelector(".popup__profession");
    form.textContent('beforeend', `
    <div class="profile__info">
          <div class="profilee__line">
              <h1 class="profile__name">${name.value}<button src='./photos/Vector 2.0.png' class="profile__edit_button" >
                  <img class="vector" src="./photos/Vector 2.0.png" >
              </button>
              </h1>
          </div>
          <h3 class="profile__inf">${profession.value}</h3>
        </div>
`);
name.value='';
profession.value='';
})
let like = document.querySelectorAll(".element__group");
let groupadd = document.querySelectorAll(".element__group-add");
like.addEventListener("click", function(){
    console.log("CONTROL");
    like.classList.toggle("element__group-add");
})
