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
    "baked portabello, stuffed with cream cheese and herbs. Topped with Japanese bread crumbs, on a bed of arugula, with lemon ginger dressing...",
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
  makeMeal(
    "Lunch",
    "zuppa",
    "https://images.unsplash.com/photo-1601356616077-695728ae17cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "chef alex and team knock it out of the park, with tribe's hand-crafted soup. Inspired by flavours from around the world.",
    7,
    3.5
  ),
  makeMeal(
    "Lunch",
    "proscuitto salmon",
    "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    "prosciutto-wrapped salmon filet; oven-baked with garlic butter, and topped with warm sambuca tomato sauce.",
    18,
    3.7
  ),
  makeMeal(
    "Lunch",
    "the burger",
    "https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    "6 oz sous vide Alberta beef patty, rockets, tomato, confit garlic aioli, maitre d'hôtel butter, dill infused pickled onions.",
    17,
    3.9
  ),
  makeMeal(
    "Lunch",
    "crab and shrimp mac & cheese",
    "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    "panko crusted cheesey cavatappi, with crab and shrimp, and a side of arugula salad. topped with beet-pickled onion, and a slice of house-made buttered bread.",
    24,
    4
  ),
  makeMeal(
    "Lunch",
    "snappy dresser",
    "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    "italian sausage, green pepper, mushroom, onion, mozzarella, tomato basil sauce.",
    18,
    4.2
  ),
  makeMeal(
    "Lunch",
    "marrakesh",
    "https://images.unsplash.com/photo-1627309302198-09a50ae1b209?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "moroccan-spiced chicken, roasted garlic, turmeric yogurt, caramelized onion, goat cheese, green olive, roasted lemon, honey drizzle.",
    18,
    3.9
  ),
  makeMeal(
    "Dinner",
    "gochujang chicken",
    "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGlubmVyJTIwbm9uJTIwdmVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "korean-style chicken with coconut rice, topped with nori & sesame seed, served with kim chi slaw.",
    22,
    4.7
  ),
  makeMeal(
    "Dinner",
    "ouzo mousaka",
    "https://images.unsplash.com/photo-1535473895227-bdecb20fb157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "sultana raisin beef ragu, roasted eggplant, onion, tomato, bell pepper, garlic, potato, lemon, scented bechamel.",
    23,
    4.1
  ),
  makeMeal(
    "Dinner",
    "mashed potato chocolate cake with penuche icing",
    "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    "seriously, a rich chocolate cake, with walnuts, and a brown sugar fudge icing.",
    9,
    4.3
  ),
  makeMeal(
    "Dinner",
    "tribe gelato",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "we make our gelato in house. ask about our featured flavours. each is paired with an accoutrement... something perfect.",
    9,
    3.5
  ),
  makeMeal(
    "Dinner",
    "ay caramba chocolate pot",
    "https://images.unsplash.com/photo-1591459034470-d1e05d7b05d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    "mexican-spiced, rich, creamy, chocolate, with fire dust to warm your cockles.",
    12,
    3.8
  ),
  makeMeal(
    "Dinner",
    "lox & cream cheese flatbread",
    "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "soft poached eggs, bacon and tomato served with lemony house-made hollandaise.",
    18,
    4
  ),
];

export default meals;
