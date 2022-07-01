import faqs from "../assets/data/faqs";

const renderFAQPage = () => {
  const bodyDIV = document.querySelector("body");
  const faqsHTML = `<main id="faq-page">
  <h1 class="faq-heading">Frequently Asked Questions</h1>
  <div class="faqs">
  </div>
</main>`;

  bodyDIV.innerHTML += faqsHTML;
};

const renderFAQs = () => {
  const faqsDIV = document.querySelector(".faqs");
  faqsDIV.innerHTML = "";

  faqs.forEach((faq) => {
    const faqHTML = `<div class="question-container">
      <div class="question">${faq.question}</div>
      <button class="open-close-btn hvr-grow">+</button>
  <p class="answer" hidden>${faq.answer}</p>
  </div>`;

    faqsDIV.innerHTML += faqHTML;
  });
};

const addAnswerEventListener = () => {
  const faqsDIV = document.querySelector(".faqs");
  const faqHTMLNodes = faqsDIV.childNodes;
  faqHTMLNodes.forEach((faqNode) => {
    const openCloseBtn = faqNode.childNodes[3];
    openCloseBtn.addEventListener("click", () => {
      const answerDIV = faqNode.childNodes[5];
      openCloseBtn.textContent = answerDIV.hidden ? "-" : "+";
      answerDIV.hidden = !answerDIV.hidden;
    });
  });
};

export { renderFAQPage, renderFAQs, addAnswerEventListener };
