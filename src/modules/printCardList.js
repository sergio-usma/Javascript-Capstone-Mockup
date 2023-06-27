function printDishesList(dishesList) {
  const dishesWrapper = document.getElementsByClassName('wrapper')[0];
  dishesWrapper.innerHTML = '';

  for (let i = 0; i < dishesList.length; i += 1) {
    const dish = dishesList[i];
    const dishCard = document.createElement('article');
    dishCard.classList.add('wrapper__card', `card-${i + 1}`);
    dishCard.innerHTML = `
      <img class="wrapper__card__img" src="${dish.image}" alt="${dish.name}" />
      <div class="wrapper__card__details">
        <h3 class="wrapper__card__details__title">${dish.name}</h3>
        <div class="wrapper__card__details__likes">
          <button class="wrapper__card__details__likes-btn"><i class="bi bi-heart-fill"></i></button>
          <p>${dish.likes} likes</p>
        </div>
      </div>
      <button class="wrapper__card__comments-btn card__btn">Comments</button>
      <button class="wrapper__cards__reservations-btn card__btn">Reservations</button>
    `;
    dishesWrapper.appendChild(dishCard);
  }
}

export default printDishesList;