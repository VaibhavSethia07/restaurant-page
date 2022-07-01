const renderNavigationBar = () => {
  const bodyDIV = document.querySelector("body");
  const navbarHTML = `<nav>
    <div class="company-name-large"><a href="#">Foodie</a></div>
    <div class="nav-options">
        <div class="nav-option"><a href="#home-page">Home</a></div>
        <div class="nav-option"><a href="#menu-page">Menu</a></div>
        <div class="nav-option"><a href="#faq-page">FAQ</a></div>
    </div>
</nav>
`;

  bodyDIV.innerHTML += navbarHTML;
};

export default renderNavigationBar;
