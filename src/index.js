import './style.css';
import './assets/img/1_shrimp-salad.jpg';
import './assets/img/2_chicken-wings.jpg';
import './assets/img/3_filet-mignon.jpg';
import './assets/img/4_vegetable-paella.jpg';
import './assets/img/5_mexican-rice.jpg';
import './assets/img/6_tuna-mornay.jpg';

import printDishesList from './modules/printCardList.js';
import likeBtnHandler from './modules/likesBtn.js';
import commentsPopUp from './modules/commentsPopUp.js';

const dishesList = [
  {
    id: 1,
    name: 'Shrimp Salad',
    description: 'Pizza with cheese and tomato',
    image: './assets/img/1_shrimp-salad.jpg',
    price: 8,
    likes: 0,
  },
  {
    id: 2,
    name: 'Chicken Wings',
    description: 'Pizza with cheese and tomato',
    image: './assets/img/2_chicken-wings.jpg',
    price: 15,
    likes: 0,
  },
  {
    id: 3,
    name: 'Filet Mignon',
    description: 'Pasta with tomato sauce',
    image: './assets/img/3_filet-mignon.jpg',
    price: 20,
    likes: 0,
  },
  {
    id: 4,
    name: 'Vegetable Paella',
    description: 'Pizza with cheese and tomato',
    image: './assets/img/4_vegetable-paella.jpg',
    price: 10,
    likes: 0,
  },
  {
    id: 5,
    name: 'Mexican Rice',
    description: 'Pizza with cheese and tomato',
    image: './assets/img/5_mexican-rice.jpg',
    price: 15,
    likes: 0,
  },
  {
    id: 6,
    name: 'Tuna Mornay',
    description: 'Pasta with tomato sauce',
    image: './assets/img/6_tuna-mornay.jpg',
    price: 20,
    likes: 0,
  },
];

likeBtnHandler(dishesList);

printDishesList(dishesList);

const dishesWrapper = document.getElementsByClassName('wrapper')[0];
dishesWrapper.addEventListener('click', (event) => {
  const commentsBtn = event.target.closest('.wrapper__card__comments-btn');
  if (commentsBtn) {
    const dishIndex = Array.from(dishesWrapper.children).indexOf(
      commentsBtn.closest('article'),
    );
    const dish = dishesList[dishIndex];
    commentsPopUp(dish);
  }
});
