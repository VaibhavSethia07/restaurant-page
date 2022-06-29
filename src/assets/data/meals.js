const makeMeal = (type, title, imageUrl, description, price, rating) => {
  return { type, title, imageUrl, description, price, rating };
};

const meals = [
  makeMeal(
    "Breakfast",
    "chef's board",
    "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "a fine collection of meats, cheeses, and other edible delights from the minds of our chefs.",
    34,
    4.1
  ),
  makeMeal(
    "Breakfast",
    "thumpers feast",
    "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "a vegetarian version of the chef's board.",
    12,
    3.8
  ),
  makeMeal(
    "Breakfast",
    "lemon devilled eggs",
    "https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "tarragon cream cheese stuffed eggs, with shaved sharp cheese, on a bed of arugula, with ginger lemon dressing.",
    9,
    4.2
  ),
  makeMeal(
    "Breakfast",
    "stuffed portabello",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "baked portabello, stuffed with cream cheese and herbs. Topped with Japanese bread crumbs, on a bed of arugula, with lemon ginger dressing... which we strongly encourage you to devour!",
    14,
    3.5
  ),
  makeMeal(
    "Breakfast",
    "cast iron poutine",
    "https://images.unsplash.com/photo-1579867779026-d8285a8c9625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "potatoes, cheese, bacon in a cast iron fry pan.",
    12,
    3.9
  ),
  makeMeal(
    "Breakfast",
    "tribe salad",
    "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "cantaloupe, cucumber, tomato, goat cheese, nuts, kalamata olives, lime, cilantro, red onion.",
    13,
    3.8
  ),
];

export default meals;
