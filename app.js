const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(appetizerIn){
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },

  set mains(mainIn){
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set desserts(dessertIn){
    this._courses.desserts = desserts;
  },
  get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

    addDishToCourse (courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse (courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },

    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;

      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
    }
  };

  menu.addDishToCourse('appetizers', 'Spring Rolls', 4.50);
  menu.addDishToCourse('appetizers', 'Nori', 3.45);
  menu.addDishToCourse('appetizers', 'Prawn Toast', 5.00);

  menu.addDishToCourse('mains', 'Sweet and Sour Chicken', 6.00);
  menu.addDishToCourse('mains', 'Chow Mein', 5.50);
  menu.addDishToCourse('mains', 'Special Fried Rice', 5.60);

  menu.addDishToCourse('desserts', 'Mochi', 4.00);
  menu.addDishToCourse('desserts', 'Profiteroles', 3.55);
  menu.addDishToCourse('desserts', 'Ice Cream', 2.75);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
