// Exercise 1 : Location

/*
    1) The person object is defined, which has properties like name, age, and location. The location property itself is an object containing country, city, and coordinates.

    2) Destructuring assignment is used to extract values from the person object:

    name is extracted directly from person.name.
    location is extracted as an object from person.location.
    country, city, and coordinates are extracted from the location object. The coordinates array is further destructured into lat and lng.


    3) The console.log statement is used to print a formatted string:

    ${name} refers to the extracted name property of the person object.
    ${city} and ${country} refer to the extracted city and country properties from the location object.
    ${lat} and ${lng} refer to the extracted lat and lng variables from the coordinates array within the location object.


*/

// Exercise 2: Display Student Info

function displayStudentInfo({ first, last }) {
  const fullName = `${first} ${last}`;

  return `Your full name is ${fullName}`;
}

const result = displayStudentInfo({ first: "Elie", last: "Schoppik" });
console.log(result);

// Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users);

const multipliedUserArray = userArray.map(([user, id]) => [user, id * 2]);

console.log(multipliedUserArray);

// Exercise 4 : Person Class

/*

1) An instance of the Person class is created with the name 'John' and assigned to the member variable.

2) The typeof operator is used to determine the type of the member variable.

The typeof operator returns "object" because member is an instance of the Person class, which is an object. It doesn't specifically indicate the class name but rather the general JavaScript object type.

*/

// Exercise 5 : Dog Class

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

/*

The Labrador class extends the Dog class using extends Dog.

Inside the Labrador constructor, it calls super(name); which calls the constructor of the parent class (Dog) with the name parameter. This ensures that the name property is properly initialized in the Labrador instance.

It also initializes the size property specific to the Labrador class.

Options 1, 3, and 4 have issues:

Option 1 doesn't call super(name);, which means it doesn't properly initialize the name property from the parent class, leading to an error.

Option 3 attempts to call super(name); but doesn't provide the name parameter, which would result in an error.

Option 4 doesn't call super(name); and instead directly assigns the name property within the Labrador constructor, which is not recommended for correctly inheriting properties from the parent class.

*/

// Exercise 6 : Challenges

/*

[2] === [2]: False. This comparison checks whether two different array objects have the same reference in memory, which they do not. Even if the arrays have the same contents, they are separate objects, so the comparison is false.

{} === {}: False. Similar to the previous case, this comparison checks whether two different objects have the same reference in memory, which they do not. Both {} expressions create distinct empty objects.

*/

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  sound(sound) {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${sound}`;
  }
}

const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("moos"));
