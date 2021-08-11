// The Switch Case Statement

// get current day (0-6)
let day = new Date().getDay();

console.log(day)
// get current day (Sun-Sat)
let literal_day = new Date().toString()

console.log(literal_day)


// Switch case Statement Syntax

switch(day){
    case 0:
        console.log('Go to church...');
        break;
    case 1:
        console.log('Write code... it is Monday!');
        break;
    case 2:
        console.log('Test code on Tuesday!');
        break;
    case 3:
        console.log("Testing more code...");
        break;
    case 4:
        console.log("Write new feature for website - Thu");
        break;
    case 5:
        console.log('Hit the bar - Friday night!');
        break;
    case 6:
        console.log("Go to the game");
        break;
    default:
        console.log('That is not a day!')
}
// literal day
switch(literal_day.split(" ")[0]){
    case "Sun":
        console.log('Go to church...');
        break;
    case "Mon":
        console.log('Write code... it is Monday!');
        break;
    case "Tue":
        console.log('Test code on Tuesday!');
        break;
    case "Wed":
        console.log("Testing more code...");
        break;
    case "Thu":
        console.log("Write new feature for website - Thu");
        break;
    case "Fri":
        console.log('Hit the bar - Friday night!');
        break;
    case "Sat":
        console.log("Go to the game");
        break;
    default:
        console.log('That is not a day!')
}

// Creation of Objects
// Simple JS Object

let person = {
    name: 'John',
    age: 28,
    fav_color: 'Green'
};

//Accessing Data in Object
console.log(person['name']) // Bracket
console.log(person.name) // Dot notation


// Complex JS Object
let person2 = {
    name: "Max",
    age: 31,
    prog_langs: ['Java', 'JS', 'Python', 'C#'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago Cubs',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Bulls', 'Sky'],
            soccer: ['Manchester United', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'GB Packers',
            basketball: 'LA Lakers',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
};

// Accessing values from complex Object
console.log(person2.prog_langs[3])
console.log(person2.teams[0].basketball[0])

// JS Object Prototype Methods - Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Looping through an object in JS - Looking for keys
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
};

// List all values from person 2 that are Arrays
for(let i = 0; i < Object.values(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }else{
        console.log("Not an Array")
    }
};

// Create our own Object Prototype -- with ES5 Method Syntax
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    // Create methods inside of JS Prototype
    this.printInfo = (color, wheels = 0) => {
        console.log(`This is a ${this.year} ${this.make} ${this.model}. It has ${wheels} wheels and it is ${color}`)

        return "Done"
    }
}

// Create an instance
let my_car = new Car('Subaru', 'WRX STI', 2020)

//running class method
console.log(my_car.printInfo('Red'))


// -- JavaScript Classes -- ES6 Standard //

class Human{
    constructor(name, age, height){
        this.age = age;
        this.name = name;
        this.height = height;
    }

    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nHeight: ${this.height}`
    }
}

// Create an instance of Human
let jessica = new Human('Jessica', 29, "5ft 8in")

// call class method on jessica to print off her info
console.log(jessica.printInfo())


// JS example of Class inheritance
class Baby extends Human{
    constructor(name, age, height, walking){
        super(name, age, height)
        this.walking = walking;
    }
    isBabyWalking(){
        if(this.walking == true){
            return 'Baby can walk!'
        }else{
            return 'Baby cannot walk...'
        }
    }
}

// instantiate Baby class
let bob = new Baby('Bob', 1, '1ft 6in', true);
console.log(bob.isBabyWalking())
console.log(bob.printInfo())

// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

*/

let count_up = (() => {
    let counter = 0; // This is a private(local) variable stored in this function
    console.log('Count')
    return () => {return counter++}
})()
console.log(count_up())
console.log(count_up())
console.log(count_up())
console.log(count_up())

//Another example

let addNames = (() => {
    let names = [];
    console.log('Names Array Created...')
    return (name) => {
        console.log(`Adding ${name} into array...`)
        names.push(name)
        return names
    }
})()

console.log(addNames('Nate'))
console.log(addNames('Marcus'))
console.log(addNames('Brian'))


// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic Example

let first = () => {
    console.log(1)
};

let second = () => {
    console.log(2)
};

// first()
// second()


// What if first takes awhile...
let first_delay = () => {
    //Simulated delay
    setTimeout(() =>{
        console.log(1)
    }, 5000)
};

let second_delay = () => {
    console.log(2)
};

// first_delay()
// second_delay()

// Callback function Syntax
let doHomework = (subject, callback) =>{
    alert(`Starting my ${subject} homework`)
    callback()
};

// doHomework('JavaScript', () =>{
//     console.log('Done with Homework')
// })

/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// We Solve this with JS Promise

// === Creating a JS Promise

const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if(num % 2 == 0){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

// Using the Promise isEvenNumber
// isEvenNumber(10)
// .then( (result) => {
//     console.log(`Even Number: ${result}`)
// })
// .catch((error) => {
//     console.log(`Odd Number ${error}`)
// })

// Another example of promises using builtin Async/Await

//Base functionality to get new salary
let increase_salary = (base, increase) => {
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`)
}

//function to slowly increase salary (meant to simulate going to get some data slowly)
let slow_addition = (n1,n2) =>{
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1+n2), 2000)
    })
}

// increase_salary(40000,2000)

// console.log(slow_addition(40000, 2000))

// this will return an unresolved promise and attempt to execute remaining code because we didn't tell JS to WAIT
let increase_slow_salary = (base, increase) => {
    const new_salary = slow_addition(base,increase);
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

increase_slow_salary(40000, 2000)


// This async function waits for a promise resolution or error to continue executing
//meant to simulate waiting for a specific user input or some sort of incoming data
let async_increase_salary = async(base, increase) => {
    const new_salary = await slow_addition(base,increase);
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}


async_increase_salary(40000,40000)



