const makeFAQ = (question, answer) => {
  return { question, answer };
};

const faqs = [
  makeFAQ(
    "The delivery man cancelled my order. What should I do?",
    "We're extremely sorry for the inconvenience. Please report this issue through our app with a photo of the food or you can also immediately contact our support team using the helpline."
  ),
  makeFAQ(
    "Can I edit my order?",
    "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
  ),
  makeFAQ(
    "Is there a minimum order value?",
    "We have no minimum order value and you can order for any amount."
  ),
  makeFAQ(
    "Do you charge for delivery?",
    "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. "
  ),
  makeFAQ(
    "How long do you take to deliver?",
    "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant."
  ),
];

export default faqs;
