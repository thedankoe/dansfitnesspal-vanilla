import { elements } from '../base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

const renderFoods = food => {
    const markup = `
        <div class="results">
            <ul class="results__list">
                <li>
                    <a href="#${food.tag_id}" class="results__link">
                        <div class="results__data">
                            <img src="${food.photo.thumb}" alt="${food.food_name}" class="results__img">
                            <h4 class="results__name">${food.food_name}</h4>
                        </div>
                        <svg class="results__icon">
                            <use href="img/icons.svg#icon-triangle-right"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    `
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (foods) => {
    const start = 0;
    const end = 20;

    foods.slice(start, end).map(renderFoods);
}