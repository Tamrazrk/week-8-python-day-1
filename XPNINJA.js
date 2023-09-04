// Exercise 1 : Bird Class

/*

The Bird class has a constructor that logs "I'm a bird. 🦢" when an instance is created.

The Flamingo class extends Bird. It has its own constructor that logs "I'm pink. 🌸" and then calls super(). The super() call invokes the constructor of the parent class (Bird), which also logs "I'm a bird. 🦢".

const pet = new Flamingo(); creates an instance of the Flamingo class, which triggers the constructor of the Flamingo class first, followed by the constructor of the Bird class due to the super() call.

output will be: 
I'm pink. 🌸
I'm a bird. 🦢

First, "I'm pink. 🌸" is logged from the Flamingo constructor, and then "I'm a bird. 🦢" is logged from the Bird constructor due to the super() call in the Flamingo constructor.

*/
