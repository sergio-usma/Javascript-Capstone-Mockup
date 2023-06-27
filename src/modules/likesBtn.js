function likeBtnHandler(dishesList) {
  const dishesWrapper = document.getElementsByClassName('wrapper')[0];
  dishesWrapper.addEventListener('click', (event) => {
    const likeBtn = event.target.closest('.wrapper__card__details__likes-btn');
    if (likeBtn) {
      const dishIndex = Array.from(dishesWrapper.children).indexOf(likeBtn.closest('article'));
      const dish = dishesList[dishIndex];
      const likesElement = likeBtn.nextElementSibling;

      likeBtn.classList.toggle('likes-btn--active');
      dish.likes += likeBtn.classList.contains('likes-btn--active') ? 1 : -1;

      likesElement.textContent = `${dish.likes} likes`;
    }
  });
}
export default likeBtnHandler;
