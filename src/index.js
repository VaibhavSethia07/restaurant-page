import "./styles/hover.css";
import "./styles/main.css";
import renderNavigationBar from "./components/navigation";
import renderHomePage from "./components/home";
import {
  renderMenuPage,
  renderMeals,
  addMealsEventListener,
} from "./components/menu";
import {
  renderFAQPage,
  renderFAQs,
  addAnswerEventListener,
} from "./components/faqs";
import renderNewsletterPage from "./components/newsletter";
import renderFooterPage from "./components/footer";

const firstRender = () => {
  const bodyDIV = document.querySelector("body");
  bodyDIV.innerHTML = "";

  renderNavigationBar();
  renderHomePage();
  renderMenuPage();
  renderMeals("Breakfast");
  renderFAQPage();
  renderFAQs();
  renderNewsletterPage();
  renderFooterPage();
};

firstRender();
addMealsEventListener();
addAnswerEventListener();
