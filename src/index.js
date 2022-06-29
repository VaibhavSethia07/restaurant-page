import "./styles/main.css";
import meals from "./assets/data/meals";

const renderMeals = (type) => {
  const mealsGridDIV = document.querySelector(".meals-grid");
  mealsGridDIV.innerHTML = "";

  const selectedMeals = meals.filter((meal) => meal.type === type);

  selectedMeals.forEach((meal) => {
    const { title, imageUrl, description, price, rating } = meal;
    const mealTileHTML = `
        <div class="meal-tile">
        <img src=${imageUrl}/>
        <section class="meal-content">
            <div class="meal-title">${title}</div>
            <div class="meal-description">${description}</div>
            <section class="price-rating-section">
                <div class="price">$${price}</div>
                <div class="rating">
                    <div class="star-icon">
                    </div>
                    <div class="rating-text">${rating}/5</div>
                </div>
            </section>
        </section>
    </div>`;

    mealsGridDIV.innerHTML += mealTileHTML;
  });
};

const renderMealsEventListener = () => {
  document.getElementById("breakfast").addEventListener("click", () => {
    renderMeals("Breakfast");
  });

  document.getElementById("lunch").addEventListener("click", () => {
    renderMeals("Lunch");
  });

  document.getElementById("dinner").addEventListener("click", () => {
    renderMeals("Dinner");
  });
};

renderMealsEventListener();
