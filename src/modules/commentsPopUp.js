function commentsPopUp(dish) {
  const main = document.querySelector('main');

  const popUp = document.createElement('div');
  popUp.id = 'pop-up';
  popUp.classList.add('pop-up--active');
  popUp.innerHTML = `
    <div class="pop-up__container">
        <img class="pop-up__container__img" src="${dish.image}" alt="${dish.name}" />
        <div class="pop-up__container__close-btn">
            <i class="bi bi-x-circle"></i>
        </div>
        <div class="pop-up__container__content">
            <h3 class="pop-up__container__content__title">${dish.name}</h3>
            <ul class="pop-up__container__content__details">
                <li><span class="bold-text">Entry: </span> French fries</li>
                <li><span class="bold-text">Companion: </span>Avocado</li>
                <li><span class="bold-text">Serving time: </span>~30 min</li>
                <li><span class="bold-text">Cost: </span>${dish.price} USD</li>
            </ul>
        </div>

        <div class="pop-up__container__log">
            <h3 class="pop-up__container__log__title">Comments</h3>
            <ul class="pop-up__container__log__entries">
                <li><span class="bold-text">24/06/2023 Alex:</span> I love that salad!</li>
                <li><span class="bold-text">25/06/2023 Tania:</span> This dish is very delicious!</li>
                <li><span class="bold-text">24/06/2023 Alex:</span> I love that salad!</li>
                <li><span class="bold-text">24/06/2023 Alex:</span> I love that salad!</li>
            </ul>
        </div>

        <div class="pop-up__container__form">
            <h3 class="pop-up__container__form__title">Add a comment</h3>
            <form action="">
                <input type="text" placeholder="Name" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Your insights"></textarea>
                <button class="pop-up__btn">Submit</button>
            </form>
        </div>
    </div>
  `;

  const closeBtn = popUp.querySelector('.pop-up__container__close-btn');

  closeBtn.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });

  main.appendChild(popUp);
}

export default commentsPopUp;