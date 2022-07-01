const renderNewsletterPage = () => {
  const bodyDIV = document.querySelector("body");
  const newsletterHTML = `<main class="newsletter-page">
    <div class="newsletter-container">
        <div class="newsletter-info">Join our community and get discount upto 50%</div>
        <form action="" method="post" class="newsletter-form">
            <input type="email" name="email" id="email" placeholder="Enter your email here" required>
            <button for="email" class="btn join-btn">Join</button>
        </form>
    </div>
</main>`;

  bodyDIV.innerHTML += newsletterHTML;
};

export default renderNewsletterPage;
