let group = document.querySelectorAll(".element__group");
function hearts(){
    group.classList.add("add");
}
group.addEventListener("click", hearts);
let form = document.querySelector(".form");
function clickTwo(){
    form.classList.add("add");
}
form.addEventListener("click", clickTwo);

let container= form.querySelector(".form__contaner");
let submit = form.querySelector(".formm__button");
function profile() {
    let name = form.querySelector(".form__name");
    let profession = form.querySelector(".form__profession");
  
    container.insertAdjacentHTML('beforeend', `
          <div class="form__container">
                <h2 class="form__title">Редактировать профиль</h2>
                <h3 class="form__name" >${name.value}</h3>
                <p class="form__profession" >${profession.value}</h4>
                <button class="form__button" type="submit">Сохранить</button>
            </div>
    `);
    name.value='';
    profession.value='';
    renderAdded();
  }  
  submit.addEventListener("click", profile);


