/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. If you are calling your function from the global scope, this will refer to the window object.

* 2. If you are calling your function from a method or function scope, this will refer to the variable/function      to the left of the . notation. example myObj.speak(); the this refers to myObj.

* 3. If you call your function with the 'new' keyword, it will create a new binding.  This then refers to the         new instance of the object. It will change with each new instance.

* 4. .call and .apply means that you will overwrite what .this points to and explicitly bind it to the new value. example.      jerry.speak.call(newman); will print "Hello Jerry"
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sayName(name) {
    return name;
}
sayName('Kristi');

// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }
}

myObj.sayHello('Kristi');

// Principle 3
// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello',
    this.greeter = greeter,
    this.speak = function() {
        console.log(`${this.greeting} ${this.greeter}`)
    }
}
const oscar = new CordialPerson('Kristi');
const kristi = new CordialPerson('Oscar');
kristi.speak();cd 

// Principle 4
// code example for Explicit Binding

kristi.speak.call(oscar);
oscar.speak.call(kristi);